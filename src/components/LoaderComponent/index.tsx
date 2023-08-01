import { Box, CircularProgress, styled } from "@mui/material";

const Container = styled(Box)(() => ({
	width: "100%",
	height: "100%",
	backgorundColor: "rgba(0,0,0.0.75)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const LoaderComponent = () => {
	return (
		<Container>
			<CircularProgress />
		</Container>
	);
};

export default LoaderComponent;
