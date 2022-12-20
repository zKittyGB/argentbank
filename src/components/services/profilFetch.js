import {profil} from '../../utils/selectors'
import {login} from '../../utils/selectors'
import * as profilFetch from '../../features/profilSlice'


export function fetchProfil(){
    return async (dispatch, getState) =>{
        const status = profil(getState()).fetch.status
        let token = login(getState()).token
        if (status === 'pending' || status === 'updating') {
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ token,
            },
        };
        dispatch(profilFetch.fetchingProfil())
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            const data = await response.json()
            dispatch(profilFetch.resolvedProfil(data))
        } 
        catch (error) {
            dispatch(profilFetch.rejectedProfil(error))
        }
        return 
    }
}
