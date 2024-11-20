import React, { useState, useEffect } from "react";
import "../css/Table.css";

const initialUsers = JSON.parse(localStorage.getItem("users"));
const loggedInUserEmail = JSON.parse(localStorage.getItem("loggedInUser"));

function ConfirmationPopup({ onConfirm, onCancel }) {
  return (
    <div style={popupStyles.overlay}>
      <div style={popupStyles.popup}>
        <p>Are you sure you want to delete this user?</p>
        <div>
          <button style={popupStyles.button} onClick={onConfirm}>
            Yes
          </button>
          <button style={popupStyles.button} onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

function UserList() {
  const [users, setUsers] = useState(initialUsers);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Save users to localStorage whenever the users state changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Start editing
  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  // Save edited user
  const handleSave = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUserId
          ? { ...user, name: editName, email: editEmail }
          : user
      )
    );

    localStorage.setItem("users", JSON.stringify(users));

    setEditingUserId(null);
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter((user) => user.id !== userToDelete.id));
    setShowPopup(false);
    setUserToDelete(null);
  };

  const cancelDelete = () => {
    setShowPopup(false);
    setUserToDelete(null);
  };

  return (
    <div>
      <h2>User List</h2>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingUserId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </td>
                  <td>                    
                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      disabled = {loggedInUserEmail === user.email}
                    />
                  </td>
                  <td>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditingUserId(null)}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button disabled = {loggedInUserEmail === user.email} onClick={() => handleDeleteClick(user)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <ConfirmationPopup onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
}

const popupStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  button: {
    margin: "0 10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
  },
};

export default UserList;
