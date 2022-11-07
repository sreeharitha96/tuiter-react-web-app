import React, {useState} from "react";
import ProfileComponent from "../profile";
import {createProfile} from "../edit-profile/editprofile-reducer";
import {useDispatch} from "react-redux";

const EditProfileComponent = (
 {
   profile =  {
    "firstName": "Jose", 
    "lastName": "Annunziato", 
    "handle": "@jannunzi",
    "profilePicture": "java.png", 
    "bannerPicture": "rocket.png",
    "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "7/7/1968",	
    "dateJoined": "4/2009",
    "followingCount": 340,
    "followersCount": 223
  }
 }
  ) => {
 let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [bio, setBio] = useState('');
    let [website, setWebsite] = useState('');
  let [location, setLocation] = useState('');
  let [dateOfBirth, setBirthDate] = useState('');

const dispatch = useDispatch();
 const saveClickHandler = () => {
    const updateProfile = {
        firstName: setFirstName,
        lastName: setLastName,
        bio: setBio,
        dateOfBirth:setBirthDate,
        location:setLocation,
        website:setWebsite
      }
      dispatch(createProfile(updateProfile));
   
 }

 return(
 <>
   <div>
   <span><a href="/tuiter/profile"> <i className="bi bi-x-lg"></i> </a></span> &nbsp;&nbsp;&nbsp;&nbsp;
          <span> <b> Edit Profile </b> </span>

   <span>
   <a href="/tuiter/profile">
       <button className="rounded-pill btn btn-primary float-end fw-bold"
                 onClick={saveClickHandler}>
           Save
         </button>
    </a> </span>

   </div>
    <br/>

         <div>
     <img class="img-fluid" alt="Responsive image" src={`/images/${profile.bannerPicture}`}/>
     
     </div>
     <br/>
     <div class="form-group">
   <label>
          First Name
          <textarea placeholder= {profile.firstName} 
          className="form-control" 
          onChange={(event) => setFirstName(event.target.value)} />
    </label>
    <br/><br/><br/>
    <label>
          Last Name
          <textarea placeholder= {profile.lastName} 
          className="form-control border-10" 
          onChange={(event) => setLastName(event.target.value)} />
    </label>
    <br/><br/><br/>
    <label>
          Website
          <textarea placeholder= {profile.website} 
          className="form-control border-10" 
          onChange={(event) => setWebsite(event.target.value)} />
    </label>
    <br/><br/><br/>
    <label>
          Bio
          <textarea placeholder= {profile.bio} 
          className="form-control border-10" 
          onChange={(event) => setBio(event.target.value)} />
    </label>
    <br/><br/><br/>
    <label>
          Location
          <textarea  placeholder= {profile.location} 
          className="form-control border-10" 
          onChange={(event) => setLocation(event.target.value)} />
    </label>
    <br/><br/><br/>
    <label>
          Birth Date
          <textarea placeholder= {profile.dateOfBirth} 
          className="form-control border-10" 
          onChange={(event) => setBirthDate(event.target.value)} />
    </label>
    <br/><br/><br/>

   </div>

</>
 );
  };



export default EditProfileComponent;

