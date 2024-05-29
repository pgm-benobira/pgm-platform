import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Elements/Header";

export default function Root() {
	return (
		<>
			<Header />
			<main>
                {/* Here comes the content of the page */}
				<Outlet />
			</main>
		</>
	);
}