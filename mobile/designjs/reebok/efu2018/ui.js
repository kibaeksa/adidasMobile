jQuery(function(){
//	jQuery('.btnBrand').click(function(){
//		if(!jQuery(this).hasClass('enter')){
//			jQuery(this).addClass('enter');
//			jQuery('#nav_menu_overlay').trigger("click");
//			if(jQuery('.navi_search.qwdwd.tolded').hasClass('close')){
//				jQuery('.navigation_main_wrapper .close .ico').trigger("click");
//			}
//
//			jQuery('#brand_navWrap').addClass('active');
//			jQuery('#slideBg').show().animate({
//				opacity : 0.6
//			},function(){
//				jQuery('.brand_close').addClass('active').show();
//			});
//			jQuery('html, body').addClass('no-scroll');
//			
//			
//		}else{
//			jQuery('.brand_close').trigger("click");
//			jQuery(this).removeClass('enter');
//		}
//	});

	jQuery('.nDepth>a').click(function(){
		var buttonScroll = jQuery(this).parent().index();
		jQuery('.smallMenu').slideUp('enter');
		if(!jQuery(this).parent().hasClass('enter')){
			jQuery('li.nDepth ').removeClass('enter');
			jQuery(this).parent().addClass('enter');
			jQuery(this).siblings('.smallMenu').slideDown();
			jQuery('.brandPd').animate({
				scrollTop:buttonScroll * 140
			});
		}else{
			jQuery(this).parent().removeClass('enter');
			jQuery(this).siblings('.smallMenu').slideUp();
			jQuery('.brandPd').animate({
				scrollTop:0
			});
		}
	});
	jQuery('.brand_close').click(function(){
		jQuery('.brand_close').removeClass('active').show();
		jQuery('#brand_navWrap').removeClass('active');
		jQuery('.btnBrand').removeClass('enter');
		jQuery('#slideBg').animate({
			opacity : 0
		},function(){
			jQuery('#slideBg').hide();
			jQuery('.brandPd').scrollTop(0);
			jQuery('.smallMenu').slideUp();
		});
		jQuery('.brand_nav li').removeClass('enter');
		jQuery('html, body').removeClass('no-scroll');
	});
	jQuery('.navi_slide').click(function(){
		jQuery('.brand_close').trigger("click");
	});
	jQuery('#slideBg').click(function(){
		jQuery('.brand_close').trigger("click");
	})
	jQuery('#global-search-button').click(function(){
		if(jQuery('.brand_close').css('opacity') == "1"){
			jQuery('.brand_close').trigger("click");
		}
	});
})

/* tab 뎁스 */
function selectTypeA(){
	jQuery('#nLocation h2 a').click(function(){
		if(!jQuery('#nLocation').hasClass('enter')){
			jQuery(this).parent().parent().addClass('enter');
			jQuery('#nLocation ul').slideDown();
		}else{
			jQuery(this).parent().parent().removeClass('enter');
			jQuery('#nLocation ul').slideUp();
		}

	});
}

/* 20180329 추가 - 20180330 수정 */
function layerPopupClose(){
	jQuery("#blockArea").fadeOut(function(){
		jQuery(this).remove();
	});
}

function youtubePopup(id){
	var url = 'https://www.youtube.com/embed/' + id + '?version=3&autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&disablekb=1';
	var temp = '<a href="#" class="btnLayerClose" onclick="layerPopupClose(); return false;"><img src="/images/reebok/efu2018/brand/fitness/btn_close2.png" alt="닫기" width="60" class="imgVm"></a>'
					+'<iframe width="100%" height="100%" src="'+ url +'" frameborder="0" allowfullscreen id="youtubeFullFrame"></iframe>';

	jQuery("#wrap").append('<div id="blockArea">'+ temp +'</div>');
}

