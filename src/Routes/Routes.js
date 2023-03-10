import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/ErrorPage/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
]);