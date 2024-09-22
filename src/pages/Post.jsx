import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchPost } from '../api/posts'
import { Link } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
  })

  if (isError) return `Ocorreu um erro: ${error}`
  if (isLoading) return 'Carregando...'

  return (
    <div>
      <Link to={'/'}>Voltar</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
