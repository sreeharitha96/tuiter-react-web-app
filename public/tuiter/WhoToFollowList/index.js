import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
   return (`
   <nav id="sidebarMenu" class="collapse d-lg-block rightsidebar collapse bg-white">
   <div class="list-group list-group-flush" style="padding-top: 0px;">	
     <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
       <span><b>Who to follow</b></span>
    </a>
     <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
       <div class="row" >
          <div class="col-7">
         <span> <img src="java.png" 
           style="border-radius: 50px; padding-top: 0px;"
           width="30px"
           height="30px"/></span>
           <span>
             <b>Java <i class="fa fa-check-circle-o"></i></b>
           </span>
         </div>
         <div class="col-5">
           <button type="button" class="btn btn-primary" style="width: 80%;border-radius: 50%;">Follow</button>
         </div>
       </div>
     </a>

     <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
       <div class="row" >
          <div class="col-7">
         <span> <img src="relativityspace.png" 
           style="border-radius: 50px; padding-top: 0px;"
           width="30px"
           height="30px"/></span>
           <span>
             <b>Relativity Space <i class="fa fa-check-circle-o"></i></b>
           </span>
         </div>
         <div class="col-5">
           <button type="button" class="btn btn-primary" style="width: 80%;border-radius: 50%;">Follow</button>
         </div>
       </div>
     </a>

     <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
       <div class="row" >
          <div class="col-7">
         <span> <img src="virgin.png" 
           style="border-radius: 50px; padding-top: 0px;"
           width="30px"
           height="30px"/></span>
           <span>
             <b>Virgin Galactic <i class="fa fa-check-circle-o"></i></b>
           </span>
         </div>
         <div class="col-5">
           <button type="button" class="btn btn-primary" style="width: 80%;border-radius: 50%;">Follow</button>
         </div>
       </div>
     </a>

     <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
       <div class="row">
          <div class="col-7">
         <span> <img src="nasa.png" 
           style="border-radius: 50px; padding-top: 0px;"
           width="30px"
           height="30px"/></span>
           <span>
             <b>NASA <i class="fa fa-check-circle-o"></i></b>
           </span>
         </div>
         <div class="col-5">
           <button type="button" class="btn btn-primary" style="width: 80%;border-radius: 50%;">Follow</button>
         </div>
       </div>
     </a>

     <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
       <div class="row" >
          <div class="col-7">
         <span> <img src="tesla.png" 
           style="border-radius: 50px; padding-top: 0px;"
           width="30px"
           height="30px"/></span>
           <span>
             <b>Tesla <i class="fa fa-check-circle-o"></i></b>
           </span>
         </div>
         <div class="col-5">
           <button type="button" class="btn btn-primary" style="width: 80%;border-radius: 50%;">Follow</button>
         </div>
       </div>
     </a>

</nav>
`); }
export default WhoToFollowList;

