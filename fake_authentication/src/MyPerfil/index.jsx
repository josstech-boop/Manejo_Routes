import { useEffect, useState } from "react";
import { ApiClient } from "../utils/api";
import './perfil.css';

const MiPerfil = () => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        const getProfile = async () => {
            const response = await ApiClient.get('/auth/me', {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}` }
            });
            setProfile(response.data);
        };
        getProfile();
    }, []);

    return (
        <div className="profile-page-container">
            <div className="profile-card-page">
                <div className="profile-header">
                    <div className="avatar-large">
                        <span>{profile?.firstName ? profile.firstName[0] : 'U'}</span>
                    </div>
                    <h4>{profile?.firstName} {profile?.lastName}</h4>
                </div>

                <div className="profile-body">
                    <div className="profile-field">
                        <span className="field-label">Usuario</span>
                        <span className="field-value text-cyan">@{profile?.username}</span>
                    </div>
                    <div className="profile-field">
                        <span className="field-label">Genero</span>
                        <span className={`badge badge-${profile?.gender}`}>{profile?.gender}</span>
                    </div>

                    <div className="profile-field">
                        <span className="field-label">Nombre Completo</span>
                        <span className="field-value">{profile?.firstName} {profile?.lastName}</span>
                    </div>

                    <div className="profile-field">
                        <span className="field-label">Correo Electrónico</span>
                        <span className="field-value">{profile?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { MiPerfil };