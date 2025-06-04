import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api: string = "https://product-api-cro4.onrender.com";
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (form: { email: string; password: string }) => {
    const response = await axios.post(`${api}/auth/login`, form);
    return response.data;
  }
);

export const signupUser= createAsyncThunk(
    "auth/signupUSer",
    async (form:{email:string,password:string,name:string})=>{
      const response = await axios.post(`${api}/auth/signup`, form);
    return response.data;   
    }
)