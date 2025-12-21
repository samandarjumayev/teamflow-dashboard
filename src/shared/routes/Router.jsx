import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/public/Login";
import Register from "../../pages/public/Register";
import App from "../../App";
import AuthLayout from "../layout/AuthLayout";
import Team from "../../pages/dashboard/Team";
import ProtectedRouter from "./ProtectedRouter";
import Tasks from "../../pages/dashboard/Tasks";
import Settings from "../../pages/dashboard/Settings";
import Files from "../../pages/dashboard/Files";
import Dashboard from "../../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <AuthLayout /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <Register /> },
            { path: '/team', element: (<ProtectedRouter> <Team /> </ProtectedRouter>) },
            { path: '/tasks', element: (<ProtectedRouter> <Tasks /> </ProtectedRouter>) },
            { path: '/settings', element: (<ProtectedRouter> <Settings /> </ProtectedRouter>) },
            { path: '/files', element: (<ProtectedRouter> <Files /> </ProtectedRouter>) },
            { path: '/dashboard', element: (<ProtectedRouter> <Dashboard /> </ProtectedRouter>) },
        ]
    },
])