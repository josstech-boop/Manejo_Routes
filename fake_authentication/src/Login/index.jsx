import React, { useEffect, useState } from 'react';
import './login.css';
import { ApiClient } from '../utils/api';
import { useNavigate } from 'react-router';

function Login() {

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            navigate('/welcome')
        }
    },[navigate])

    const login = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {

            setError(false)

            setMessage('')
            const { data: { accessToken, firstName, refreshToken } } = await ApiClient.post('/auth/login', form)
            localStorage.setItem('accessToken', JSON.stringify(accessToken))
            localStorage.setItem('firstName', JSON.stringify(firstName))
            localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
            navigate('/welcome')

            console.log(accessToken, firstName, refreshToken)


        } catch (error) {

            console.log(error.status)
            console.log(error.response.data.message)

            setError(true)
            setMessage(error.response.data.message)

        } finally {
            setLoading(false)
        }

    }

    const OnChangeInput = (event) => {
        const { name, value } = event.target

        setForm((prev) => ({
            ...prev,
            [name]: value

        }))
    }


    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Bienvenido de nuevo</h2>
                    <p>Ingresa tus credenciales para acceder a tu cuenta</p>
                </div>

                {error && <div className='mensajeError'><p >⚠️ {message} </p></div>}

                <form className="login-form" onSubmit={login}>
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