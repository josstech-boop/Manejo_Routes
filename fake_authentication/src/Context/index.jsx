import { createContext } from "react";
import { replace, useNavigate } from "react-router";
import { ApiClient } from '../utils/api';
import { useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [usuario, setUsuario] = useState('')

    const navigate = useNavigate()


    const login = async (event, form) => {
        event.preventDefault()
        setLoading(true)

        try {

            setError(false)

            setMessage('')
            const { data: { accessToken, firstName, refreshToken } } = await ApiClient.post('/auth/login', form)
            
            localStorage.setItem('accessToken', JSON.stringify(accessToken))
         
            navigate('/welcome', { replace: true })

            setUsuario({firstName, refreshToken})

            console.log(usuario)



        } catch (error) {

            setError(true)
            setMessage(error.response.data.message)

        } finally {
            setLoading(false)
        }

    }



    return (
        <AuthContext.Provider value={{
            message,
            error,
            loading,
            login,
            usuario
        }}>
            {children}

        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext } 