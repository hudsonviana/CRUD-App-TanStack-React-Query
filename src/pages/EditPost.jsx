import { Link, useNavigate, useParams } from 'react-router-dom'
import PostForm from '../components/PostForm'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchPost, updatePost } from '../api/posts'

const EditPost = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
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

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', id] })
      navigate('/')
    },
  })

  if (isError) return `Ocorreu um erro: ${error}`
  if (isLoading) return 'Carregando...'

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({ id, ...updatedPost })
  }

  return (
    <div>
      <Link to={'/'}>Voltar</Link>
      <br />
      <br />
      <PostForm onSubmit={handleSubmit} initialValue={post} />
    </div>
  )
}

export default EditPost
