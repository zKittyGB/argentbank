import {profil} from '../../utils/selectors'
import {login} from '../../utils/selectors'
import * as profilFetch from '../../features/profilSlice'
/** function that create the fetch protocole */
export function fetchUpdateProfil(newFirstName, newLastName){
    const firstName = document.getElementById('firstName').placeholder 
    const lastName = document.getElementById('lastName').placeholder 
    return async (dispatch, getState) =>{
        const status = profil(getState()).fetch.status
        let token = login(getState()).token
        if (status === 'pending' || status === 'updating') {
            return
        }
        //check if an input is empty to adapt the payload
        let payload = null
        if(newFirstName && newLastName){
            payload = {
                firstName: `${newFirstName}`,
                lastName: `${newLastName}`
            }
        }
        if(newFirstName && !newLastName){
            payload = {
                firstName: `${newFirstName}`,
                lastName: `${lastName}`
            }
        }
        if(!newFirstName && newLastName){
            payload = {
                firstName: `${firstName}`,
                lastName: `${newLastName}`
            }
        }
        //request option configuration
        const requestOptions = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ token,
            },
            body:JSON.stringify(payload)
        };
        // start the update Profil fetch
        dispatch(profilFetch.fetchingupdateProfil())
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            const data = await response.json()
            dispatch(profilFetch.resolvedupdateProfil(data))
        } 
        catch (error) {
            dispatch(profilFetch.rejectedupdateProfil(error))
        }
        return 
    }
}
