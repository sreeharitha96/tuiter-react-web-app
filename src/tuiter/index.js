import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ProfileComponent from "./profile";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import EditProfileComponent from "./edit-profile";
import PostSummaryList from "./post-summary-list";
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import editprofileReducer from "./edit-profile/editprofile-reducer";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, profile: editprofileReducer}});

function Tuiter() {
 return (
  <Provider store={store}>
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{"position": "relative"}}>
      <Routes>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
         <Route path="profile" element={<ProfileComponent/>}/>
          <Route path="editprofile" element={<EditProfileComponent/>}/>
 
       </Routes>
   </div>

   <div className="col-3 col-md-3 col-lg-2 col-xl-4">
       <WhoToFollowList/>
     </div>

   </div>
   </Provider>
 );
}

export default Tuiter

