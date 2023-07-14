import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div
			className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
			{/* <!-- Copyright --> */}
			<Link to={"/"}>
				<div className="text-white ms-5">
					<i className="fa-solid fa-user-plus my-2 fs-4"> LOGO</i>
				</div>
			</Link>
			<Link to={"/registro"}>
				<button type="button" className="btn btn-light col-12 px-5 me-5">Register</button>
			</Link>
			{/* <!-- Right --> */}
		</div>
	);
};
