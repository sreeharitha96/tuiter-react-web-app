import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';

const profileSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
   createProfile(state, action) {
     state.unshift({
       ...action.payload,
     })
   }
 }
});

export const {createProfile} = profileSlice.actions;
export default profileSlice.reducer;

