$(document).ready(function(){

$(window).scroll(function(){
  if($(this).scrollTop() < 450){
    $(".fadingObjects").css({"opacity" : "0"});
  }

  else if($(this).scrollTop() > 2100){
    $(".fadingObjects").css({"opacity" : "0"});

  }
  
  else {
    $(".fadingObjects").css({"opacity" : "1"});

  };

   if($(this).scrollTop() > 400){
    $(".fadingObjectsTwo").css({"opacity" : "0"});

  }
  
  else {
    $(".fadingObjectsTwo").css({"opacity" : "1"});

  };

  if($(this).scrollTop() < 2300){
    $(".anotherFade").css({"opacity" : "0"});
  }

  
  
  else {
    $(".anotherFade").css({"opacity" : "1"});

  };

  
})





})