import { combineReducers, configureStore } from "@reduxjs/toolkit";
import entryReducer from "./EntrySlice";
import diaryReducer from "./DiarySlice";
import userReducer from "./UserSlice";
import authReducer from "./AuthSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        user: userReducer,
        entry: entryReducer,
        diary: diaryReducer
    })
})

type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>
export default store;