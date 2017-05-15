var ua = window.navigator.userAgent;	
var adiApp = adiApp || {};

(function($){
	// Util Fuction
	adiApp.htmlToDom = function(h){
		var d = document.createElement('div');
		d.appendChild(h);
		var c = d.children[0];
		return c;
	};

	$('.nav_main .btn_slide').bind('click',function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open')
			
			$('html').removeClass('no_srl');
			$('#header .nav_menu').removeClass('slide-open').css({							
				left : '-100%'
			});

			$('html,body').animate({
				scrollTop : $('.nav_main').data('prevScrollTop').scrollTop
			},0);

		}else{
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var topBnnElem = $('.top_bnn').get(0)
			var offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;			
			var elemH = $(window).height() - document.getElementById('header').getBoundingClientRect().bottom;

			if($('.nav_main .btn_search').hasClass('open')){
				$('#header .nav_search').removeClass('slide-open').css({							
					right : '-100%'
				});
				$('.nav_main .btn_search').removeClass('open');
			}else{
				$('.nav_main').data('prevScrollTop',{
					scrollTop : scrollTop
				});	
			}
			
			$(this).addClass('open');
			$('html').addClass('no_srl');
			$('#header .nav_menu').addClass('slide-open').css({
				minHeight : elemH,
				height : elemH,
				left : 0
			});
		}
		return false;
	});


	$('.nav_main .btn_search').bind('click',function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open')
			
			$('html').removeClass('no_srl');
			$('#header .nav_search').removeClass('slide-open').css({
				right : '-100%'
			});

			$('html,body').animate({
				scrollTop : $('.nav_main').data('prevScrollTop').scrollTop
			},0);

		}else{
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var topBnnElem = $('.top_bnn').get(0)
			var offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;
			var elemH = $(window).height() - document.getElementById('header').getBoundingClientRect().bottom;
			
			if($('.nav_main .btn_slide').hasClass('open')){
				$('#header .nav_menu').removeClass('slide-open').css({							
					left : '-100%'
				});
				$('.nav_main .btn_slide').removeClass('open');			
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
				right : 0
			});

			setTimeout(function(){
				$('#S_PROD_NM').focus();
			},600);

			// 
			
		}
		return false;
	});

	$('#S_PROD_NM').focus(function(e){
		console.log(11);
		e.preventDefault();
		e.stopPropagation();
	});

	$('#header .nav_menu .gnb li').bind('click',function(event){
		event.stopPropagation()	

		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
		}
	});

	$('#header .nav_menu .gnb>li').bind('click',function(event){
		event.stopPropagation()

		var index = $(this).index();

		if($(this).hasClass('open')){			
			var rootTop = document.getElementById('header').getBoundingClientRect().bottom;
			$('#header .nav_menu').data('prevGnbScroll',{
				scrollTop : $('#header .nav_menu').scrollTop()
			});

			var innerTop = rootTop - $('#header .nav_menu .nav_menu_inner').offset().top;
			var yVal = ($(this).offset().top - rootTop) + innerTop;
			$('#header .nav_menu .gnb>li').each(function(idx){
				if(index !== idx){
					$(this).removeClass('open');
				}
			});

			setTimeout(function(){
				$('#header .nav_menu').animate({
					scrollTop : yVal
				},250);	
			},180);
		}else{
			$('#header .nav_menu').animate({
				scrollTop : $('#header .nav_menu').data('prevGnbScroll').scrollTop
			},250);
			
		}
	});

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

	

	adiApp.bindSelectBox = function(elemId){
		if(elemId != undefined){
			$('#'+elemId+'>select').bind('change',function(){
				$(this).siblings('a').find('span').text($(this).find('option:selected').text());
			});				
		}else{
			$('.sel_design>select').bind('change',function(){
				$(this).siblings('a').find('span').text($(this).find('option:selected').text());
			});		
		}
		
	};

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

	// adiApp.getTopBannerHeight = function(){
	// 	var elemsTopbnn = document.getElementsByClassName('top_bnn'),
	// 		i = 0,
	// 		count = -1,
	// 		topBHeight = 0;
	// 	if(elemsTopbnn.length == 0){
	// 		return;
	// 	}

	// 	for(; i < elemsTopbnn.length; i++){
	// 		var elem = elemsTopbnn[i];
	// 		var image = new Image();
	// 		image.onload = function(e){
	// 			var imgRatio = this.height / this.width;
	// 			count++;
	// 			topBHeight += window.innerWidth * imgRatio;
	// 			if(count == elemsTopbnn.length-1){
	// 				adiApp.setTopBHeight(topBHeight);
	// 			}
	// 		};

	// 		for(var j = 0; j < elem.children.length; j++){
	// 			if(elem.children[j].nodeName.toLowerCase() == 'img'){
	// 				image.src = elem.children[j].src;
	// 				break;
	// 			}
	// 		}
	// 	}
	// };

	// adiApp.getTopBannerHeight();


	if($('.top_bnn').length > 0){
		if($('.layerpop_wrap').length > 0){
			var topBi = 0;
			var topBL = $('.top_bnn').length;
			var topCount = 0;
			var topBImg;
			var topBHeight = 0;
			for(; topBi < topBL; topBi++){
				console.log(111);
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
	}else{
		$('.layerpop_wrap').find('.inner').css({
			marginTop : 75
		});
	}	
	
	(function(){
		var triggerPoint = 0,
			elemHeader = document.getElementById('header'),
			elemTopbnn = document.getElementsByClassName('top-banner'),
			elemContainer = document.getElementById('container'),
			topBnnH = 0,
			isScrolling = false,
			startTime = 0,
			prevScrollTop = 0,
			startScrollTop;

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

		window.addEventListener('touchstart',function(){
			startScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		});

		window.addEventListener('touchmove',function(){
			startScrollingTime = new Date().getTime();
			isScrolling = true;
			// prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		});


		// Control Header menu at trigger point / Toggle header menu when scroll up or down
		(function headerSticky(){	
			if(isScrolling){
				if(new Date().getTime() - startScrollingTime > 1000){
					isScrolling = false;
				}	
			}			
	
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			triggerPoint = topBnnH + 61;
			if(scrollTop > triggerPoint){
				elemContainer.style.marginTop = '61px';
				if(startScrollTop < scrollTop){					
					elemHeader.className = 'hide';
				}else if(startScrollTop > scrollTop){
					elemHeader.className = '';
				}
			}else{
				elemHeader.className = 'unfixed hide';
				elemContainer.style.marginTop = '0';
			}

			prevScrollTop = scrollTop;

			requestAnimationFrame(headerSticky);
		})();

	})();



})(jQuery);
