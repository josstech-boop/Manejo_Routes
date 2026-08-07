import { useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router";
import { Welcome } from "../Welcome";
import { Users } from "../Users";
import { UsersBackend } from "../UsersBackend";
import { Topbar } from "../TopBar";
import { AuthProvider } from "../Context";
import { MiPerfil } from "../MyPerfil";


const ProtectedRoutes = () => {

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('accessToken')) || null

    if (!user) {
        navigate('/')
    }

    return (
        <>
            <Topbar />
            <Routes>
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/users' element={<Users />} />
                <Route path="/users-backend" element={<UsersBackend />} />
                <Route path="/verperfil" element={<MiPerfil />} />

                <Route path="*" element={<p>Not found</p>} />
            </Routes>

        </>
    );
}

export { ProtectedRoutes }  