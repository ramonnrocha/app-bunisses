import {
  CalendarCheck,
  ChartBar,
  Crosshair,
  House,
  ThumbsUp,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { NavBarContainer } from './styles'

export function NavBar() {
  return (
    <NavBarContainer>
      <NavLink to="/home" end title="Home">
        <House size={48} />
      </NavLink>
      <NavLink to="/okrs" end title="Criar OKR">
        <Crosshair size={48} />
      </NavLink>
      <NavLink to="/home" end title="FeedBack">
        <ThumbsUp size={48} />
      </NavLink>
      <NavLink to="/home" end title="Agenda">
        <CalendarCheck size={48} />
      </NavLink>
      <NavLink to="/dashboard" end title="Dashboard">
        <ChartBar size={48} />
      </NavLink>
    </NavBarContainer>
  )
}
