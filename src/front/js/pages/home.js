import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<section className="vh-100">
				<div className="container-fluid h-custom">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-md-9 col-lg-6 col-xl-5">
							<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="img-fluid" alt="Sample image" />
						</div>
						<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
							<form>
								<div className="d-flex justify-content-center m-2">
									<h2 className="text-center">Iniciar Sesión</h2>
								</div>

								{/* <!-- Email input --> */}
								<div className="form-outline mb-4">
									<input type="email" id="form3Example3" className="form-control form-control-lg"
										placeholder="Email address" />
								</div>
								{/* 
								<!-- Password input --> */}
								<div className="form-outline mb-3">
									<input type="password" id="form3Example4" className="form-control form-control-lg"
										placeholder="Password" />
								</div>

								<div className="text-center text-lg-start d-flex justify-content-center mt-4 pt-2">
									<button type="button" className="btn btn-primary btn-lg col-12"
										style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
								</div>
								<div className="d-flex flex-inline  mt-3 pt-1 ">
									<h5 className="mx-2">¿No tienes cuenta?</h5>
									<Link to={"/registro"}>
										<h5 className="text-primary">Registrate</h5>
									</Link>
								</div>

							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
