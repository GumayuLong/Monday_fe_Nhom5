/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";
import SignUpNew from "../pages/Welcome/Signup";
import CreateAccount from "../pages/Welcome/CreateAccount";
import Test from "../pages/Welcome/Test";

export default function Router() {
	const routing = useRoutes([
		{
			path: "/users/sign_up_new",
			element: <SignUpNew />,
		},
		{
			path: "/users/invitation/accept",
			element: <CreateAccount />,
		},
	]);
	return routing;
}
