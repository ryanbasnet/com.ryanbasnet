
/****/
$(document).ready(function() {

  $(".dismiss").click(function() {
    $("#feedback").addClass("dismissed");
  });

  $('[data-toggle="tooltip"]').tooltip(); 
});
