import { createAction, createReducer } from '@reduxjs/toolkit'
import {user} from '../utils/selectors'

const initialState = {
    connected: null,
    login:{
        status:'void',
        data:null,
        error:null,  
    },
};
//action creator
export const fetching = createAction('users/login/fetching');
export const resolved = createAction('users/login/resolved');
export const rejected = createAction('users/login/rejected');

/** function that create the fetch protocole */
export async function fetchOrUpdateUser(store, loggin, password) {
    const status = user(store.getState()).login.status
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
      const data = await response.json()
      store.dispatch(resolved(data))
      console.log(user(store.getState()))

    } catch (error) {
      store.dispatch(rejected(error))
    }
  }

export default createReducer(initialState, (builder) =>
    builder
    .addCase(fetching, (draft, action) => {
        if (draft.login.status ==='void'){
            draft.login.status ='pending'
            return;
        }
        if (draft.login.status ==='rejected'){
            draft.login.error = null
            draft.login.status = 'pending'
            return
        }
        if (draft.login.status === 'resolved'){
            draft.login.status = 'updating'
            return
        }
        return
    })
    .addCase(resolved, (draft, action)=>{
        if (draft.login.status === 'pending' || draft.login.status === 'updating'){
            draft.login.data = action.payload
            draft.login.status = 'resolved'
            draft.connected = true
            return
        }
        return
    })
    .addCase(rejected, (draft, action)=>{
        if (draft.login.status === 'pending' || draft.login.status ==='updating'){
            draft.login.error = action.payload
            draft.login.data = draft.login.status = 'rejected'
            return
        }
        return
    })
)