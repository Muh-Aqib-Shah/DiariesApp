import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Diary } from"../interfaces/diary.interface";


const getAllDiaries = createAsyncThunk(
   "DiarySlice/getAllDiaries",
   async (args,thunkAPI) => {
    const response = await fetch('fakeapi/diaries/');
    return response.json();  
})

type initialState = {
  diaries: Diary[],
  isLoading: boolean;
  error: boolean;
}

const firstState: initialState = {
  diaries: [] as Diary[],
  isLoading: false,
  error: false
}
const diary = createSlice({
    name: "DiarySlice",
    initialState: firstState,
    reducers: {
        addDiary: (state,{payload}: PayloadAction<Diary[] | []>) => {
            console.log("received ",JSON.stringify(state)," and ",payload)
            const diariesToSave = payload.filter((diary) => {
                return diary == null//state.findIndex((item) => item.id === diary.id) === -1;
              });
        },
        updateDiary(state, { payload }: PayloadAction<Diary>) {
            const { id } = payload;
            const diaryIndex : number = 199 //state.findIndex((diary) => diary.id === id);
            if (diaryIndex !== -1) {
              //state.splice(diaryIndex, 1, payload);
            }
          }

    },
    extraReducers(builder) {
      builder
      .addCase(getAllDiaries.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllDiaries.fulfilled, (state, {payload}: PayloadAction<Diary[]>) => {
        state.error = false
        state.diaries = payload
        state.isLoading = false
      })
      .addCase(getAllDiaries.rejected, (state, action) => {
        state.error = true;
      });
  }
})

export const {addDiary} = diary.actions;
export default diary.reducer