import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { ContentContainer } from '../../styles/global'
import {
  DashboardContainer,
  DashInfo,
  DivInfoStats,
  FilterOkrContainer,
  StatsContainer,
} from './styles'

export function DashboardOkr() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>

      <ContentContainer>
        <DashInfo>
          <h2>DashBoard</h2>
          <StatsContainer>
            <DivInfoStats>
              <h2>Total</h2>
              <strong>12</strong>
            </DivInfoStats>
            <DivInfoStats>
              <h2>Em andamento</h2>
              <strong>10</strong>
            </DivInfoStats>
            <DivInfoStats>
              <h2>Atenção</h2>
              <strong>4</strong>
            </DivInfoStats>
            <DivInfoStats>
              <h2>Atrasados</h2>
              <strong>2</strong>
            </DivInfoStats>
          </StatsContainer>
          <FilterOkrContainer></FilterOkrContainer>
        </DashInfo>
      </ContentContainer>
    </>
  )
}
