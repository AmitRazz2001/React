import { createSlice } from "@reduxjs/toolkit";
import service from "../appwrite/config";

const initialState = {
    status:"",
    posts : [],
    error : ""
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers : {
        allPosts : (state) => {
            state.status = "loading";
        },
        allPostSuccess : (state, action) => {
            state.status = "success";
            state.posts = action.payload;
        },
        allPostError : (state, action) => {
            state.status = "false";
            state.error = action.payload;
        },
    },
})

export const {allPosts, allPostSuccess, allPostError} = postSlice.actions;

export const fetchPostsAsync = () => async(dispatch) => {
    dispatch(allPosts());
    try{
        const res = await service.getPosts([]);
        dispatch(allPostSuccess(res.documents));
    }catch(error){
        dispatch(allPostError(error));
    }
}

export default postSlice.reducer