import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
 {
   tuit = {
      "_id": 123,
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      "image": "tesla.png",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
 }
) => {
   const dispatch = useDispatch();
 return(
  <div class="d-inline">
     <span><i class="bi bi-chat"> </i> {tuit.replies} </span> &nbsp;&nbsp;&nbsp;
     
      <span><i class="bi bi-repeat"></i> {tuit.retuits} </span> &nbsp;&nbsp;&nbsp;
     
     {/* <button type="button" id="demo" onclick="myFunction()" class="btn btn-light"><span class="bi bi-heart"></span> </button>{tuit.likes} &nbsp;&nbsp;&nbsp; */}

     <span>
     Likes: {tuit.likes}
     <i onClick={() => dispatch(updateTuitThunk({
       ...tuit,
       likes: tuit.likes + 1
     }))} className="bi bi-heart-fill me-2 text-danger"></i>
   </span>

   &nbsp;&nbsp;&nbsp;
      <span><i class="bi bi-share"></i> </span>&nbsp;&nbsp;&nbsp;

     </div>


 

 );
};
export default TuitStats;


