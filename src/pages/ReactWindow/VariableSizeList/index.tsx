import { CSSProperties } from "react";
import { VariableSizeList as List } from "react-window";

import { Box, Typography } from "@mui/material";

const ItemLength = 1000;

const rowHeights = Array.from({ length: 1000 }).map(
	() => 25 + Math.round(Math.random() * 50)
);

const getItemSize = (index: number) => rowHeights[index];

type RowProps = {
	index: number;
	style: CSSProperties;
};

const Row = ({ index, style }: RowProps) => {
	return (
		<Box sx={{ width: "100%", textAlign: "center", ...style }}>
			<Typography fontSize={14} fontWeight={400}>
				Row Index {index}
			</Typography>
		</Box>
	);
};

const VariableSizeList = () => {
	return (
		<List
			height={150}
			itemCount={ItemLength}
			itemSize={getItemSize}
			width="100%"
			style={{
				border: "1px solid #000",
			}}
		>
			{Row}
		</List>
	);
};

export default VariableSizeList;
