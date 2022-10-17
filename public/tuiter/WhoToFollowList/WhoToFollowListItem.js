

const WhoToFollowListItem  = (who) => {
    return (`
    <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
 <div class="row" >
    <div class="col-7">
   <span> <img src=${who.avatarIcon}
     style="border-radius: 50px; padding-top: 0px;"
     width="30px"
     height="30px"/></span>
     <span>
       <b>${who.avatarIcon} <i class="fa fa-check-circle-o"></i></b>
     </span>
   </div>
   <div class="col-5">
     <button type="button" class="btn btn-primary" style="width: 80%;border-radius: 50%;">Follow</button>
   </div>
 </div>
</a>
` );
;
 }
export default WhoToFollowListItem;

