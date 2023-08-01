import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Box, Paper, Stack, Typography } from "@mui/material";

import BottomNavigationComponnet from "@components/BottomNavComponent";
import LoaderComponent from "@components/LoaderComponent";

const RootPage = () => {
	return (
		<Stack
			direction="column"
			alignItems="flex-start"
			justifyContent="flex-start"
			sx={{
				width: "100%",
				flex: 1,
			}}
		>
			<Box sx={{ flex: 1, width: "100%" }}>
				<React.Suspense fallback={<LoaderComponent />}>
					<Outlet />
				</React.Suspense>
			</Box>
			<Paper
				sx={{
					width: "100%",
					height: "fit-content",
				}}
				elevation={3}
			>
				<BottomNavigationComponnet />
			</Paper>
		</Stack>
	);
};

export default RootPage;
