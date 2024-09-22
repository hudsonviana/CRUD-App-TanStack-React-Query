import { useMutation, useQueryClient } from '@tanstack/react-query'
import PostForm from './PostForm'
import { createPost } from '../api/posts'
import { v4 as uuidv4 } from 'uuid'

const AddPost = () => {
  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  })

  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...post,
    })
  }

  return (
    <div>
      <h2>Add new post</h2>
      <PostForm onSubmit={handleAddPost} />
    </div>
  )
}

export default AddPost
