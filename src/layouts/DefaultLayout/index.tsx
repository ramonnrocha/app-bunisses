import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { LayoutContainer } from './styles'

export function DefautLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <NavBar />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
