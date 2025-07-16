import { createBrowserRouter } from "react-router";
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import AppLayout from "../pages/AppLayout";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <AppLayout />,
        // children:[
        //     {
        //         path: "/layout/nowplaying",
        //         element: <NowPlaying />
        //     }
        // ]
    }
])

export default router;