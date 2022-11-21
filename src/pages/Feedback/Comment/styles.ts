import styled from 'styled-components'

export const CommentContainer = styled.div`
  margin: 4rem;
  display: flex;
  gap: 1.6rem;
  width: 100%;
  max-width: 120rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 8px;
  }
`
export const CommentBox = styled.div`
  flex: 1;
  width: auto;

  footer button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['icon-details']};
    margin-block: 2rem;
    margin-inline: 1rem;
    gap: 1rem;

    cursor: pointer;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    border-radius: 2px;
  }

  footer button:hover {
    color: ${(props) => props.theme['blue-hover']};
  }

  footer button svg {
    margin-right: 1rem;
  }

  footer button span::before {
    content: '\2022';
    padding: 0 1rem;
  }
`
export const CommentContent = styled.div`
  border-radius: 8px;
  padding: 1.6rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme['icon-details']};
  border-radius: 8px;
  padding-inline: 2rem;
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  header button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['icon-details']};
    cursor: pointer;
    line-height: 0;
    border-radius: 4px;
    transition: color 0.2s;
  }

  header button:hover {
    color: ${(props) => props.theme['danger-red']};
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme['blue-linear']};
    font-size: 1.4rem;
  }
  .authorAndTime strong {
    display: block;
    font-size: 1.4rem;
    line-height: 1.6;
  }

  .authorAndTime time {
    display: block;
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${(props) => props.theme['blue-linear']};
  }
`

export const CommentBoxContainer = styled.footer`
  button:hover {
    color: var(--green - 300);
  }
  footer button svg {
    margin-right: 1rem;
  }
  button span::before {
    content: '\2022';
    padding: 0 1rem;
  }
`
