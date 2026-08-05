import { useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router";
import { Welcome } from "../Welcome";
import { Users } from "../Users";
import { UsersBackend } from "../UsersBackend";

const ProtectedRoutes = () => {
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('accessToken')) || null

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [navigate, user])



    return (
        <>
            <Routes>
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/users' element={<Users />} />
                <Route path="/users-backend" element={<UsersBackend />} />
                <Route path="*" element={<p>Not found</p>} />
            </Routes>
        </>
    );
}

export { ProtectedRoutes }  