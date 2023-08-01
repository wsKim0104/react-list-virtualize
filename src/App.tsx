/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import LoaderComponent from "@components/LoaderComponent";

import ReactWindow from "@pages/ReactWindow";
import FixedSizeList from "@pages/ReactWindow/FixedSizeList";
import VariableSizeList from "@pages/ReactWindow/VariableSizeList";
import RootPage from "@pages/root";

const useStyles = makeStyles({
	root: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
		errorElement: <LoaderComponent />,
		children: [
			{
				path: "react-window",
				element: <ReactWindow />,
				errorElement: <LoaderComponent />,
				children: [
					{
						index: true,
						element: <FixedSizeList />,
						errorElement: <LoaderComponent />,
					},
					{
						path: "variable-size-list",
						element: <VariableSizeList />,
						errorElement: <LoaderComponent />,
					},
				],
			},
		],
	},
]);

const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<React.Suspense fallback={<LoaderComponent />}>
				<RouterProvider router={router} />
			</React.Suspense>
		</div>
	);
};

export default App;
