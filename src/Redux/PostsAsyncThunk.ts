import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPost } from '../Models/IPost'

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
