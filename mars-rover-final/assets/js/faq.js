$(document).ready(function(){
  $(".accordion h3:first").addClass("active");
  $(".accordion p").hide();
  $(".accordion p:first").show();

  $(".accordion h3").click(function(){
    $(this).next("p").slideToggle("slow")
           .siblings("p:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h3").removeClass("active");
  });
});
