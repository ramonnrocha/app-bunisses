import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['background-color']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
