import { useQuery } from '@tanstack/react-query'
import AddPost from '../components/AddPost'
import { fetchPosts } from '../api/posts'
import { useNavigate } from 'react-router-dom'

const PostLists = () => {
  const navigate = useNavigate()
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isError) return `Ocorreu um erro: ${error}`
  if (isLoading) return 'Carregando...'

  return (
    <div>
      <AddPost />
      {posts.map((post) => (
        <div key={post.id} style={{ background: '#d1c7c7' }}>
          <h4
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            {post.title}
          </h4>
          <button onClick={() => navigate(`/post/${post.id}/edit`)}>
            Editar
          </button>{' '}
          <button>Deletar</button>
        </div>
      ))}
    </div>
  )
}

export default PostLists
