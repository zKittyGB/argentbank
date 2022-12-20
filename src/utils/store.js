import { configureStore } from '@reduxjs/toolkit'
import loginSlice from "../features/loginSlice"
import profilSlice from "../features/profilSlice"

export default configureStore({
    reducer:{
        login: loginSlice,
        profil: profilSlice
    },
})  