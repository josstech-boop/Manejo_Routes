import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Welcome } from './Welcome/index.jsx'
import { Login } from './Login/index.jsx'
import { ProtectedRoutes } from './ProtectedRoutes/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='*' element={<ProtectedRoutes />} />


    </Routes>

  </BrowserRouter>,
)
