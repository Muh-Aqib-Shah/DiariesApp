import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Slice"

let stateStore = configureStore({
    reducer : Reducer
})

export default stateStore;