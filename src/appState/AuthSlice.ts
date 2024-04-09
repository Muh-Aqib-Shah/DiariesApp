import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface AuthStatetype{
    token: string | null,
    isAuthenticated : boolean
}

const initialState : AuthStatetype = {
    token : null,
    isAuthenticated: false
}

const AuthState = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        saveToken(state, { payload }: PayloadAction<string | null>) {
            if (payload) {
              state.token = payload;
            }
          },
          clearToken(state) {
            state.token = null;
          },
          setAuthState(state, { payload }: PayloadAction<boolean>) {
            state.isAuthenticated = payload;
          },
    }
})

export const { saveToken, clearToken, setAuthState } = AuthState.actions;
export default AuthState.reducer;