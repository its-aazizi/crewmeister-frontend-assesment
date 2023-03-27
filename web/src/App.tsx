import React, { StrictMode, Suspense } from "react";

import { CircularProgress, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Routes, ToastContainer } from "core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appTheme } from "theme";
import "react-toastify/dist/ReactToastify.min.css";
import "theme/global.scss";

const App: React.FC = () => {
	const router = createBrowserRouter(Routes);

	return (
		<StrictMode>
			<Suspense
				fallback={
					<CircularProgress
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							color: "#BD68F2"
						}}
					/>
				}
			>
				<StyledEngineProvider injectFirst>
					<ThemeProvider theme={appTheme}>
						<ToastContainer />
						<RouterProvider router={router} />
					</ThemeProvider>
				</StyledEngineProvider>
			</Suspense>
		</StrictMode>
	);
};

export default App;
