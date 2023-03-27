import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import { appConfig } from "core";
import { useNavigate, useRouteError } from "react-router-dom";

const {
	ROUTES: { ABSENCES }
} = appConfig;

const ErrorPage: React.FC = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	console.error({ error });

	const handleReload = () => navigate(ABSENCES, { replace: true });

	return (
		<Grid data-testid="error-page" container>
			<Grid item xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
				<Typography
					fontSize={{ xs: "2rem", md: "4rem" }}
					textAlign="center"
					padding={{ xs: "0 1rem", md: "0 3rem" }}
					marginBottom="1rem"
					color={theme => theme.palette.secondary.main}
				>
					Oops something went wrong!
				</Typography>
				<Typography
					fontSize={{ xs: "1rem", md: "2rem" }}
					textAlign="center"
					padding={{ xs: "0 2rem", md: "0 10rem" }}
					marginBottom="2rem"
				>
					We are already looking into it, click reload to continue what you were doing.
				</Typography>
			</Grid>
			<Grid item xs={4} />
			<Grid item xs={4} alignSelf="center">
				<Button sx={{ borderRadius: "1rem" }} variant="contained" fullWidth onClick={handleReload}>
					Reload
				</Button>
			</Grid>
			<Grid item xs={4} />
		</Grid>
	);
};

export default ErrorPage;
