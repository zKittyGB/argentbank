import { createAction, createReducer } from '@reduxjs/toolkit'
import {selectUser} from '../utils/selectors'

const initialState = {
    status:'void',
    data:null,
    error:null,
};
//action creator
export const fetching = createAction('users/fetching');
export const resolved = createAction('users/resolved');
export const rejected = createAction('users/rejected');

/** function that create the fetch protocole */
export async function fetchOrUpdateUser(store, loggin, password) {
    const status = selectUser(store.getState()).status
    if (status === 'pending' || status === 'updating') {
      return
    }
    const requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email: `${loggin}`,
            password: `${password}`
          })
    };
    store.dispatch(fetching())
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions)
      console.log(response)
      const data = await response.json()
      store.dispatch(resolved(data))
    } catch (error) {
      store.dispatch(rejected(error))
    }
  }

export default createReducer(initialState, (builder) =>
    builder
    .addCase(fetching, (draft, action) => {
        if (draft.status ==='void'){
            draft.status ='pending'
            return;
        }
        if (draft.status ==='rejected'){
            draft.error = null
            draft.status = 'pending'
            return
        }
        if (draft.status === 'resolved'){
            draft.status = 'updating'
            return
        }
        return
    })
    .addCase(resolved, (draft, action)=>{
        if (draft.status === 'pending' || draft.status === 'updating'){
            draft.data = action.payload
            draft.status = 'resolved'
            return
        }
        return
    })
    .addCase(rejected, (draft, action)=>{
        if (draft.status === 'pending' || draft.status ==='updating'){
            draft.error = action.payload
            draft.data = draft.status = 'rejected'
            return
        }
        return
    })
)