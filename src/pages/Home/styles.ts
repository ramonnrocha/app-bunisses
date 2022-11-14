import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-left: 15rem;
`
export const SidebarContainer = styled.div`
  background: ${(props) => props.theme['background-color']};
  border: 2px solid ${(props) => props.theme['blue-linear']};
  font-size: 1.6rem;
  border-radius: 8px;
  overflow: hidden;
  height: 48.2rem;
  width: 33.8rem;
  margin-left: 4rem;
  margin-top: 4rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 999px;
  }

  footer {
    border-top: 1px solid;
    color: var(--gray-600);
    margin-top: 5rem;
    padding-inline: 3.2rem;
    padding-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer a {
    background-color: transparent;
    width: 100%;
    height: 5rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--green-580);
    text-decoration: none;
    border: solid 1px;
    border-radius: 8px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 2.4rem 3.6rem;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
  }

  footer a:hover {
    background: ${(props) => props.theme['blue-linear']};
    color: white;
  }
`
export const CoverContainer = styled.div`
  width: 100%;
  height: 9rem;
  background-color: ${(props) => props.theme['blue-linear']};
  object-fit: cover;
  overflow: hidden;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: -2rem;
  margin-bottom: 1rem;

  strong {
    font-size: 1.6rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['blue-linear']};
    line-height: 1.6;
  }

  span {
    font-size: 1.6rem;
    color: ${(props) => props.theme['icon-details']};
    line-height: 1.6;
  }
`
export const OkrsInfoContainer = styled.div`
  border: 2px solid ${(props) => props.theme['blue-linear']};
  border-radius: 8px;
  padding-top: 2rem;
  width: 80rem;
  height: 48.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
  margin-right: 3rem;
  flex: 1;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['background-color']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['blue-linear']};
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['background-color']};
      border-top: 2px solid ${(props) => props.theme['blue-linear']};
      padding: 1rem;
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'danger-red',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
