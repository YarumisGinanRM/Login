import React, { useContext } from "react";
import "../../styles/landingPage.css";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <>
            {
                store.token ?
                    <>
                        <div className="landing-page container-fluid p-0 m-0">
                            <div className="row d-flex justify-content-center align-items-center m-0">
                                <div className="col-md-8 col-lg-6 col-xl-4 text-center p-0 m-0">
                                    <h1 className="mb-3">¡Bienvenido {store.user}!</h1>
                                    <i className="fa-solid fa-hand-holding-heart text-primary my-3"></i>
                                    <h4 className="mt-3 mb-2">Haz iniciado sesión correctamente</h4>
                                    <h4>¡Gracias por unirte!</h4>
                                </div>
                                <div className="col-6 p-0">
                                    <img src="https://netmente.com/images/tab1.jpg"
                                        className="img-fluid" alt="Sample image" />
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                    {navigate("/")}
                    </>
            }
        </>
    )
}