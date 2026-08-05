import { useEffect, useState } from 'react';
import { ApiClient } from '../utils/api';

const UsersBackend = () => {

    const [users, setUsers] = useState([])
    const [pagination, setPagination] = useState(10)
    const [posicion, setPosicion] = useState(0)
    const [loading, setLoading] = useState(true)
    const [totalPaginas, setTotalPagina] = useState(0)

    useEffect(() => {
        const getUsers = async () => {

            const { data } = await ApiClient.get('/users', { params: { limit: pagination, skip: posicion * pagination } })

            if (data.users.length > 0) {

                setUsers(data.users)
                const paginas = Math.ceil(data.total / pagination)
                setTotalPagina(paginas)
                
            }
        }
        getUsers()
    }, [pagination, posicion])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])

    return (
        <>
            <div className="table-container">
                <div className="pagination-container">
                    {/* Selector de items por página */}
                    <div className="items-per-page">
                        <label htmlFor="pageSize">Mostrar:</label>
                        <select value={pagination} id="pageSize"
                            className="custom-select"
                            onChange={(event) => { setPagination(Number(event.target.value)), setPosicion(0) }}
                        >
                            <option value="10">10 por página</option>
                            <option value="20">20 por página</option>
                            <option value="50">50 por página</option>
                        </select>
                    </div>

                    {/* Botones de navegación */}
                    <div className="pagination-buttons">
                        <button type="button" className="btn-pagination"
                            onClick={() => posicion > 0 && setPosicion(prev => prev - 1)}
                        >
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                            Anterior
                        </button>

                        <span className="pagination-info">
                            Página <strong className="text-cyan">{posicion + 1}</strong> de <strong>{totalPaginas}</strong>
                        </span>

                        <button type="button" className="btn-pagination"
                            onClick={() => posicion < totalPaginas - 1 && setPosicion(prev => prev + 1)}
                        >
                            Siguiente
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`table-card ${loading ? 'is-loading' : ''}`}>
                    {/* CAPA DE CARGA (LOADING OVERLAY) */}
                    <div className="table-loader-overlay">
                        <div className="spinner"></div>
                        <p className="loader-text">Cargando usuarios...</p>
                    </div>

                    <div className="table-header">
                        <h3>Lista de Usuarios</h3>
                    </div>

                    <div className="table-wrapper">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Género</th>
                                    <th>Correo</th>
                                    <th>Teléfono</th>
                                    <th>Fecha de Nac.</th>
                                    <th>Contraseña</th>
                                    <th>Rol</th>
                                </tr>
                            </thead>
                            <tbody>

                                {users.map((user, index) => (

                                    <tr key={index}>
                                        <td className="font-semibold text-cyan">@{user.firstName
                                        }</td>
                                        <td>{user.username} {user.lastName}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <span className={`badge badge-${user.gender}`}>{user.gender}</span>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.birthDate}</td>
                                        <td className="text-muted">{user.password}</td>
                                        <td>{user.role}</td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>


            </div >
        </>

    );
}

export { UsersBackend } 