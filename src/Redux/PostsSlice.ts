import { createAsyncThunk } from '@reduxjs/toolkit'
interface IPost {
   userId: number
   id: number
   title: string
   body: string
}

const getAllPosts = createAsyncThunk('posts', async (thunkApi) => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
   const posts: IPost = await response.json()
   return posts
})
