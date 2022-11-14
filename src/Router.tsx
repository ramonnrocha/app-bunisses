import { Routes, Route } from 'react-router-dom'

import { CreateOkr } from './pages/CreateOkr'
import { DashboardOkr } from './pages/DashboardOkr'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { Register } from './pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create-okr" element={<CreateOkr />} />
      <Route path="/dashboard" element={<DashboardOkr />} />
    </Routes>
  )
}
