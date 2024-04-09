import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Diary } from"../interfaces/diary.interface";

export const getAllDiaries = createAsyncThunk(
   `DiarySlice/getAllDiaries`,
   async (args,thunkAPI) => { 
    const userID = (thunkAPI.getState() as { user: { id: string | null } })?.user?.id;
    const response = await fetch(`fakeapi/diaries/${userID}`);
    return response.json(); 
    })

type initialState = {
  diaries: Diary[] | null,
  isLoading: boolean;
  error: boolean;
  activeDiaryID: number | null
}

const firstState: initialState = {
  diaries: [] as Diary[],
  isLoading: false,
  error: false,
  activeDiaryID: null
}
const diary = createSlice({
    name: "DiarySlice",
    initialState: firstState,
    reducers: {
         activeDiaryId: (state,{payload}: PayloadAction<string | null>) => {
          state.activeDiaryID = Number(payload);
         }

    },
    extraReducers(builder) {
      builder
      .addCase(getAllDiaries.pending, (state) => {        
        state.isLoading = true
      })
      .addCase(getAllDiaries.fulfilled, (state, {payload}: PayloadAction<{diaries: Diary[]} | null>) => {
        state.error = false
        state.diaries = payload?.diaries ?? null
        state.isLoading = false
      })
      .addCase(getAllDiaries.rejected, (state, action) => {
        state.error = true;
      });
  }
})

export const {activeDiaryId} = diary.actions;
export default diary.reducer