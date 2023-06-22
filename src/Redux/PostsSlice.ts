import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPost } from '../Models/IPost'
import { getAllPosts } from './PostsAsyncThunk'

interface postsState {
	posts: IPost[]
	isLoading: boolean
	error: string
}

const initialState: postsState = {
	posts: [],
	isLoading: false,
	error: '',
}

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllPosts.pending.type]: state => {
			state.isLoading = true
		},
		[getAllPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
			state.isLoading = false
			state.posts = action.payload
		},
		[getAllPosts.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default postSlice.reducer
