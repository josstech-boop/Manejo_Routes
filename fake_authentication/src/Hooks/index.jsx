import { useContext } from "react"
import { AuthContext } from "../Context"

const useAuth = () => {
    const Auth = useContext(AuthContext)
    return {...Auth} 
}

export { useAuth } 