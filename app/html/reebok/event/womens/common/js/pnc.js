$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  	
	
	$(".btn-fit-start").click(function() {
		location.href = "http://reebok.innored.co.kr/reebok-fit-test/m";
	});

	$(".img-look01, .img-look02, .img-look03, .img-look04, .img-look05, .img-look06, .img-look07, .img-look08, .img-look09").click(function(){
		window.open('http://shop.reebok.co.kr/RPF070102.action?mainId=954&subId=4994');
	});
		
});	

$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() -70;
			 if ($(window).scrollTop() > navHeight) {
				 $('#nav').addClass('fixed');
			 }
			 else {
				 $('#nav').removeClass('fixed');
			 }
		});
	});






