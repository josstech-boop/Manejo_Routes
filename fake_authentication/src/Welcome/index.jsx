import { useState } from "react"
import { Link } from "react-router"
import "./welcome.css"

const Welcome = () => {

    const [nombre] = useState(JSON.parse(localStorage.getItem('firstName')) || 'undefined')

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <h3 className="welcome-title">
                    Welcome <span className="highlight-name">{nombre}</span>!
                </h3>
                <p className="welcome-subtitle">Has ingresado correctamente al sistema</p>

                <Link className="btn-users" to={'/users'}>
                    Ir a Usuarios Frontend
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>

                <Link className="btn-users-backend" to={'/users-backend'}>
                    Ir a Usuarios Backend
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export { Welcome }