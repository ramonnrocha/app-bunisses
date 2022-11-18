import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  display: flex;
  margin-left: 10rem;
`

export const PostContainer = styled.div`
  display: flex;
  margin-left: 10rem;
  background: ${(props) => props.theme['icon-details']};
  padding: 4rem;
  font-size: 1.6rem;

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

  .author div {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: left;

    strong {
      font-size: 1.6rem;
      font-weight: 700;
      display: block;
      color: var(--gray-100);
      line-height: 1.6;
    }

    span {
      font-size: 1.4rem;
      display: block;
      color: var(--gray-400);
      line-height: 1.6;
    }
  }
`

export const CommentContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme['icon-details']};
  margin-top: 2.4rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-inline: 0;
  padding-block: 2.4rem;
`
