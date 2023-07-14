import React from "react";
import "../../styles/landingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div>
            <div>
                <div className="landing-page">
                    <div className="overlay d-flex align-items-center justify-content-center flex-column">
                        <h1 className="mb-3">¡Bienvenido!</h1>
                        <i className="fa-solid fa-hand-holding-heart my-3"></i>
                        <h4 className="mt-3 mb-2">Haz iniciado sesión correctamente</h4>
                        <h4>¡Gracias por unirte!</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}