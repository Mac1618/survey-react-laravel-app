import { createBrowserRouter } from "react-router-dom";

// Pages
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Surveys from "../pages/Surveys";

// Layouts
import DefaultLayout from "../components/Layouts/DefaultLayout";
import GuestLayout from "../components/Layouts/GuestLayout";

// Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/surveys",
        element: <Surveys />,
    },

    // Not logged in user routes
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "sign-up",
                element: <Signup />,
            },
            {
                path: "sign-in",
                element: <Login />,
            },
        ],
    },
]);

// export routes
export default router;
