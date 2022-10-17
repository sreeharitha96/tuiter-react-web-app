
const PostSummaryItem  = (post) => {
    return (`
    <div class="suggested-posts" style="font-size: 13px; border-bottom: 1px solid #BBBBBB;">
        <span style="display: inline-block; padding-bottom: 10%;width: 50%;">
        <p style="color: rgb(110, 118, 125);">${posts.userName}</p>
        <p style="color:black"><b>${posts.topic}</b>  <i class="fa fa-check-circle-o"></i><span style="color:rgb(110, 118, 125) ;"> ${posts.time}</span></p>
        <p style="color: black"><b>${posts.title}</b></p>
      </span>
      <span style="display: inline-block; padding-left: 150px; padding-bottom: 50px; padding-top: 0px;">
        <img src=${posts.image}
        style=" padding-top: 0px;"
        width="100px"
        height="100px"/>
      </span>
       </div>
` );
 }
export default PostSummaryItem;












