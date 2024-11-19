import React, { useState } from "react";
import "../css/Tabs.css"; // Optional: for custom styling
import UserList from "./UserList";
import { Link } from "react-router-dom";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1); // Track the currently active tab

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs-container">
      {/* Tab Headers */}
      <div className="tabs-header">
        <button
          className={activeTab === 1 ? "tab active" : "tab"}
          onClick={() => handleTabClick(1)}
        >
          Group Chat
        </button>
        <button
          className={activeTab === 2 ? "tab active" : "tab"}
          onClick={() => handleTabClick(2)}
        >
          Manage Users
        </button>
        <button
          className={activeTab === 3 ? "tab active" : "tab"}
          onClick={() => handleTabClick(3)}
        >
          Manage Documents
        </button>
        <Link to="/" className="tab">
          <button
            className={activeTab === 4 ? "tab active" : "tab"}
            onClick={() => handleTabClick(4)}
          >
            Logut
          </button>
        </Link>
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab === 1 && <div className="tab-panel">Content for Tab 1</div>}
        {activeTab === 2 && (
          <div className="tab-panel">
            {" "}
            <UserList></UserList>
          </div>
        )}
        {activeTab === 3 && <div className="tab-panel"></div>}
        {activeTab === 4 && <div className="tab-panel">Content for Tab 4</div>}
      </div>
    </div>
  );
}

export default Tabs;
