$(document).ready(function($){
 var windowWidth = $(window).width();
 var windowHeight = $(window).height();

 if(($('.content').height()+50) < windowHeight){
  $('.content').css("height", windowHeight*0.8);
 }

});
