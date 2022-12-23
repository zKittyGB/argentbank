import {login} from '../../utils/selectors'
import * as loginFetch from '../../features/loginSlice'
import { fetchProfil } from '../services/profilFetch'

/** function that create the fetch protocole */
export function fetchLogin(loggin, password) {
    return async (dispatch, getState) =>{
        const status = login(getState()).fetch.status
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
        dispatch(loginFetch.fetchingLogin())
        try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions)
        const data = await response.json()
        dispatch(loginFetch.resolvedLogin(data))
        dispatch(fetchProfil())

        } catch (error) {
        dispatch(loginFetch.rejectedLogin(error))
        }
    }
  }
