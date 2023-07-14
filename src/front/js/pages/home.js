import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [credentials, setCredentials] = useState({
		username: "",
		email: "",
		password: ""
	})

	const navigate = useNavigate();

	useEffect(() => {
		if (store.token) {
			navigate("/bienvenido"); 
		  }
	}, [store.token])

	const iniciarSesion = async () => {
		let respond = await actions.login(credentials);
		console.log(respond);
		if (respond) {
			//alert("Bienvenido ha ingresado con exito!");
		}
		else {
			alert("Error, intente de nuevo.");
			setCredentials({
				...credentials,
				username: "",
				password: ""
			});
		}
	};


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

								<div className="form-outline mb-4">
									<input type="username" id="form3Example3" className="form-control form-control-lg"
										value={credentials.username}
										placeholder="Username" onChange={event => {
											setCredentials({
												...credentials,
												username: event.target.value
											});
										}} />
								</div>

								{/* <!-- Email input --> */}
								<div className="form-outline mb-4">
									<input type="email" id="form3Example3" className="form-control form-control-lg"
										value={credentials.email}
										placeholder="Email" onChange={event => {
											setCredentials({
												...credentials,
												email: event.target.value
											});
										}} />
								</div>
								{/* 
								<!-- Password input --> */}
								<div className="form-outline mb-3">
									<input type="password" id="form3Example3" className="form-control form-control-lg"
										value={credentials.password}
										placeholder="Password" onChange={event => {
											setCredentials({
												...credentials,
												password: event.target.value
											});
										}} />
								</div>

								<div className="text-center text-lg-start d-flex justify-content-center mt-4 pt-2">
									<button type="button" className="btn btn-primary btn-lg col-12"
										style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={() => iniciarSesion()}>Login</button>
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
