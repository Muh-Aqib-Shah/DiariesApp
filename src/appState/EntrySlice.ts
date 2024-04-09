import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Entry }from '../interfaces/entry.interface';

export const getAllEntries = createAsyncThunk(
  `EntrySlice/getAllEntries`,
  async (args,thunkAPI) => { 
   const diaryID = (thunkAPI.getState() as { diary: { activeDiaryID: string | null } })?.diary?.activeDiaryID;
   const response = await fetch(`fakeapi/diary/entries/${diaryID}`)
   return response.json(); 
   })

const firstState = {
  entries: [] as Entry[],
  isLoading: false,
  error: false,
  activeEntryID: 0

}
const entries = createSlice({
  name: 'entries',
  initialState: firstState,
  reducers: {
    activeEntryId: (state,{payload}: PayloadAction<number>) => {
      state.activeEntryID = payload;
     }
  },
  extraReducers(builder) {
    builder
    .addCase(getAllEntries.pending,(state)=>{
     return {...state,isLoading:true}
    })
    .addCase(getAllEntries.fulfilled,(state,{payload}: PayloadAction<{ entries: Entry[]}>)=>{
      
      return {...state,isLoading:false,error:false,entries: payload.entries}
    })
    .addCase(getAllEntries.rejected,(state)=>{
      
      return {...state,error:true}

    })
  },
});

export const { activeEntryId } = entries.actions;
export default entries.reducer;
