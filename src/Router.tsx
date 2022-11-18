import { Routes, Route } from 'react-router-dom'

import { CreateOkr } from './pages/CreateOkr'
import { DashboardOkr } from './pages/DashboardOkr'
import { Feedback } from './pages/Feedback'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { Orks } from "./pages/Okr's"
import { Register } from './pages/Register'
import { Tasks } from './pages/Tasks'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage check={false} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/okrs" element={<Orks />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/create-okr" element={<CreateOkr />} />
      <Route path="/dashboard" element={<DashboardOkr />} />
    </Routes>
  )
}
