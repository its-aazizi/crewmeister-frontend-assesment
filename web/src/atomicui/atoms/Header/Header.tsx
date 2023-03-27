import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<>
			<AppBar data-testid="header" position="static">
				<Toolbar>
					<Typography fontSize={{ xs: "1rem", md: "2rem" }}>Crewmeister</Typography>
					<Box flexGrow={1} />
					<Typography fontSize={{ xs: "0.6rem", sm: "0.8rem", md: "1rem" }}>Developed by: Ahmad Azizi</Typography>
				</Toolbar>
			</AppBar>
			<Box padding="1rem">
				<Outlet />
			</Box>
		</>
	);
};

export default Header;
