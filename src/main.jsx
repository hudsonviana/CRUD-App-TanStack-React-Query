import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.jsx'
import PostLists from './pages/PostLists.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PostLists /> },
      { path: '/post/:id', element: <Post /> },
      { path: '/post/:id/edit', element: <EditPost /> },
    ],
  },
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
