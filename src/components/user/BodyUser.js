import "../../css/user/BodyUser.css"
import React from "react"
import { fetchProfil } from '../services/profilFetch'
import { fetchUpdateProfil } from '../services/updateProfilFetch'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** function that create the body area */
function BodyUser(){
    const [editProfil, setEditProfil] = useState(false)
    const [newFirstName, setnewFirstName] = useState('');
    const [newLastName, setnewLastName] = useState('');
    const firstName = useSelector((state)=> state.profil.user.firstName)
    const lastName = useSelector((state)=> state.profil.user.lastName)
    const dispatch = useDispatch();
    //call the fetch profil function
    useEffect(() => {
        dispatch(fetchProfil())
    }, [dispatch])

    return(
        <main className="main bg-dark">
            <div className="header-profil">
                <h1 className="header-profil-name">Welcome back<br />{firstName+' '}{lastName}!</h1>
                {/* conditional showing of the edit profil form */}
                {!editProfil 
                    ? <button className="edit-button" onClick={()=>setEditProfil(true)} >Edit Name</button> 
                    : <div className="editProfil">
                        <div className="editProfil-inputs">
                            <div className="editProfil-inputs-firstName">
                                <label htmlFor="firstName"/>
                                <input type="text" id="firstName" placeholder={firstName} onKeyUp={(event) =>{setnewFirstName(document.getElementById("firstName").value); setnewLastName(document.getElementById("lastName").value)}}/>
                            </div>
                            <div className="input-editProfil">
                                <label htmlFor="lastName"/>
                                <input type="text" id="lastName" placeholder={lastName}  onKeyUp={(event) =>{setnewFirstName(document.getElementById("firstName").value); setnewLastName(document.getElementById("lastName").value)}}/>
                            </div>
                        </div>
                        <div className="apply-buttons">
                            <button className="endForm-button"onClick={()=>{dispatch(fetchUpdateProfil(newFirstName,newLastName));setEditProfil(false); dispatch(fetchProfil())}}>Save</button>
                            <button className="endForm-button"onClick={()=>setEditProfil(false)}>Cancel</button>
                        </div>
                    </div>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default BodyUser