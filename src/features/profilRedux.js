import { createAction, createReducer } from '@reduxjs/toolkit'
import {login} from '../utils/selectors'
import { useStore } from 'react-redux'

/** function that create the complete home page */
const store = useStore();
console.log(login(store.getState()))

//action creator
export const fetching = createAction('users/login/fetching');
export const resolved = createAction('users/login/resolved');
export const rejected = createAction('users/login/rejected');



function fetchUserProfil(){

 
}

export default fetchUserProfil