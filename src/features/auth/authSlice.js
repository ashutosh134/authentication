import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerData } from "./authService";



const userExist = JSON.parse(localStorage.getItem("user"))

const initialState ={ 
    user :userExist ? userExist : null,
    isLoading : false,
    isSuccess : false,
    isError :false,
    message : "somthing went wrong"
}



const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{

        builder
        .addCase(register.pending , (state ,action)=>{
            state.isLoading =true
            state.isSuccess =false
            state.isError = false
        })

        .addCase(register.fulfilled , (state ,action)=>{
            state.isLoading =false
            state.isSuccess =true
            state.user = action.payload
            state.isError = false
        })

        .addCase(register.rejected , (state ,action)=>{
            state.isLoading =false
            state.isSuccess =false
            state.user = null
            state.isError = true
            state.message = action.payload
        })

        .addCase(logOut.fulfilled , (state ,action)=>{
            state.isLoading =false
            state.isSuccess =false
            state.user = null
            state.isError = false
            state.message =""
        })

        .addCase(login.pending , (state ,action)=>{
            state.isLoading =true
            state.isSuccess =false
            state.isError = false
        })

        .addCase(login.fulfilled , (state ,action)=>{
            state.isLoading =false
            state.isSuccess =true
            state.user = action.payload
            state.isError = false
        })

        .addCase(login.rejected , (state ,action)=>{
            state.isLoading =false
            state.isSuccess =false
            state.user = null
            state.isError = true
            state.message = action.payload
        })

    }
})

export default authSlice.reducer;




export const register = createAsyncThunk('REGISTER/REGISTER' , async(formData) =>{
    try {
        return await registerData(formData)
    } catch (error) {
        console.log("error")
    }
    
})


export const logOut = createAsyncThunk('LOGOUT/USER', async()=>{
    localStorage.removeItem("user")
})

export const login = createAsyncThunk('LOGIN/REGISTER' , async(formData) =>{
 try {
    return await loginUser(formData)
 } catch (error) {
    
 }
})