import {update} from '../../utils/selectors'
import {login} from '../../utils/selectors'
import * as updateProfil from '../../features/updateProfilSlice'
import { useSelector } from 'react-redux'

/** function that create the fetch protocole */
export function fetchUpdateProfil(newFirstName, newLastName){
    return async (dispatch, getState) =>{
        const status = update(getState()).fetch.status
        const stateO = getState()

        let token = login(getState()).token
        if (status === 'pending' || status === 'updating') {
            return
        }
        const requestOptions = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ token,
            },
            body:JSON.stringify({
                firstName: `${newFirstName}`,
                lastName: `${newLastName}`
            })
        };
        dispatch(updateProfil.fetchingupdateProfil())
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            const data = await response.json()
            dispatch(updateProfil.resolvedupdateProfil(data))
            console.log(stateO)
        } 
        catch (error) {
            dispatch(updateProfil.rejectedupdateProfil(error))
        }
        return 
    }
}
