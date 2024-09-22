import { useState } from 'react'

const PostForm = () => {
  const [post, setPost] = useState({ title: '', body: '' })

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={label.toLowerCase()}
        onChange={handleChangeInput}
        value={post[label.toLowerCase()]}
      />
    </div>
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(post)
    setPost({ title: '', body: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Title')}
      {renderField('Body')}
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
