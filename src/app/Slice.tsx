import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "mySlice",
    initialState: {
       nextPageClick: false,
       prevPageClick: false,
       newEntryClick: false,
       updateEntryClick: false,
       deleteDiaryClick: false,
       EntryBox: {visibility: false,dragdown: true}
    },
    reducers: {
        prevPage : (state) => {return {...state,prevPageClick: !state.prevPageClick}},
        nextPage : (state) => {return {...state,nextPageClick: !state.nextPageClick}},
        EntryBox: (state,action) => { 
            if(action.payload === 1)
            return {...state,EntryBox: {...state.EntryBox,visibility: !state.EntryBox.visibility}}
            else
             return {...state,EntryBox: {...state.EntryBox,dragdown: !state.EntryBox.dragdown}}}
    }

})

export default Slice.reducer
export const {prevPage,nextPage,EntryBox} = Slice.actions