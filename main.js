console.log("connected");
$(document).ready( function(){
  $("#view .content").click( function() {
    $("#view").addClass("animated zoomIn open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated zoomIn");
        $("#view .#selection").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  $(this).removeClass("animated flipInY");
});
      }); 
  });
});