'use strict';

var Reebok = Reebok || {};
var reebokApp = {};
Reebok.fn = Reebok.el = Reebok.css3 = {};
Reebok.ops = {
	isLeftOpen : false,
	w_width: $(window).width(),
	w_height: $(window).height(),
	scrollTop : 0
}

;(function($){
	var dummyStyle = document.createElement('div').style;
	Reebok.ops.vendor = (function () {
		var vendors = 't,webkitT,MozT,msT,OT'.split(',');
		var	t;
		var	i = 0;
		var	l = vendors.length;

		for ( ; i < l; i++ ) {
			t = vendors[i] + 'ransform';
			if ( t in dummyStyle ) {
				return vendors[i].substr(0, vendors[i].length - 1);
			}
		}
		return false;
	})();

	Reebok.fn.openLayerPop = function(ele,pos){
		var e;
		Reebok.ops.scrolTop = Reebok.el.doc.scrollTop();
		if(typeof ele == 'string') e = $('#'+ele);
		else e = $(ele);

		if(pos != undefined) $('html, body').animate({scrollTop:pos},0);

		$('.layer_bg').show();
		e.show();
		return false;
	}

	Reebok.fn.closeLayerPop = function(ele,bg){
		var e;
		if(typeof ele  == 'string') e = $('#'+ele);
		else e = $(ele);

		if(!bg) $('.layer_bg').hide();
		e.hide();
		$('html, body').animate({scrollTop:Reebok.ops.scrolTop},0);
		return false;
	}

	Reebok.fn.toggleLeft = function(){
		if ( Reebok.ops.isLeftOpen ) {
			Reebok.ops.isLeftOpen = false;
			Reebok.el.html.removeClass('slide_on');
			Reebok.fn.setTranslate(Reebok.el.wrap.get(0),0);
		}else{
			Reebok.ops.isLeftOpen = open;
			setTimeout(function(){
				Reebok.el.html.addClass('slide_on');
			},480);
			Reebok.fn.setTranslate(Reebok.el.wrap.get(0),80);
		}
		return false;
	}

	Reebok.fn.toggleLeftList = function(o){
		var _o = $(o).parent();
		if(_o.hasClass('open')){
			_o.removeClass('open');
			_o.find('>.dp2').hide();
		}else{
			_o.addClass('open');
			_o.find('>.dp2').show();
		}
		return false;
	}

	Reebok.fn.toggleLeftListDepth3 = function(o){
		var _o = $(o).parent();
		if(_o.hasClass('open')){
			_o.removeClass('open');
			_o.find('>.dp3').hide();
		}else{
			_o.addClass('open');
			_o.find('>.dp3').show();
		}
		return false;
	}

	Reebok.fn.toggleMenu = function(btn ,menu , pos){
		var _btn = $(btn);
		var _menu = _btn[pos](menu);

		if(_btn.hasClass('open')){
			//console.log(_menu);
			_btn.removeClass('open');
			_menu.hide();
		}else{
			console.log(_menu);
			_btn.addClass('open');
			_menu.show();
		}
		return false;
	}

	Reebok.fn.translate = function(ele,to){
		var from = ele.style[Reebok.css3.transform].match(/-?\d{1,10}/)*1;
		var val = from;
		var from_sts = from <= 0 ? false : true;
		var to_sts = to <= 0 ? false : true;
		var dir = from < to ? 'r' : 'l';

		function frame() {
			val += (to - val) / 10;

			ele.style[Reebok.css3.transform] = 'translateX('+val+'%)';
			if(Math.abs(to) - Math.abs(val) < 0.001 && dir == 'r'){
				ele.style[Reebok.css3.transform] = 'translateX('+to+'%)';
				clearInterval(id);
			}else if(Math.abs(val) - Math.abs(to) < 0.001 && dir == 'l'){
				ele.style[Reebok.css3.transform] = 'translateX('+to+'%)';
				clearInterval(id);
			}
		}

		var id = setInterval(frame, 6) // draw every 10ms
	}

	Reebok.fn.setTranslate = function(ele,val){
		ele.style[Reebok.css3.transform] = 'translateX('+val+'%)';
	}

	Reebok.fn.prefixStyle = function(style) {
		if ( Reebok.ops.vendor === '' ) return style;
		style = style.charAt(0).toUpperCase() + style.substr(1);
		return Reebok.ops.vendor + style;
	}

	Reebok.css3.transform = Reebok.fn.prefixStyle('transform');

	Reebok.fn.slideAction = function(ops){
		var index = 0;
		var slider = ops.slider;
		var child = ops.child;
		var leftbtn = ops.leftbtn;
		var rightbtn = ops.rightbtn;
		var totalnum = ops.totalnum;
		var countnum = ops.countnum;

		totalnum.text(' / '+child.length);

		leftbtn.bind('click',function(){
			if(index == 0) return false;
			index = index-1;
			setCount(index+1);
			animateAction(index*-1);
			return false;
		});

		rightbtn.bind('click',function(){
			if(index == child.length-1) return false;
			index = index+1;
			setCount(index+1);
			animateAction(index*-1);
			return false;
		});

		function animateAction(val){
			slider.get(0).style[Reebok.css3.transform] = 'translateX('+val+'%)';
		}

		function setCount(val){
			countnum.text(val);
		}
	}

	Reebok.fn.prodTabAction = function(ops){
		var wrap = ops.wrap;
		var btn = ops.btn;
		var cont_wrap = ops.cont_wrap;
		var cont = ops.cont;

		$(btn).click(function(){

			var idx = $(this).index();
			if ( $(this).find('a').hasClass('on') ) return false;
			$(btn).find('a').removeClass('on');
			$(cont).hide();
			$(cont).eq(idx).show();
			$(this).find('a').addClass('on');
			if(idx == 0){
				ops.wrap.addClass('now_tab1');
				ops.wrap.removeClass('now_tab2');
			} else{
				ops.wrap.addClass('now_tab2');
				ops.wrap.removeClass('now_tab1');
			}

			return false;
		});
	}

	reebokApp.prependChild = function(targetElem , elem){
		if(targetElem.children.length > 0){
			targetElem.insertBefore(elem , targetElem.children[0]);
		}else{
			targetElem.appendChild(elem)
		}
	};

	reebokApp.getNodefromString = function(htmlString){
		var dummy = document.createElement('div');
		dummy.innerHTML = htmlString;
		return dummy.children[0];
	};


	function initGlobalSlider(){
		addClass(document.getElementsByTagName('html')[0],'no-scroll');
	}

	function addClass(element , className){
		var targetClassName = className.trim().split(' ');
		var newClassName = '';
		var index = 0;
		var regClassName;

		for(; index < targetClassName.length; index++){
			regClassName = new RegExp('(\\s|^)'+targetClassName[index]+'(\\s|$)');
			if(element.className.search(regClassName) < 0){
				newClassName += targetClassName[index]+' ';
			}
		}

		if(newClassName !== ''){
			element.className = element.className.trim() + ' ' + newClassName.trim();
		}

	}

	function removeClass(element , className){
		var targetClassName = className.trim().split(' ');
		var index = 0;
		var regClassName;

		for(; index < targetClassName.length; index++){
			regClassName = new RegExp('(\\s|^)'+targetClassName[index]+'(\\s|$)');
			element.className = element.className.replace(regClassName,' ');
		}
	}

	function hasClass(element , className){
		var regExp = new RegExp('(\\s|^)'+className+'(\\s|$)');
		return element.className.search(regExp) < 0 ? false : true;
	}

	function hasElement(element , elementName){
		var elemChildren = element.children;
		var i = 0;

		for(; i < elemChildren.length; i++){
			if(elemChildren[i].nodeName.toLowerCase() == elementName.toLowerCase()){
				return true;
			}
		}

		return false;
	}

	function getChildElement(element , elementName){
		var elemChildren = element.children;
		var i = 0;
		var returnElem = false;

		for(; i < elemChildren.length; i++){
			if(elemChildren[i].nodeName.toLowerCase() == elementName.toLowerCase()){
				if(!returnElem){
					returnElem = [];
				}
				returnElem.push(elemChildren[i]);
			}
		}

		return returnElem;
	}

	function animate(element , options){
		var ops = {};
		var i = 0;
		var finishCount = 0;

		if(!options.handled){
			ops = {
				handled : true,
				css : []
			};

			for(var prop in options){
				ops.css.push({
					prop : prop,
					target : options[prop].match(/[0-9]+/g),
					cur : 0,
					unit : !options[prop].match(/[a-zA-Z]+/g) ? '' :  options[prop].match(/[a-zA-Z]+/g),
					incrementer : 0.01,
					speed : 1.05,
					isFinished : false
				});
			}

			requestAnimationFrame(function(){
				animate(element , ops);
			});

		}else{
			ops = options;
		}

		for(; i < ops.css.length; i++){
			if(!ops.css[i].isFinished){
				ops.css[i].incrementer += 1;
				ops.css[i].cur += Math.pow(ops.css[i].speed , ops.css[i].incrementer);

				if(Math.abs(ops.css[i].cur) >= ops.css[i].target){
					ops.css[i].cur = ops.css[i].target;
					ops.css[i].isFinished = true;
				}

				element.style[ops.css[i].prop] = ops.css[i].cur + ops.css[i].unit;
			}else{
				finishCount += 1;
			}
		}

		if(finishCount < ops.css.length){
			requestAnimationFrame(function(){
				animate(element , ops);
			});
		}
	}

	function initSelectbox(){
		$('.sel_design').each(function(){

			if(this.dataset.init){
				return;
			}
			this.dataset.init = true;

			var $this = $(this);
			var $selectBox = $(this).find('select');
			$this.change(function(event){
				$this.find('>a span').text($selectBox.find('option:selected').text());
			});
		});
	}


	document.addEventListener("DOMContentLoaded", function(event) {
		Reebok.el.doc = $(document);

		var elemHeader = document.getElementById('header');
		if(!document.querySelector('.navmenu_close')){
			reebokApp.prependChild(elemHeader ,reebokApp.getNodefromString('<a href="javascript:void(0)" class="navmenu_close close_x_btn" style="display:none;"></a>') );
		}

		if(!document.getElementById('nav_menu_overlay')){
			reebokApp.prependChild(elemHeader ,reebokApp.getNodefromString('<div id="nav_menu_overlay"></div>'));
		}

		if(!!document.getElementById('navigation-slide')){
			document.getElementById('navigation-slide').style.width = window.innerWidth - 50+'px';
			document.getElementById('navigation-slide').style.height = window.innerHeight - (document.querySelector('.navigation_main_wrapper').getBoundingClientRect().bottom)+'px';
			document.getElementById('global-search-slide').style.height = window.innerHeight - (document.querySelector('.navigation_main_wrapper').getBoundingClientRect().bottom)+'px';
		}

		//  Renewal
		if(!!document.querySelector('.navigation_main_wrapper')){
			document.getElementById('nav_menu_overlay').addEventListener('click',function(){
				removeClass(document.querySelector('.navmenu_close') , 'active');
				removeClass(document.getElementById('nav_menu_overlay'),'active');
				setTimeout(function(){
					document.getElementById('nav_menu_overlay').style.display = 'none';
					document.querySelector('.navmenu_close').style.display = 'none';
				},100);

				removeClass(document.getElementsByTagName('html')[0],'no-scroll');
				removeClass(document.getElementById('global-navigation-button') , 'close');
				document.getElementById('navigation-slide').style.transform =
				document.getElementById('navigation-slide').style.WebkitTransform = 'translate3d(-100%,0,0)';
				document.getElementById('navigation-slide').dataset.state = '';
			});

			document.querySelector('.navmenu_close').addEventListener('click',function(){
				removeClass(document.querySelector('.navmenu_close') , 'active');
				removeClass(document.getElementById('nav_menu_overlay'),'active');
				setTimeout(function(){
					document.getElementById('nav_menu_overlay').style.display = 'none';
					document.querySelector('.navmenu_close').style.display = 'none';
				},100);

				removeClass(document.getElementsByTagName('html')[0],'no-scroll');
				removeClass(document.getElementById('global-navigation-button') , 'close');
				document.getElementById('navigation-slide').style.transform =
				document.getElementById('navigation-slide').style.WebkitTransform = 'translate3d(-100%,0,0)';
				document.getElementById('navigation-slide').dataset.state = '';
			});

			// Click gnb button
			document.getElementById('global-navigation-button').addEventListener('click',function(){

				var navigationElem = document.getElementById('navigation-slide');
				var dataset = navigationElem.dataset;
				if(navigationElem.dataset.state == 'working'){
					return;
				}

				var stateValue = '';
				dataset.state = 'working';

				if(hasClass(this,'close')){
					removeClass(this,'close');
					removeClass(document.getElementsByTagName('html')[0],'no-scroll');
					navigationElem.style.transform =
					navigationElem.style.WebkitTransform = 'translate3d(-100%,0,0)';

					removeClass(document.querySelector('.navmenu_close') , 'active');
					removeClass(document.getElementById('nav_menu_overlay'),'active');
					setTimeout(function(){
						document.getElementById('nav_menu_overlay').style.display = 'none';
						document.querySelector('.navmenu_close').style.display = 'none';
					},100);
				}else{

					if(document.getElementById('global-search-slide').dataset.state == 'opened'){
						var searchElem = document.getElementById('global-search-slide');
						searchElem.dataset.state = '';
						searchElem.style.transform =
						searchElem.style.WebkitTransform = 'translate3d(100%,0,0)';
						removeClass(document.getElementById('global-search-button') , 'close');
					}

					document.getElementById('navigation-slide').style.height = window.innerHeight - (document.querySelector('.navigation_main_wrapper').getBoundingClientRect().bottom)+'px';
					document.getElementById('global-search-slide').style.height = window.innerHeight - (document.querySelector('.navigation_main_wrapper').getBoundingClientRect().bottom)+'px';

					document.getElementById('nav_menu_overlay').style.display = 'block';
					document.querySelector('.navmenu_close').style.display = 'block';
					setTimeout(function(){
						addClass(document.getElementById('nav_menu_overlay'),'active');

						setTimeout(function(){
							addClass(document.querySelector('.navmenu_close') , 'active');
						},300);
					},100);


					addClass(this,'close');
					addClass(document.getElementsByTagName('html')[0],'no-scroll');
					navigationElem.style.transform =
					navigationElem.style.WebkitTransform = 'translate3d(0,0,0)';
					stateValue = 'opened';
				}

				setTimeout(function(){
					dataset.state = stateValue;
				},500);
			});


			// click search button
			document.getElementById('global-search-button').addEventListener('click',function(){
				var navigationElem = document.getElementById('global-search-slide');
				var dataset = navigationElem.dataset;
				if(navigationElem.dataset.state == 'working'){
					return;
				}

				var stateValue = '';
				dataset.state = 'working';

				if(hasClass(this,'close')){
					removeClass(document.querySelector('.navmenu_close') , 'active');
					removeClass(document.getElementById('nav_menu_overlay'),'active');
					setTimeout(function(){
						document.getElementById('nav_menu_overlay').style.display = 'none';
						document.querySelector('.navmenu_close').style.display = 'none';
					},100);


					removeClass(this,'close');
					removeClass(document.getElementsByTagName('html')[0],'no-scroll');
					navigationElem.style.transform =
					navigationElem.style.WebkitTransform = 'translate3d(100%,0,0)';
				}else{

					if(document.getElementById('navigation-slide').dataset.state == 'opened'){
						var gnbElem = document.getElementById('navigation-slide');
						gnbElem.dataset.state = '';
						gnbElem.style.transform =
						gnbElem.style.WebkitTransform = 'translate3d(-100%,0,0)';
						removeClass(document.getElementById('global-navigation-button') , 'close');
					}

					document.getElementById('navigation-slide').style.height = window.innerHeight - (document.querySelector('.navigation_main_wrapper').getBoundingClientRect().bottom)+'px';
					document.getElementById('global-search-slide').style.height = window.innerHeight - (document.querySelector('.navigation_main_wrapper').getBoundingClientRect().bottom)+'px';

					addClass(this,'close');
					addClass(document.getElementsByTagName('html')[0],'no-scroll');
					navigationElem.style.transform =
					navigationElem.style.WebkitTransform = 'translate3d(0,0,0)';
					stateValue = 'opened';
				}

				setTimeout(function(){
					dataset.state = stateValue;
				},500);
			});

			// Click gnb items
			$('.navigation_menu li').bind('click',function(event){
				event.stopPropagation();

				var $this = $(this);
				var objOffsetTop = 0;
				var scrollVal = 0;

				if($this.hasClass('opened') ){
					$this.find('>ul').removeClass('active');
					setTimeout(function(){
						$this.removeClass('opened');
					},50);

				}else{

					$this.siblings('li').removeClass('opened');
					$this.siblings('li').find('>ul').removeClass('active');

					$this.addClass('opened');
					setTimeout(function(){
						$this.find('>ul').addClass('active');
					},10);

					setTimeout(function(){
						scrollVal = $('#navigation-slide').scrollTop();
						objOffsetTop = ($this.offset().top + (scrollVal-50));

						$('#navigation-slide').animate({
							scrollTop:objOffsetTop
						},300);
					},200);

				}

			});
		}

		/* Init custom selectbox */
		initSelectbox();

	});


	$(document).ready(function(){
		Reebok.el.doc = $(document);
		Reebok.el.html = $('html');
		Reebok.el.wrap = $('#wrap');
		Reebok.el.leftmenu = $('#leftmenu');
		Reebok.el.container = $('#container');
		Reebok.el.flxNavi = $('#header .hdr2');


	});


})(jQuery);
