import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../../TypeScript/constrain";
import { loginUser, signupUser } from "./authThunks";
interface AuthState {
    token: string;
    user: UserData;
}

const initialState: AuthState = {
  token: "",
  user: {
    _id: "",
    name: "",
    email: "",
    role: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setauth: (state, action: PayloadAction<{ token: string; user: UserData }>) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.token = "";
      state.user = {
        _id: "",
        name: "",
        email: "",
        role: "",
      };
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.token=action.payload.token
      state.user=action.payload.user
    })
    .addCase(signupUser.fulfilled,(state,action)=>{
      console.log(`Sign up status:${action.payload},${state} `)
    })
  }
})

export const {setauth,logout} = authSlice.actions;
export default authSlice.reducer;