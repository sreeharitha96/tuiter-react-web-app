const NavigationSidebar = () => {
    return(`
    <div class= "sideNavBar" style="background-color:black;">
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse ">
    <div class="list-group list-group-flush" style="padding-top: 0px;">	
      <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
        <i class="fa fa-twitter fa-fw me-3"></i>
     </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
         <i class="	fa fa-home fa-fw me-3"></i><span>Home</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
        <i class="fa fa-hashtag fa-fw me-3"></i><span>Explore</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
          class="fa fa-bell fa-fw me-3"></i><span>Notifications</span></a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
          class="fa fa-envelope fa-fw me-3"></i><span>Messages</span></a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fa fa-bookmark fa-fw me-3"></i><span>Bookmarks</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
          class="fa fa-list fa-fw me-3"></i><span>Lists</span></a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
          class="fa fa-user fa-fw me-3"></i><span>Profile</span></a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
          class="fa fa-minus-circle fa-fw me-3"></i><span>More</span></a>
     
    </div>
 
  <br/>
  <div>
    <button type="button" class="btn btn-primary" style="width: 100%;">Tweet</button>
  </div>
</nav>
</div>
    `);
   }
   export default NavigationSidebar;
   
   