jQuery(function(){
	//메뉴펼침
	jQuery("#header .menuBtn").click(function(e) {
		jQuery(".menuWrap, #bgOverlay").addClass("active");
		jQuery("html, body").addClass("noScroll");	
		jQuery("a.menuClose").addClass("on");
		jQuery("#brand_navWrap, #global-search-slide").removeClass("active");
		jQuery(".searchBtn a, .brandmenuClose").removeClass("on");
		// jQuery("#wrap, .menuWrap").height(jQuery(window).height())
		var elemH = $(window).height() - document.querySelector('#header').getBoundingClientRect().bottom;
		setTimeout(function(){
			$('#wrap .menuWrap').css({
				top: document.querySelector('#header').getBoundingClientRect().bottom,
				minHeight : elemH,
				height : elemH,
				transform : 'translate3d(0 ,0 ,0)'
			});
		},100);

		// $('#wrap .menuWrap').css({
		// 	transform : 'translate3d(0 ,0 ,0)'
		// });
		e.preventDefault();
	});
	//메뉴닫기
	jQuery("#header .menuClose").click(function() {
		jQuery(".menuWrap, #bgOverlay").removeClass("active");
		jQuery("html, body").removeClass("noScroll");
		jQuery("a.menuClose").removeClass("on");
		jQuery(".menuTit").removeClass("on");
		jQuery(".deth2").removeClass("open");
		jQuery("#wrap, .menuWrap").removeAttr("style");
		 jQuery(".menuWrap").stop().animate({
	    	scrollTop: 0
	    });
	    return false; 
			
	});

	jQuery("#header .brandmenuClose").click(function() {
		jQuery("#brand_navWrap, #bgOverlay").removeClass("active");
		jQuery("html, body").removeClass("noScroll");
		jQuery("a.brandmenuClose").removeClass("on");
		jQuery("#wrap, #brand_navWrap").removeAttr("style");
	});

	jQuery("#bgOverlay").click(function() {
		jQuery(".menuWrap, #brand_navWrap, #bgOverlay").removeClass("active");
		jQuery("a.menuClose, a.brandmenuClose").removeClass("on");
		jQuery("html, body").removeClass("noScroll");
	});

	//브랜드메뉴클릭시
	jQuery(".menuBtnArea .brandBtn a").click(function() {
		jQuery(".menuWrap, #global-search-slide").removeClass("active");
		jQuery(".menuClose, .searchBtn a").removeClass("on");
		jQuery("#brand_navWrap, #bgOverlay").addClass("active");
		jQuery("html, body").addClass("noScroll");
		jQuery("a.brandmenuClose").addClass("on");
		jQuery("#wrap, #brand_navWrap").height(jQuery(window).height())
	});			
	
	// 190701 deth1
	jQuery(".menu .menuTit").click(function(){
		
		jQuery('.deth2 li').removeClass('on')

		if(!jQuery(this).hasClass('on')){

			jQuery('#header .menuTit').removeClass('on');
			jQuery(this).addClass('on');


			jQuery('#header .menuWrap').data('prevGnbScroll',{
				scrollTop : $('#header .menuWrap').scrollTop()
			});

			var yVal = Math.abs(Math.abs(jQuery('#header .menuWrap').scrollTop()) + jQuery(this).get(0).getBoundingClientRect().top) - 48;
			console.log(yVal)
			setTimeout(function(){
				jQuery('#header .menuWrap').animate({
					scrollTop : yVal
				},250);
			},100);

		}else{
			jQuery(this).removeClass('on');

			jQuery('#header .menuWrap').animate({
				scrollTop : jQuery('#header .menuWrap').data('prevGnbScroll').scrollTop
			},250);
		}
	});

	// 190701 deth2
	 jQuery(".deth2>li a.tit").click(function(){
		if(!jQuery(this).parent().hasClass("on")) {
			jQuery(".deth2>li a.tit").parent().removeClass("on");
			jQuery(this).parent().addClass("on");

			var yVal = Math.abs(Math.abs($('.menuWrap').scrollTop()) + jQuery(this).get(0).getBoundingClientRect().top) - 48;

			setTimeout(function(){
				jQuery('.menuWrap').animate({
					scrollTop : yVal 
				},200);
			},500);
		} else {
			jQuery(this).parent().removeClass("on");
			$('#header .menuWrap').animate({
				scrollTop : $('#header .menuWrap').data('prevGnbScroll').scrollTop
			},250);
		}
		return false;
	});

	//장바구니
	 jQuery(".menuBtnArea .searchBtn a").click(function(){
		 jQuery("html, body").addClass("noScroll");
		 jQuery(".menuWrap, #bgOverlay, #brand_navWrap").removeClass("active");
		 jQuery(".menuClose, .brandmenuClose").removeClass("on");
		 jQuery("#wrap").height(jQuery(window).height())
		
		if(!jQuery(this).hasClass("on")) {
			jQuery(this).addClass("on");
			jQuery("#global-search-slide").addClass("active");
		} else {
			jQuery(this).removeClass("on");
			jQuery("#global-search-slide").removeClass("active");
			jQuery("html, body").removeClass("noScroll");
			jQuery("#wrap").removeAttr("style");
		}
		return false;
	});

	//장바구니 tab
	 jQuery(".search_category .contents>ul, .search_category .contents>ol").hide();
	 jQuery(".search_category ul li:first").addClass("on");
	 jQuery(".search_category .contents>ul").show();
	 jQuery(".search_category ul li").click(function(){
		 jQuery(".search_category ul li").removeClass("on");
		 jQuery(this).addClass("on");
		 jQuery(".search_category .contents>ul, .search_category .contents>ol").hide();

			var activeTab = jQuery(this).find("a").attr("href");
			jQuery(activeTab).show();
			return false;
		});
	 
	 jQuery(".search_category ul li.no_data").click(function(){
		// jQuery(".search_category ul li").removeClass("on");
		 jQuery(this).parents(".searched_keywords").css("display","block");
		 jQuery(".search_category ul li:first").addClass("on");
	});
	 
	//barcode
	 jQuery(".barcode .bacodePlus").click(function(){
		 getReeClubCard();
	});

	 jQuery(".bacodeDetail .close").click(function(){
		jQuery(".bacodeDetail").removeClass("on");
	});
	// 190701 gnb 삭제
	//  jQuery(".menu a.tit").click(function() {
	//     jQuery(".menuWrap").stop().animate({
	//     	scrollTop: jQuery(this).position().top - 1
	//     }, 500);
	//     return false; 
	// });
	// 190701 gnb 삭제
	//쿠폰 레이어 팝업
	 jQuery("#top_banner_mycpn .close").click(function(){
		jQuery("#top_banner_mycpn").css("display", "none");
	});
});

