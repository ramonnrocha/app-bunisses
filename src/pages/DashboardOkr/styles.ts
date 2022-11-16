import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15rem;
  margin-right: 3rem;
  width: auto;
`

export const DashInfo = styled.div`
  width: 100%;
  height: min(70rem);

  border-radius: 8px;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: ${(props) => props.theme['blue-black']};

  h2 {
    margin-top: 2rem;
    font-size: 3.2rem;
  }
`

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 4rem;
  margin: 4rem;
`
export const DivInfoStats = styled.div`
  width: 50rem;
  margin-inline: 3rem;
  height: 25rem;
  border: 3px solid ${(props) => props.theme['grey-hover']};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 6rem;
  color: ${(props) => props.theme['blue-black']};

  strong {
    font-size: 4rem;
  }
`
