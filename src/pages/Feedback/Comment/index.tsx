import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../../../components/Avatar'

import {
  CommentBox,
  CommentBoxContainer,
  CommentContainer,
  CommentContent,
} from './styles'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <CommentContainer>
      <Avatar />
      <CommentBox>
        <CommentContent>
          <header>
            <div className="authorAndTime">
              <strong>Ramonn Rocha</strong>
              <time dateTime="2022-05-11 08:13:00"> Publicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </CommentContent>
        <CommentBoxContainer>
          <footer className="commentBox">
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir<span>{likeCount}</span>
            </button>
          </footer>
        </CommentBoxContainer>
      </CommentBox>
    </CommentContainer>
  )
}
