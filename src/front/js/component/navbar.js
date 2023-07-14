import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const LogOut = () => {
		actions.logOut();
		navigate("/");
	}

	return (
		<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
			<Link to={"/"}>
				<div className="text-white ms-5">
					<i className="fa-solid fa-user-plus my-2 fs-4"> LOGO</i>
				</div>
			</Link>
			{
				!store.token ?
					<>
						<Link to={"/registro"}>
							<button type="button" className="btn btn-light rounded-pill col-12 px-5 me-5">Register</button>
						</Link>
					</>
					:
					<div className="d-flex justify-content-end align-items-center ">
						<button onClick={() => LogOut()} className="btn btn-light col-12 px-5 rounded-pill">Cerrar Sesión</button>
					</div>
			}

		</div>
	);
};
