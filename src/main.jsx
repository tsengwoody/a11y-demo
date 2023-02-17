import StepsLayout, { loader as stepsLoader } from "./Steps/Layout.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// errorElement: <ErrorPage />,
		children: [
			{
				path: "steps/:step",
				element: <StepsLayout />,
				loader: stepsLoader,
			},
		],
	},
], {
	basename: "/a11y-demo",
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
