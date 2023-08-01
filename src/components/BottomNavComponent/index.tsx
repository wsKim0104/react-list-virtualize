import React from "react";
import { useNavigate } from "react-router-dom";

import { List } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

type urlValueType = "collection" | "upload" | "eSeaDoll";

type BottomNavigationDataType = {
	label: string;
	value: string;
	icon: React.ReactNode;
};

const BottomNavigationData: BottomNavigationDataType[] = [
	{
		label: "react-window",
		value: "react-window",
		icon: <List />,
	},
];

const BottomNavigationComponnet = () => {
	const navigate = useNavigate();
	const [urlValue, setUrlValue] = React.useState<urlValueType>("collection");
	return (
		<BottomNavigation
			showLabels
			value={urlValue}
			onChange={(event, newValue) => {
				navigate(newValue);
				setUrlValue(newValue);
			}}
		>
			{BottomNavigationData.map((v) => (
				<BottomNavigationAction
					key={v.label}
					label={v.label}
					value={v.value}
					icon={v.icon}
				/>
			))}
		</BottomNavigation>
	);
};

export default BottomNavigationComponnet;
