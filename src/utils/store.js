import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../features/loginRedux"

export default configureStore({
    reducer:{
        user: loginReducer,
    },
})