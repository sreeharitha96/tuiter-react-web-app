
const ExploreComponentt = () => {
    return(`
    <div>

    <span class="grid-col-two-thirds-page">       
    <input class="search-box" placeholder='  &#xf002  Search Tuiter' style= "font-size: medium;" />
    </span>
    <span class="grid-col-one-third-page">
        <span class="fa fa-gear" style="color: blue; font-size: 30px; " href="tuiter/explore-settings.html"></span>
    </span>

</div>

<br/>

<div class="navbar" style="display: flexbox;">
  <ul>
    <li><a class="active" href="explore-settings.html">For You</a></li>
    <li><a href="explore-settings.html">Trending</a></li>
    <li><a href="explore-settings.html">COVID-19</a></li>
    <li><a href="explore-settings.html">News</a></li>
    <li><a href="explore-settings.html">Sports</a></li>
    <li><a href="explore-settings.html">Entertainment</a></li>
</div>

<div class="container" style="position: relative;
text-align: center;
color: white;width: 100%;">
  <img src="rocket.png" 
    style="padding-top: 10px;position: relative;"
     width="100%"
     height="100%"/>
     <div class="bottom-left" style="position: absolute;
     bottom: 8px;
     left: 29px;">  <h3>SpaceX's Starship</h3> </div>
</div>
<br/>

<div class="suggested-posts" style="font-size: 13px; border-bottom: 1px solid #BBBBBB;">
  <span style="display: inline-block; padding-bottom: 10%;width: 50%;">
  <p style="color: rgb(110, 118, 125);">Web Development</p>
  <p style="color:black"><b>ReactJS</b>  <i class="fa fa-check-circle-o"></i><span style="color:rgb(110, 118, 125) ;"> - 2h</span></p>
  <p style="color: black"><b>React.js is a component based front end library that makes it very easy
  to build Single Page Applications or SPAs</b></p>
</span>
<span style="display: inline-block; padding-left: 150px; padding-bottom: 50px; padding-top: 0px;">
  <img src="react.png" 
  style=" padding-top: 0px;"
  width="100px"
  height="100px"/>
</span>
 </div>

 <div class="suggested-posts" style="font-size: 13px; border-bottom: 1px solid #BBBBBB;">
  <span style="display: inline-block; padding-bottom: 10%;width: 50%;">
  <p style="color:black"><b>JavaScript</b>  <i class="fa fa-check-circle-o"></i><span style="color:rgb(110, 118, 125) ;"> - 2h</span></p>
  <p style="color: black"><b>JavaScript is a programming language that can run on browsers as well as desktops</b></p>
  <p style="color: rgb(110, 118, 125);">123K Tweets</p>
</span>
<span style="display: inline-block; padding-left: 150px; padding-bottom: 50px; padding-top: 0px;">
  <img src="javascript.png" 
  style=" padding-top: 0px;"
  width="100px"
  height="100px"/>
</span>
 </div>

 <div class="suggested-posts" style="font-size: 13px; border-bottom: 1px solid #BBBBBB;">
  <span style="display: inline-block; padding-bottom: 10%;width: 50%;">
  <p style="color: rgb(110, 118, 125);">Web Development</p>
  <p style="color:black"><b>jQuery</b> </p>
  <p style="color: rgb(110, 118, 125);">123K Tweets</p>
</span>
<span style="display: inline-block; padding-left: 150px; padding-bottom: 50px; padding-top: 0px;">
  <img src="jquery.png" 
  style=" padding-top: 0px;"
  width="100px"
  height="100px"/>
</span>
 </div>

 <div class="suggested-posts" style="font-size: 13px; border-bottom: 1px solid #BBBBBB;">
  <span style="display: inline-block; padding-bottom: 10%;width: 50%;">
  <p style="color: rgb(110, 118, 125);">Web Development</p>
  <p style="color:black"><b>NodeJS </b>  <i class="fa fa-check-circle-o"></i><span style="color:rgb(110, 118, 125) ;"> - 2h</span></p>
  <p style="color: rgb(110, 118, 125);">123K Tweets</p>
</span>
<span style="display: inline-block; padding-left: 150px; padding-bottom: 50px; padding-top: 0px;">
  <img src="nodejs.png" 
  style="padding-top: 0px;"
  width="100px"
  height="100px"/>
</span>
</div>
    `);
}
export default ExploreComponentt;
