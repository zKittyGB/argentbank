import {  createSlice  } from '@reduxjs/toolkit'
//slice for the profil fetch/update action / reducer 
const profilSlice = createSlice({
    name:'profilFetch',
    initialState:{
        fetch:{
            status:'void',
            data:null,
            error:null,  
        },
        user:{
            id:null,
            firstName:null,
            lastName:null,
            email:null,
            createdAt:null,
            updatedAt:null,
        }
    },
    reducers:{
        //reducer to fetch the user's profil
        //fetching state reducer
        fetchingProfil: {
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
        resolvedProfil: {
            reducer:(draft, action)=>{
                if (draft.fetch.status === 'pending' || draft.fetch.status === 'updating'){
                    draft.fetch.data = action.payload
                    draft.user.id = action.payload.body.id
                    draft.user.firstName = action.payload.body.firstName
                    draft.user.lastName = action.payload.body.lastName
                    draft.user.email = action.payload.body.email
                    draft.user.createdAt = action.payload.body.createdAt
                    draft.user.updatedAt = action.payload.body.updatedAt
                    draft.fetch.status = 'resolved'
                    return
                }
                return
            }
            },
        rejectedProfil: {
            //rejected state reducer
            reducer:(draft, action)=>{
                if (draft.fetch.status === 'pending' || draft.fetch.status ==='updating'){
                    draft.fetch.error = action.payload
                    draft.fetch.data = draft.fetch.status = 'rejected'
                    return
                }
                return
            }
        },
        //reducer to fetch the user's profil update
        //fetching state reducer
        fetchingupdateProfil: {
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
        resolvedupdateProfil: {
            reducer:(draft, action)=>{
                if (draft.fetch.status === 'pending' || draft.fetch.status === 'updating'){
                    draft.fetch.data = action.payload
                    draft.user.firstName = action.payload.body.firstName
                    draft.user.lastName = action.payload.body.lastName
                    draft.fetch.status = 'resolved'
                    return
                }
                return
            }
        },
        //rejected state reducer
        rejectedupdateProfil: {
            reducer:(draft, action)=>{
                if (draft.fetch.status === 'pending' || draft.fetch.status ==='updating'){
                    draft.fetch.error = action.payload
                    draft.fetch.data = draft.fetch.status = 'rejected'
                    return
                }
                return
            }
        },
    }
})

const { actions, reducer } = profilSlice
export const {fetchingProfil, resolvedProfil, rejectedProfil, fetchingupdateProfil, resolvedupdateProfil, rejectedupdateProfil} = actions
export default reducer