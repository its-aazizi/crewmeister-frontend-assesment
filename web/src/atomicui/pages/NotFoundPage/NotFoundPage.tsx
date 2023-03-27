import React from "react";

import { Grid, Typography } from "@mui/material";

const NotFoundPage: React.FC = () => {
	return (
		<Grid container>
			<Grid item xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
				<Typography fontSize={{ xs: "2rem", md: "4rem" }} textAlign="center">
					Error 404
				</Typography>
				<Typography fontSize={{ xs: "1rem", md: "2rem" }} textAlign="center">
					Page Not Found
				</Typography>
			</Grid>
		</Grid>
	);
};

export default NotFoundPage;
