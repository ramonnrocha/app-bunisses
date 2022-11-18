import { ChangeEvent, FormEvent, useState } from 'react'
import { Avatar } from '../../components/Avatar'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { Profile } from '../../components/Profile'
import { CommentContainer, FeedbackContainer, PostContainer } from './styles'

export function Feedback() {
  const [comments, setComments] = useState([''])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommnetChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
  }

  function onDeleteComment(commentToDelete: string) {
    const commentsWhithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWhithoutDeletedOne)
  }

  function handlwNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <FeedbackContainer>
        <Profile></Profile>
        <PostContainer>
          <header>
            <div>
              <Avatar />
              <div className="author">
                <strong>Ramonn Rocha</strong>
                <span>Developer Junior</span>
              </div>
            </div>

            <time title="11 de maior as 8:13h" dateTime="2022-05-11 08:00:00">
              Publicado a 1 hr
            </time>
          </header>
          <CommentContainer>
            <footer>
              <h4>Deixe seu feedback</h4>
              <form onSubmit={handleCreateNewComment} action="">
                <textarea
                  value={newCommentText}
                  name="comment"
                  onChange={handlwNewCommentChange}
                  required
                  placeholder="Deixe um comentário"
                />
                <button type="submit" disabled={isNewCommentEmpty}>
                  Publicar
                </button>
              </form>
            </footer>
          </CommentContainer>
          <div></div>
        </PostContainer>
      </FeedbackContainer>
    </>
  )
}
