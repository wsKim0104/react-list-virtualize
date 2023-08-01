import { Outlet } from "react-router-dom";

import { Stack } from "@mui/material";

const ReactWindow = () => {
	return (
		<Stack direction="column" sx={{ width: "100%", height: "100%" }}>
			<Outlet />
		</Stack>
	);
};

export default ReactWindow;
