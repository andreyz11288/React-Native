import { createSlice } from '@reduxjs/toolkit'


export const AuthSlice = createSlice({
    name: 'auth',
    initialState:{
        userId: null,
        nickname: null,
        stateChange: false,
    },
    reducers: {
        upDateUserProfile: (state, {payload})=>({...state, userId: payload.userId, nickname: payload.nickname}),
        authStateChange:   (state, {payload})=>({...state, stateChange: payload.stateChange}),
        authOutUser: (_,{payload})=>(payload),
        
    },
})
// console.log(AuthSlice);