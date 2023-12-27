/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";
import SignUpNew from "../pages/Welcome/Signup";

export default function Router() {
	const routing = useRoutes([
		{
			path: "/users/sign_up_new",
			element: <SignUpNew />,
		},
	]);
	return routing;
}
