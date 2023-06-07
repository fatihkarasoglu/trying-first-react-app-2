import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: 'todos',
    initialState: {
        user: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = auth.actions
export default auth.reducer