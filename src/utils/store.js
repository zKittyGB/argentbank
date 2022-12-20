import { configureStore } from '@reduxjs/toolkit'
import loginSlice from "../features/loginSlice"
import profilSlice from "../features/profilSlice"
import updateProfilSlice from "../features/updateProfilSlice"

export default configureStore({
    reducer:{
        login: loginSlice,
        profil: profilSlice,
        update: updateProfilSlice
    },
})  