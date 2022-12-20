import {  createSlice  } from '@reduxjs/toolkit'

const updateProfilSlice = createSlice({
    name:'updateProfil',
    initialState:{
        fetch:{
            status:'void',
            data:null,
            error:null,  
        }
    },
    reducers:{
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
        resolvedupdateProfil: {
            reducer:(draft, action)=>{
                if (draft.fetch.status === 'pending' || draft.fetch.status === 'updating'){
                    draft.fetch.data = action.payload
                    draft.fetch.status = 'resolved'
                    return
                }
                return
            }
        },
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

const { actions, reducer } = updateProfilSlice
export const {fetchingupdateProfil, resolvedupdateProfil, rejectedupdateProfil } = actions
export default reducer