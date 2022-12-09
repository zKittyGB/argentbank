import { createAction, createReducer } from '@reduxjs/toolkit'
import {selectUser} from '../utils/selectors'

const initialState = {
    status:'void',
    data:null,
    error:null,
};

export const fetching = createAction('users/fetching');
export const resolved = createAction('users/resolved');
export const rejected = createAction('users/rejected');

export async function fetchOrUpdateUser(store) {
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
            email: 'steve@rogers.com',
            password: 'password456'
          })
        // headers: { Authorization: `Bearer ${token}`}
    };
    store.dispatch(fetching())
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions)
      console.log(response)
      const data = await response.json()
      console.log(data)
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