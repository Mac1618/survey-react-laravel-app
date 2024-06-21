import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React router dom
import { RouterProvider } from "react-router-dom";

// Routers
import router from "./routers/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
