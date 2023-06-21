import axios from 'axios'
//import { AppDispatch } from './Store'
//import { postFetching, postFetchingError, postFetchingSuccess } from './PostsSlice'
import { IPost } from '../Models/IPost'
import { createAsyncThunk } from '@reduxjs/toolkit'

const getErrorMessage = (error: unknown) => {
   if (error instanceof Error) return error.message
   return String(error)
}

export const getAllPosts = createAsyncThunk('getAllPosts', async (__, thunkAPI) => {
   try {
      const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error))
   }
})
