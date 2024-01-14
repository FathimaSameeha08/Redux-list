import {configureStore} from "@reduxjs/toolkit"
import listSlice from "./Slices/listSlice"
export const store= configureStore({
    reducer:{
        listSliceReducer:listSlice
    }
})
export default store