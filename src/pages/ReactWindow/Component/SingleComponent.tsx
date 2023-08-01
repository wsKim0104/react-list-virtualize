import { CSSProperties } from "react";

import { Box, Stack, Typography } from "@mui/material";

import Wakdu from "@assets/img/wd1.jpg";

type RowProps = {
	style: CSSProperties;
};

const SingleComponent = ({ style }: RowProps) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-around"
			sx={{
				width: "100%",
				padding: "10px",
				boxSizing: "border-box",
				border: "1px solid #454545",
				...style,
			}}
		>
			<Box
				component="img"
				src={Wakdu}
				sx={{ width: "105px", height: "105px" }}
			/>
			<Typography
				sx={{ flex: 1, height: "100%" }}
				fontSize="16px"
				fontWeight="700"
			>
				호나우두
			</Typography>
		</Stack>
	);
};

export default SingleComponent;
