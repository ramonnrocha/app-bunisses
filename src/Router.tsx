import { Routes, Route } from 'react-router-dom'

import { CreateOkr } from './pages/CreateOkr'
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
    </Routes>
  )
}
