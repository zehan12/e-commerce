import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status: "",
}


export const getPost = (pageNo) => {
    return {
        type: "get/post", 
        pageNo
    };
};


export const PostSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        pending: (state, action) => {
            return {
                ...state,
                status: "pending",
            }
        },
        fulfilled: (state, action) => {
            return {
                ...state,
                ...initialState,
                status: "fulfilled",
                data: action.payload,
            }
        },
        reject: () => {
            return {
                ...initialState,
                status: "reject"
            }
        }

    },
});

// Action creators are generated for each case reducer function
export const {
    postPending
} = PostSlice.actions

export default PostSlice.reducer