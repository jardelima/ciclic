import React from "react";
import Simulator from "../pages/Simulator/Simulator";
import Result from "../pages/Result/Result";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from "../contexts/Context";

function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Simulator />,
            errorElement: <ErrorPage />
        },
        {
            path: "/result",
            element: <Result />,
        },
        {
            path: "/error",
            element: <ErrorPage />,
        },
    ]);

    return (
        <Context>
            <RouterProvider router={router} />
        </Context>
    )
}

export default Router;
