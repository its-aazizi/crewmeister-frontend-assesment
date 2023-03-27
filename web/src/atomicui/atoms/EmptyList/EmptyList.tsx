import React from "react";

import { Box, Typography } from "@mui/material";

const EmptyList: React.FC = () => {
	return (
		<Box data-testid="empty-list" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
			<Typography
				fontSize={{ xs: "1rem", md: "2rem" }}
				textAlign="center"
				padding={{ xs: "0 1rem", md: "0 3rem" }}
				marginBottom="1rem"
				color={theme => theme.palette.secondary.main}
			>
				No Absences to show
			</Typography>
			<Typography
				fontSize={{ xs: "0.5rem", md: "1rem" }}
				textAlign="center"
				padding={{ xs: "0 2rem", md: "0 10rem" }}
				marginBottom="2rem"
			>
				Please try again later
			</Typography>
		</Box>
	);
};

export default EmptyList;
