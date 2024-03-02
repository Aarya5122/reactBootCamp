import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.css";

import App from "./App";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Menu from "./pages/Menu";

const LazyAbout = lazy(() => import("./pages/About"));

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/restaurants",
				element: <Home />,
			},
			{
				path: "/restaurants/:resID",
				element: <Menu />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<h1>Loading About....</h1>}>
						<LazyAbout />
					</Suspense>
				),
			},
		],
		errorElement: <Error404 />,
	},
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter} />);
