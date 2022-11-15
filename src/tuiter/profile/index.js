import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router";


const ProfileComponent = () => {
 const profile= useSelector(store => store.profile);
 const navigate= useNavigate();
 const edit =()=> {
    navigate("/tuiter/editprofile");
 }
 return(
   <div className="container">
     <div className="d-inline">
       {/* <span  className="d-inline"> <i class="bi bi-arrow-left-short"></i> </span>
       <span  className="d-inline"><div><b>{profile.firstName} . {profile.lastName}</b></div> <div><p>6,114 tweets</p></div></span> */}
     <span><i class="bi bi-arrow-left-short"></i> </span>
     <span><b>{profile.firstName} {profile.lastName}</b> <br/> <p>222 tweets</p> </span>    
     </div>
     <div>
     <img class="img-fluid" alt="Responsive image" src={`/images/${profile.bannerPicture}`}/>
     {/* <img width={70}  className="float-end rounded-3" src={`/images/${post.image}`}/> */}
     
    
     </div>

     <div> 
  <button type="button" class="btn btn-primary float-end" onClick={edit}> Edit Profile </button>

<br/>
<br/>
     </div> 

     <br/>
     <div>
     <div className="fw-bold">{profile.firstName} {profile.lastName}</div>
       <div>{profile.handle}</div>
     </div>
     <br/>
     <div>
     <p>{profile.bio} </p>
     </div>
     <br/>
     <div class="d-inline">
     <span><i class="bi bi-pin-map-fill"> </i> {profile.location} </span> &nbsp;&nbsp;&nbsp;
     
      <span><i class="bi bi-balloon"></i> {profile.dateOfBirth} </span> &nbsp;&nbsp;&nbsp;
     
      <span><i class="bi bi-calendar"></i> {profile.dateJoined} </span>&nbsp;&nbsp;&nbsp;

     </div>
     <br/>
     <br/>
     <div>
     <span> <b>{profile.followingCount} </b> Following </span>
     <span> <b>{profile.followersCount} </b> Followers </span>
     </div>
   </div>
 );
};
export default ProfileComponent;

