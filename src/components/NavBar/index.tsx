import {
  CalendarCheck,
  ChartBar,
  Crosshair,
  House,
  ThumbsUp,
} from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import { NavBarContainer } from './styles'
import logoLogin from '../../assets/logo-mini.svg'

export function NavBar() {
  return (
    <NavBarContainer>
      <div>
        <img src={logoLogin} alt="" />
        <NavLink to="/home" end title="Home">
          <House size={48} />
        </NavLink>
        <NavLink to="/okrs" end title="Criar OKR">
          <Crosshair size={48} />
        </NavLink>
        <NavLink to="/feedback" end title="FeedBack">
          <ThumbsUp size={48} />
        </NavLink>
        <NavLink to="/tasks" end title="Tarefas">
          <CalendarCheck size={48} />
        </NavLink>
        <NavLink to="/dashboard" end title="Dashboard">
          <ChartBar size={48} />
        </NavLink>
      </div>
    </NavBarContainer>
  )
}
