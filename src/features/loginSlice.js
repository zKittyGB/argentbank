import {  createSlice  } from '@reduxjs/toolkit'
//slice for the login action / reducer 
const loginSlice = createSlice({
    name:'loginFetch',
    initialState:{
        fetch:{
            status:'void',
            data:null,
            error:null,  
        },
        token:null,
    },
    reducers:{
        //fetching state reducer
        fetchingLogin: {
            reducer:(draft, action) => {
                if (draft.fetch.status ==='void'){
                    draft.fetch.status ='pending'
                    return;
                }
                if (draft.fetch.status ==='rejected'){
                    draft.fetch.error = null
                    draft.fetch.status = 'pending'
                    return
                }
                if (draft.fetch.status === 'resolved'){
                    draft.fetch.status = 'updating'
                    return
                }
                return
            }
        },
        //resolved state reducer
        resolvedLogin: {
            reducer:(draft, action)=>{
                if (draft.fetch.status === 'pending' || draft.fetch.status === 'updating'){
                    draft.fetch.data = action.payload
                    if(draft.fetch.data.status === 200){
                        draft.token = action.payload.body.token
                    }
                    draft.fetch.status = 'resolved'
                    return
                }
                return
            }
        },
        //rejected state reducer
        rejectedLogin: {
            reducer:(draft, action)=>{
                if (draft.fetch.status === 'pending' || draft.fetch.status ==='updating'){
                    draft.fetch.error = action.payload
                    draft.fetch.data = draft.fetch.status = 'rejected'
                    return
                }
                return
            }
        },
        //logout reducer
        logout: {
            reducer:(draft, action)=>{
                //Token remover
                draft.token = null
            }
        }
    }
})

const { actions, reducer } = loginSlice
export const {fetchingLogin, resolvedLogin, rejectedLogin, logout } = actions
export default reducer