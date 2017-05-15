var ua = window.navigator.userAgent;
var adiApp = adiApp || {};

adiApp.getNodefromString = function (htmlString) {
	var dummy = document.createElement('div');
	dummy.innerHTML = htmlString;
	return dummy.children[0];
};

(function($){
	if($('.navmenu_close').length < 1){
		$('#header').prepend('<a href="javascript:void(0)" class="navmenu_close close_x_btn" style="right:0;z-index:102;"></a>');
	}

	if($('.nav_menu_overlay').length < 1){
		$('#header').prepend('<div id="nav_menu_overlay"></div>');
	}

	$('#header .nav_menu').css({
		width : $(window).width() - 60
	});

	$('#nav_menu_overlay , .navmenu_close').bind('click',function(){
		$('.nav_main .btn_slide').removeClass('open')
		$('html').removeClass('no_srl');
		$('#header .nav_menu').removeClass('slide-open').css({
			transform : 'translate3d(-100% ,0 ,0)'
		});

		$('html,body').animate({
			scrollTop : $('.nav_main').data('prevScrollTop').scrollTop
		},0);

		$('#nav_menu_overlay').removeClass('active').hide();
		$('.navmenu_close').removeClass('open').hide();
	});


	$('.nav_main .btn_slide').bind('click',function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open')

			$('html').removeClass('no_srl');
			$('#header .nav_menu').removeClass('slide-open').css({
				transform : 'translate3d(-100% ,0 ,0)'
			});

			$('html,body').animate({
				scrollTop : $('.nav_main').data('prevScrollTop').scrollTop
			},0);

			$('#nav_menu_overlay').removeClass('active').hide();
			$('.navmenu_close').removeClass('open').hide();

		}else{
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var topBnnElem = $('.top_bnn').get(0)
			var offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;
			var elemH = $(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom;

			if($('.nav_main .btn_search').hasClass('open')){
				$('#S_PROD_NM').blur();
				$('#header .nav_search').removeClass('slide-open').css({
					transform : 'translate3d(100% ,0 ,0)'
				});
				$('.nav_main .btn_search').removeClass('open');
				setTimeout(function(){
					setTimeout(function(){
						$('.nav_main .btn_slide').addClass('open');
						$('#header .nav_menu').addClass('slide-open').css({
							minHeight : $(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom,
							height : $(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom,
							transform : 'translate3d(0 ,0 ,0)'
						});
						setTimeout(function(){
							$('.navmenu_close').addClass('open');
						},300);
					},100);

					$('.navmenu_close').show();
					$('#nav_menu_overlay').show();
					setTimeout(function(){
						$('#nav_menu_overlay').addClass('active');
					},10);

				},300);
			}else{
				$('.nav_main').data('prevScrollTop',{
					scrollTop : scrollTop
				});
				$(this).addClass('open');

				setTimeout(function(){
					$('#header .nav_menu').addClass('slide-open').css({
						minHeight : elemH,
						height : elemH,
						transform : 'translate3d(0 ,0 ,0)'
					});
					setTimeout(function(){
						$('.navmenu_close').addClass('open');
					},300);
				},100);

				$('#nav_menu_overlay').show();
				$('.navmenu_close').show();
				setTimeout(function(){
					$('#nav_menu_overlay').addClass('active');
				},10);
			}

			$('html').addClass('no_srl');

		}
		return false;
	});


	$('.nav_main .btn_search').bind('click',function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open')

			$('html').removeClass('no_srl');
			$('#header .nav_search').removeClass('slide-open').css({
				transform : 'translate3d(100% ,0 ,0)'
			});

			$('html,body').animate({
				scrollTop : $('.nav_main').data('prevScrollTop').scrollTop
			},0);

			$('#nav_menu_overlay').removeClass('active').hide();
			$('.navmenu_close').removeClass('open').hide();

		}else{
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var topBnnElem = $('.top_bnn').get(0)
			var offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;
			var elemH = $(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom;

			if($('.nav_main .btn_slide').hasClass('open')){
				$('#header .nav_menu').removeClass('slide-open').css({
					transform : 'translate3d(-100% ,0 ,0)'
				});
				$('.nav_main .btn_slide').removeClass('open');
				$('.navmenu_close').removeClass('open').hide();
			}else{
				$('.nav_main').data('prevScrollTop',{
					scrollTop : scrollTop
				});
			}


			$(this).addClass('open');
			$('html').addClass('no_srl');
			$('#header .nav_search').addClass('slide-open').css({
				minHeight : elemH,
				height : elemH,
				transform : 'translate3d(0 ,0 ,0)'
			});

			setTimeout(function(){
				$('#S_PROD_NM').focus();
			},600);
		}
		return false;
	});

	$('#header .nav_menu .gnb>li li').bind('click',function(event){
		event.stopPropagation();

		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
		}
	});

	$('#container.main .category_menu_wrapper .gnb>li li').bind('click',function(event){
		event.stopPropagation();
		if(!$(this).hasClass('dep')){
			return;
		}

		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
		}
		return false;
	});

	$('#header .nav_menu .gnb>li').bind('click',function(event){
		event.stopPropagation()

		if(!$(this).hasClass('open')){

			$('#header .nav_menu .gnb>li').removeClass('open');
			$(this).addClass('open');


			$('#header .nav_menu').data('prevGnbScroll',{
				scrollTop : $('#header .nav_menu').scrollTop()
			});

			var yVal = Math.abs(Math.abs($('#header .nav_menu').scrollTop()) + $(this).get(0).getBoundingClientRect().top) - 61;

			setTimeout(function(){
				$('#header .nav_menu').animate({
					scrollTop : yVal
				},250);
			},100);

		}else{
			$(this).removeClass('open');
			$('#header .nav_menu').animate({
				scrollTop : $('#header .nav_menu').data('prevGnbScroll').scrollTop
			},250);
		}
	});

	$('#container.main .category_menu_wrapper .gnb>li').bind('click',function(event){
		event.stopPropagation()
		if(!$(this).hasClass('open')){

			$('#container.main .category_menu_wrapper .gnb>li').removeClass('open');
			$(this).addClass('open');


			$('#container.main .category_menu_wrapper').data('prevGnbScroll',{
				scrollTop : $('#header .nav_menu').scrollTop()
			});

			var yVal = $(this).offset().top;

			setTimeout(function(){
				$('html,body').animate({
					scrollTop : yVal
				},460);
			},100);

		}else{
			$(this).removeClass('open');
		}

		return false;
	});

	(function(){

		$('#quick-menu>.layer-wrapper .overlay').bind('click',function(event){
			closeQuickMenu();
		});

		$('#quick-menu>.toggle_btn').bind('click',function(event){
			if($('#quick-menu').hasClass('open')){
				closeQuickMenu();
			}else{
				openQuickMenu();
			}
		});

		function openQuickMenu(){

			var btnItems = $('#quick-menu .btn_list>a');
			$('#quick-menu .layer-wrapper').css({
				width : '100%',
				height :'100%',
				display:'block'
			});

			setTimeout(function(){
				$('#quick-menu').addClass('open');
				for(index = btnItems.length ,  counter = 0; index >= 0; index--,counter++){
					(function(index , counter){
						setTimeout(function(){
							$(btnItems[counter]).addClass('opened');
						} , index * 30)
					})(index , counter)
				}
			},100);

			$(window).bind('touchmove',preventDefaultScroll);
		}

		function closeQuickMenu(){
			var btnItems = $('#quick-menu .btn_list>a');

			$('#quick-menu').removeClass('open');
			btnItems.removeClass('opened');
			setTimeout(function(){
				$('#quick-menu .layer-wrapper').hide();
			},150);

			$(window).unbind('touchmove',preventDefaultScroll);
		}

		function preventDefaultScroll(event){
			event.preventDefault();
		}
	})();

	$('#filterLayerBtn').bind('click',function(){
		if($(this).hasClass('on')){
			$('html').removeClass('no_srl');
			$('#filter_layer').removeClass('open');

			$('html,body').animate({
				scrollTop : $('#filterLayerBtn').data('prevScrollTop').scrollTop
			},0);
		}else{
			fnGetOptions();

			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			$('#filterLayerBtn').data('prevScrollTop',{
				scrollTop : scrollTop
			});

			$('html').addClass('no_srl');
			$('#filter_layer').addClass('open');

		}
	});

	$('#filter_layer .close_x_btn').bind('click',function(){
		$('html').removeClass('no_srl');
		$('#filter_layer').removeClass('open');
		$('#filterLayerBtn').removeClass('on');
		$('html,body').animate({
			scrollTop : $('#filterLayerBtn').data('prevScrollTop').scrollTop
		},0);
	});

	$('#filter_layer .toggle_arw').bind('click',function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
		}
	});

	if($('div').owlCarousel){
		$('.viewed_items .item_list .slider').owlCarousel({
			stagePadding:30,
			margin:15,
			items :3,
			merge: true,
		});
	}


	$('#header .nav_search .sch_tab>a').bind('click',function(){
		if($(this).hasClass('on')){
			return false;
		}

		if($(this).index() == 0){
			$('#header .nav_search .keyword_recent').show();
			$('#header .nav_search .sch_list').hide();
			$('#header .nav_search .sch_tab>a').eq(1).removeClass('on');
			$(this).addClass('on');
		}else{
			$('#header .nav_search .sch_list').show();
			$('#header .nav_search .keyword_recent').hide();
			$('#header .nav_search .sch_tab>a').eq(0).removeClass('on');
			$(this).addClass('on');
		}

		return false;
	});

	$('.top_bnn .top_bnn_close').bind('click',function(){
		var $this = $(this);
		$this.parent().remove();

		if($('.nav_menu').hasClass('slide-open')){
			$('.nav_menu').css({
				height:$(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom,
				minHeight:$(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom
			});
		}

		if($('.nav_search').hasClass('slide-open')){
			$('.nav_search').css({
				height:$(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom,
				minHeight:$(window).height() - document.querySelector('#header>.nav_main').getBoundingClientRect().bottom
			});
		}
	});



	// adiApp.bindSelectBox = function(elemId){
	// 	if(elemId != undefined){
	// 		$('#'+elemId+'>select').bind('change',function(){
	// 			$(this).siblings('a').find('span').text($(this).find('option:selected').text());
	// 		});
	// 	}else{
	// 		$('.sel_design>select').bind('change',function(){
	// 			$(this).siblings('a').find('span').text($(this).find('option:selected').text());
	// 		});
	// 	}
	//
	// };

	adiApp.openHotspot = function(elemId,obj){

		if(elemId != undefined){
			if($('#'+elemId).hasClass('active')){
				return false;
			}

			$('.hotspot_layer').removeClass('active');
			$('.'+elemId).addClass('active');
		}
		return false;
	};

	adiApp.closeHotspot = function(obj){
		$('.hotspot_layer').removeClass('active');
		return false;
	};

	adiApp.bindSelectBox();
	adiApp.bindHotspot = function(){
		if($('.hotspot').attr('data-hotspot-layer') !== undefined){
			$('.hotspot').bind('click',function(){

				adiApp.openHotspot($(this).attr('data-hotspot-layer'),$(this));

				// Binding click event to close button
				$('.'+$(this).attr('data-hotspot-layer')).find('.close').bind('click',function(){
					adiApp.closeHotspot($(this));
					$(this).unbind('click');
					$(document).unbind('click');
				});

			});
		}
	};

	if($('.top_bnn').length > 0){
		if($('.layerpop_wrap').length > 0){
			var topBi = 0;
			var topBL = $('.top_bnn').length;
			var topCount = 0;
			var topBImg;
			var topBHeight = 0;
			for(; topBi < topBL; topBi++){
				topBImg = new Image();
				topBImg.onload = function(){
					var ratioImg = this.height / this.width;
					++topCount;
					topBHeight += window.innerWidth * ratioImg;
					if(topCount == topBL){
						$('.layerpop_wrap').find('.inner').css({
							marginTop : topBHeight + 75
						});
					}
				};
				topBImg.src = $('.top_bnn').eq(topBi).find('img').attr('src');
			}
		}
	}

	(function(){
		var offsetTop,
			offsetBottom,
			checkVib,
			pastTime = new Date().getTime(),
			changeTime = new Date().getTime(),
			headerElem = document.getElementById('header'),
			containerElem = document.getElementById('container'),
			elemTopbnn = document.getElementsByClassName('top_bnn'),
			topBnnH = 0;

			// Detect Topbanners height and add all
			for(var i = 0; elemTopbnn.length > i; i++){
				var imgSrc = (function(index){
					var iSrc = '';
					for(var i = 0; i < elemTopbnn[index].children.length; i++){
						if(elemTopbnn[index].children[i].nodeName.toLowerCase() == 'img'){
							iSrc = elemTopbnn[index].children[i].src;
							break;
						}
					}
					return iSrc;
				})(i);


				var image = new Image();
				image.onload = function(){
					var ratio = this.height / this.width;
					topBnnH += window.innerWidth * ratio;
				};
				image.src = imgSrc;
			}

			prevScroll = document.documentElement.scrollTop || document.body.scrollTop;

		(function headerSticky(){

			if($('#header>*').hasClass('slide-open')){
				requestAnimationFrame(headerSticky);
				return;
			}

			if(document.getElementsByClassName('top_bnn').length == 0){
				topBnnH = 0;
			}

			var sTop = document.documentElement.scrollTop || document.body.scrollTop;
			offsetTop = 60 + topBnnH;





				// $(headerElem).removeClass('unfixed');
				// containerElem.style.marginTop = '61px';
				offsetTop = 60 + topBnnH;

				if(prevScroll - sTop > 10){
					$(headerElem).removeClass('hide');
				}else if(prevScroll - sTop < -10){
					$(headerElem).addClass('hide');
				}

				offsetTop = headerElem.getBoundingClientRect().top;
				offsetBottom = headerElem.getBoundingClientRect().bottom;

				prevScroll = sTop;


			// document.querySelector('#statusDiv').innerHTML = sTop +' -- '+' 헤더 클래스값 : '+$(headerElem).css('position');


			requestAnimationFrame(headerSticky);
		})();

	})();


	window.openModalVideoViewer = function (ytbId, width, height) {
		var popElem = void 0;
		var htmlString = '<div id="video-modal-popup" style="width:100%;height:100%;position:fixed;top:0;left:0;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:301;opacity:0;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;">';
		htmlString += '	<div class="overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;box-sizing:border-box;-webkit-box-sizing:border-box;background:rgba(0,0,0,0.8);"></div>';
		htmlString += '	<div class="popup" style="width:80%;height:60%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);box-sizing:border-box;-webkit-box-sizing:border-box;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;opacity:1">';
		htmlString += '		<a href="javascript:void(0)" class="close_x_btn white" style="width:50px;height:50px;position:absolute;top:-50px;right:0;background:#000;"></a>';
		htmlString += '		<iframe class="video" id="main_video" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/' + ytbId + '?rel=0"></iframe>';
		htmlString += '	</div>';
		htmlString += '</div">';

		document.getElementsByTagName('body')[0].appendChild(adiApp.getNodefromString(htmlString));
		popElem = document.getElementById('video-modal-popup');

		var pm = new Promise(function (resolve, reject) {
			setTimeout(function () {
				popElem.style.opacity = 1;
				resolve();
			}, 10);
		});
		pm.then(function (data) {
			setTimeout(function () {
				popElem.querySelector('.popup').style.opacity = 1;
			}, 500);
		});

		popElem.querySelector('.overlay').addEventListener('click', function (e) {
			popElem.parentNode.removeChild(popElem);
		});

		popElem.querySelector('.close_x_btn').addEventListener('click', function (e) {
			popElem.parentNode.removeChild(popElem);
		});
	};



})(jQuery);
