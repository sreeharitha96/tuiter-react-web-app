import React, {useState} from "react";
import ProfileComponent from "../profile";
import {createProfile} from "../edit-profile/editprofile-reducer";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router";

const EditProfileComponent = () => {
const profile= useSelector(store => store.profile);
const [profileData, setProfileData] = useState(profile);
const navigate = useNavigate();
const dispatch = useDispatch();
 const saveClickHandler = () => {
       console.log(profileData, "From comp");
      dispatch(createProfile(profileData));   
      navigate("/tuiter/profile");
 }

 return(
 <>
   <div>
   <span><a href="/tuiter/profile"> <i className="bi bi-x-lg"></i> </a></span> &nbsp;&nbsp;&nbsp;&nbsp;
          <span> <b> Edit Profile </b> </span>

   <span>
       <button className="rounded-pill btn btn-primary float-end fw-bold"
                 onClick={saveClickHandler}>
           Save
         </button></span>

   </div>
    <br/>

         <div>
     <img class="img-fluid" alt="Responsive image" src={`/images/${profile.bannerPicture}`}/>
     
     </div>
     <br/>
     <div class="form-group">
   <label>
          First Name
          <input type="text" value= {profileData.firstName} 
          className="form-control" 
          onChange={(event) => setProfileData({...profileData, firstName:event.target.value})} />
    </label>
    <br/><br/><br/>
    <label>
          Last Name
          <input type="text" placeholder= {profileData.lastName} 
          className="form-control border-10" 
          onChange={(event) => setProfileData({...profileData, lastName:event.target.value})}/>
    </label>
    <br/><br/><br/>
    <label>
          Website
          <input type="text" placeholder= {profileData.website} 
          className="form-control border-10" 
          onChange={(event) => setProfileData({...profileData, website:event.target.value})}/>
    </label>
    <br/><br/><br/>
    <label>
          Bio
          <textarea placeholder= {profileData.bio} 
          className="form-control border-10" 
          onChange={(event) => setProfileData({...profileData, bio:event.target.value})}/>
    </label>
    <br/><br/><br/>
    <label>
          Location
          <input type="text" placeholder= {profileData.location} 
          className="form-control border-10" 
          onChange={(event) => setProfileData({...profileData, location:event.target.value})}/>
    </label>
    <br/><br/><br/>
    <label>
          Birth Date
          <input type="text" placeholder= {profileData.dateOfBirth} 
          className="form-control border-10" 
          onChange={(event) => setProfileData({...profileData, dateOfBirth:event.target.value})}/>
    </label>
    <br/><br/><br/>

   </div>

</>
 );
  };



export default EditProfileComponent;

