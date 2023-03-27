import { lazy } from "react";

import { Navigate, RouteObject } from "react-router-dom";

import { appConfig } from "core/Constants";

const {
	ROUTES: { NOT_FOUND, ROOT, ABSENCES, ERROR }
} = appConfig;

const Header = lazy(() => import("atomicui/atoms/Header").then(res => ({ default: res.Header })));
const AbsencesPage = lazy(() => import("atomicui/pages/AbsencesPage").then(res => ({ default: res.AbsencesPage })));
const ErrorPage = lazy(() => import("atomicui/pages/ErrorPage").then(res => ({ default: res.ErrorPage })));
const NotFoundPage = lazy(() => import("atomicui/pages/NotFoundPage").then(res => ({ default: res.NotFoundPage })));

const Routes: RouteObject[] = [
	{
		path: "*",
		element: <Navigate to={NOT_FOUND} />,
		errorElement: <Navigate to={ERROR} />
	},
	{
		path: ROOT,
		element: <Navigate to={ABSENCES} />,
		errorElement: <Navigate to={ERROR} />
	},
	{
		element: <Header />,
		children: [
			{
				path: ABSENCES,
				element: <AbsencesPage />
			},
			{
				path: NOT_FOUND,
				element: <NotFoundPage />
			},
			{
				path: ERROR,
				element: <ErrorPage />
			}
		],
		errorElement: <Navigate to={ERROR} />
	}
];

export default Routes;
