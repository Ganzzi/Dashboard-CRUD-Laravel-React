import { Navigate, createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, NotFound, Signup, Users } from "./view";
import { GuestLayout, DefaultLayout } from "./components";
import UserForm from "./view/UserForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to={"/users"} />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/users/new",
                element: <UserForm key={"userCreate"} />,
            },
            {
                path: "/users/:id",
                element: <UserForm key={"userUpdate"} />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
