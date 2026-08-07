import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router';
import { useAuth } from '../Hooks';

function Login() {

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const { error, message, loading, login } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            navigate('/welcome')
        }
    }, [navigate])

    const OnChangeInput = (event) => {
        const { name, value } = event.target

        setForm((prev) => ({
            ...prev,
            [name]: value

        }))
    }

    // emilys
    // emilyspass

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Bienvenido de nuevo</h2>
                    <p>Ingresa tus credenciales para acceder a tu cuenta</p>
                </div>

                {error && <div className='mensajeError'><p >⚠️ {message} </p></div>}

                <form className="login-form" onSubmit={(event) => login(event, form)}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            name='username'
                            value={form.username}
                            type="text"
                            id="username"
                            placeholder="usuario"
                            autoComplete="off"
                            onChange={OnChangeInput}
                        />
                    </div>

                    <div className="input-group">
                        <div className="label-wrapper">
                            <label htmlFor="password">Contraseña</label>
                            <a href="#forgot" className="forgot-link">¿Olvidaste tu contraseña?</a>
                        </div>
                        <input
                            name='password'
                            value={form.password}
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            onChange={OnChangeInput}
                        />
                    </div>





                    {/* // Estado Carga Activa (Mostrando el spinner) */}
                    <button type="submit" className="btn-primary" >
                        {loading && <span className="btn-spinner"></span>}
                        <span>Iniciando sesión...</span>
                    </button>


                </form>

            </div>
        </div>
    );
}

export { Login }