//공통 레이어팝업
function showPopupLayer(popSrc){
	top._showPopupLayer(popSrc);
}

var POPUP_INIT_ID = 111;
var _popupLayerID = POPUP_INIT_ID;
function _showPopupLayer(popSrc) {
	_popupLayerID += 2;
	var popTop = jQuery(window).height() / 2 + jQuery(document).scrollTop();
	//var popTop = jQuery(window).height() / 2;
	var popSrcUrl = popSrc;
	if(popSrcUrl.indexOf("?") > 0){
		popSrcUrl += '&layerId='+ _popupLayerID
	}else {
		popSrcUrl += '?layerId='+ _popupLayerID
	}
	jQuery("#wrap").append(
		'<div class="popLayer" id="popLayer' + (_popupLayerID) + '" style="z-index:' + _popupLayerID + ';top:' + popTop + 'px">'
		+ ' <iframe src="' + popSrcUrl +'" width="100%" height="100%" frameborder="0" allowTransparency="true" scrolling="no" id="iframePopLayer' + (_popupLayerID) + '" name="iframePopLayer"></iframe>'
		+ ' <p class="close"><a href="#" onclick="hidePopupLayer(); return false" class="close_x_btn"></a></p>'
		+ '</div>'
	);
	
	if(popSrcUrl.indexOf("login.jsp") > 0){
		jQuery(".bgLayer").add("#popLayer" + _popupLayerID).css("z-index", "200");
	}
	jQuery(".bgLayer").css("height", jQuery(document).height() + "px").show();
	jQuery("#popLayer" + _popupLayerID).show();
	top.jQuery(window).on("touchmove", function(e){ //본문스크롤불가
		//e.preventDefault();	
	});
}

function hidePopupLayer(layerId, reset){
	top._hidePopupLayer(layerId, reset);
	$('#bgOverlay').removeClass('active');
}
 
function _hidePopupLayer(layerId, reset) {
	if(layerId){
		jQuery("#popLayer" + layerId).empty().remove();
		_popupLayerID = _popupLayerID - 2;	
		if(reset){
			_popupLayerID = _popupLayerID + 2;
			POPUP_INIT_ID = _popupLayerID - 2;
		}	
	} else {
		if(_popupLayerID != POPUP_INIT_ID + 2){
			jQuery("#popLayer" + _popupLayerID).empty().remove();
			_popupLayerID = _popupLayerID - 2;
		} else {
			jQuery("#popLayer" + _popupLayerID).empty().remove();	
			_popupLayerID = _popupLayerID - 2;
			jQuery(".bgLayer").hide();
		}
	}
	//top.jQuery(window).off("touchmove");
}