import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterSuccess from "./components/RegisterSuccess";
import LoginSuccess from "./components/LoginSuccess";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/register-success",
      element: <RegisterSuccess />,
    },
    {
      path: "/login-success",
      element: <LoginSuccess />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
