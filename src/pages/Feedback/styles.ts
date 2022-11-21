import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20rem;
  margin-right: 5rem;
  gap: 5rem;
`
export const PostAndCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: auto;
  border: 2px solid ${(props) => props.theme['icon-details']};
  border-radius: 8px;
  box-shadow: 1px 3px 3px ${(props) => props.theme['icon-details']};
`

export const PostContainer = styled.div`
  background: transparent;
  padding: 2rem;
  font-size: 1.6rem;
  background-color: transparent;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
  }

  time {
    font-size: 1.2rem;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: left;
  }

  .authorInfo strong {
    font-size: 1.6rem;
    font-weight: 700;
    display: block;
    color: ${(props) => props.theme['blue-linear']};
    line-height: 1.6;
  }

  .authorInfo span {
    font-size: 1.4rem;
    display: block;
    color: ${(props) => props.theme['blue-linear']};
    line-height: 1.6;
  }

  .content {
    font-size: 1.6rem;
    line-height: 1.6;
    color: ${(props) => props.theme['blue-black']};
    margin-top: 2.4rem;
  }

  .content p {
    margin-top: 1.6rem;
  }

  .content a {
    font-weight: bold;
    color: ${(props) => props.theme['blue-linear']};
    text-decoration: none;
  }
`

export const PostFeedbackContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme['blue-linear']};
  margin-top: 2.4rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-inline: 0;
  padding-block: 2.4rem;

  strong {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme['blue-linear']};
  }

  textarea {
    border: 1px solid ${(props) => props.theme['icon-details']};
    padding: 1rem;
    background-color: var(--gray-900);
    color: ${(props) => props.theme['blue-black']};
    height: min(9.2rem);
    border-radius: 8px;
    resize: none;
    width: 100%;
    outline: none;
    font-size: 1.6rem;

    transition: border 0.2s;
  }

  textarea:hover {
    border: 1px solid ${(props) => props.theme['blue-linear']};
  }

  textarea:hover {
    border: 1px solid ${(props) => props.theme['blue-linear']};
  }

  .button {
    border-radius: 0.8rem;
    height: 4.9rem;
    width: 10.8rem;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['blue-linear']};
    color: white;
    margin-top: 1.6rem;

    border: none;
    cursor: pointer;
  }

  .button:not(:disabled):hover {
    background: ${(props) => props.theme['blue-medium']};
    border: 1px solid ${(props) => props.theme['blue-linear']};
  }

  .button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
