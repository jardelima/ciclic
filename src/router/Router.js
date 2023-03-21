import React from "react";
import Simulator from "../pages/Simulator/Simulator";
import Result from "../pages/Result/Result";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Simulator />,
            errorElement: <ErrorPage />
        },
        {
            path: "/result/:name/:payment/:time/:result",
            element: <Result />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;