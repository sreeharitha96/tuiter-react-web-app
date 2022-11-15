import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';

const profileSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
   createProfile(state, action) {
     const data = {
       ...state,
       ...action.payload
     }
     
     console.log(data, "From red");
     return data;
   }
 }
});

export const {createProfile} = profileSlice.actions;
export default profileSlice.reducer;

