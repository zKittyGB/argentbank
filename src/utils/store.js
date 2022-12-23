import { configureStore } from '@reduxjs/toolkit'
import loginSlice from "../features/loginSlice"
import profilSlice from "../features/profilSlice"

//create store
export default configureStore({
    reducer:{
        login: loginSlice,
        profil: profilSlice
    },
})  