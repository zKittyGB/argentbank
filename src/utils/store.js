import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/userRedux"

export default configureStore({
    reducer:{
        user: userReducer,
    },
})