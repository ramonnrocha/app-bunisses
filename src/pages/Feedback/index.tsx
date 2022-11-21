import { Comment } from './Comment'

import { ChangeEvent, FormEvent, useState } from 'react'
import { Avatar } from '../../components/Avatar'
import {
  FeedbackContainer,
  PostAndCommentContainer,
  PostContainer,
  PostFeedbackContainer,
} from './styles'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: string
  content: string
}

interface PostProps {
  author: Author
  content: Content[]
}

export function Feedback({ author, content }: PostProps) {
  const [comments, setComments] = useState([''])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
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
        <PostAndCommentContainer>
          <PostContainer>
            <header>
              <div className="author">
                <Avatar />
                <div className="authorInfo">
                  <strong>Ramonn Rocha</strong>
                  <span>Dev</span>
                </div>
              </div>
            </header>
            <div className="content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                nostrum dolores recusandae libero! Placeat explicabo quo ab
                quisquam architecto magni nulla fugit quam enim. Veritatis, vel.
                Illum veniam minima consequatur.
              </p>
            </div>

            <PostFeedbackContainer>
              <h4>Deixe seu feedback</h4>
              <form onSubmit={handleCreateNewComment} action="">
                <textarea
                  value={newCommentText}
                  name="comment"
                  onChange={handlwNewCommentChange}
                  required
                  placeholder="Deixe um comentário"
                />
                <button
                  className="button"
                  type="submit"
                  disabled={isNewCommentEmpty}
                >
                  Publicar
                </button>
              </form>
            </PostFeedbackContainer>
          </PostContainer>
          <div>
            {comments.map((comment) => {
              return (
                <Comment
                  key={comment}
                  content={comment}
                  onDeleteComment={onDeleteComment}
                />
              )
            })}
          </div>
        </PostAndCommentContainer>
      </FeedbackContainer>
    </>
  )
}
