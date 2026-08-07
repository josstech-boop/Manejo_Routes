import { useState } from "react"
import { Link } from "react-router"
import "./welcome.css"
import { useAuth } from "../Hooks"

const Welcome = () => {

    const { usuario } = useAuth()
    console.log(usuario.firstName)
    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <h3 className="welcome-title">
                    Welcome <span className="highlight-name">{usuario.firstName}</span>!
                </h3>
                <p className="welcome-subtitle">Has ingresado correctamente al sistema</p>
            </div>
        </div>
    )
}

export { Welcome }