import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/Hooks'
import { getAllPosts } from '../Redux/PostsAsyncThunk'

const Posts = () => {
   const dispatch = useAppDispatch()

   const { posts = [], isLoading, error } = useAppSelector((state) => state.posts)
   useEffect(() => {
      dispatch(getAllPosts())
   }, [dispatch])

   return (
      <div className="pb-8 flex justify-center flex-col items-center">
         {isLoading && <div>Loading...</div>}
         {error && <div className="text-red">{error}</div>}
         {posts.map((post) => (
            <div className="border border-sky-600 rounded-xl w-1/2 p-4 my-2">
               <div>
                  {post.id}. {post.title}
               </div>
               <div>{post.body}</div>
            </div>
         ))}
      </div>
   )
}
export default Posts
