import React from 'react';
import { NavLink } from 'react-router';
import './topBar.css';

function Topbar() {
    return (
        <header className="topbar">
            <div className="topbar-container">
                <div className="topbar-brand">
                    <span className="brand-title">DevPortal</span>
                </div>

                <nav className="topbar-nav">


                    <NavLink to={'/welcome'} className="btn-home">
                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <span>Inicio</span>
                    </NavLink>

                    <NavLink to={'/users'} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span>Usuarios Frontend</span>
                    </NavLink>

                    <NavLink to={'/users-backend'} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                        <span>Usuarios Backend</span>
                    </NavLink>
                    <NavLink to={'/verperfil'} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>Ver perfil</span>
                    </NavLink>



                </nav>
            </div>
        </header>
    );
}

export { Topbar }