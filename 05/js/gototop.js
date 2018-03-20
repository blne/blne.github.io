////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////



$(function(){
  $('body').append('<a href="javascript:void(0);" id="fixedTop">▲</a>');
  var fixedTop = $('#fixedTop');
  fixedTop.on('click',function(){
  	  $('html,body').animate({scrollTop:'0'},500);
  });

  $(window).on('load scroll resize',function(){
  	  var showTop = 100;
  	  if($(window).scrollTop() > showTop){
  	    fixedTop.fadeIn('normal');
  	  } else {
  		fixedTop.fadeOut('normal');
  	  }
   });
});

/*$(window).scroll(function(){
     //最後一頁scrollTop=body-window，50是預留空間
     last=$("body").height()-$(window).height()-50
     if($(window).scrollTop()>=last){
     $(".down").hide()
     }
})*/

