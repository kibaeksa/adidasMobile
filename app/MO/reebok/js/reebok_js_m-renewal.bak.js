'use strict';

var Reebok = Reebok || {};
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


	document.addEventListener("DOMContentLoaded", function(event) {

		Reebok.el.doc = $(document);

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
			}else{
				if(document.getElementById('global-search-slide').dataset.state == 'opened'){
					var searchElem = document.getElementById('global-search-slide');
					searchElem.dataset.state = '';
					searchElem.style.transform =
					searchElem.style.WebkitTransform = 'translate3d(100%,0,0)';
					removeClass(document.getElementById('global-search-button') , 'close');
				}

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
		var gnbWrappersElem = document.getElementById('navigation-slide').getElementsByTagName('ul');

		for(var i = 0; i < gnbWrappersElem.length; i++){
			var itemsElem = gnbWrappersElem[i].children;
			var itemsLength = itemsElem.length;
			for(var j = 0; j < itemsElem.length; j++){

				if(hasElement(itemsElem[j] , 'ul')){

					(function(i , j){
						var childLiElem = getChildElement(itemsElem[j] , 'ul')[0].children;

						itemsElem[j].dataset.state = '';
						itemsElem[j].dataset.hassub = '';
						addClass(itemsElem[j] , 'has_sub');

						itemsElem[j].addEventListener('click',function(event){
							event.stopPropagation();
							if(this.dataset.state == 'woring'){
								return false;
							}

							var heightValue;
							var defaultHeight = childLiElem.length * 50;
							var state;
							var _this = this;
							var childElem = getChildElement(this , 'ul')[0];
							var j = 0;

							// If already opened
							if(this.dataset.state == 'opened'){

								this.dataset.state = 'working';
								heightValue = 0;
								state = '';
								removeClass(this , 'opened');
								childElem.style.height = childElem.clientHeight+'px';

								for(; j < childElem.children.length; j++){
									(function(j){
										setTimeout(function(){
											var _siblingsElements;
											if(childElem.children[j].dataset.state == 'opened'){
												_siblingsElements = childElem.children[j];
												_siblingsElements.dataset.state = '';
												removeClass(_siblingsElements , 'opened');

												getChildElement(_siblingsElements,'ul')[0].style.display = 'none';
												getChildElement(_siblingsElements,'ul')[0].style.height = 0;
											}
										},400);
									})(j);
								}

							}else{
								this.dataset.state = 'working';
								childElem.style.height = '0px';
								childElem.style.display = 'block';
								heightValue = defaultHeight;
								state = 'opened';
								addClass(this , 'opened');


								for(; j < this.parentNode.children.length; j++){
									var _siblingsElements;
									if(this !== this.parentNode.children[j]){
										if(this.parentNode.children[j].dataset.state == 'opened'){
											_siblingsElements = this.parentNode.children[j];
											_siblingsElements.dataset.state = '';
											removeClass(_siblingsElements , 'opened');

											getChildElement(_siblingsElements,'ul')[0].style.display = 'none';
											getChildElement(_siblingsElements,'ul')[0].style.height = 0;
										}
									}
								}

							}

							// For animation
							setTimeout(function(){
								childElem.style.height = heightValue+'px';
							},10);

							// After animation
							setTimeout(function(){
								_this.dataset.state = state;
								if(state == ''){
									childElem.style.display = 'none';
								}else{
									childElem.style.height = 'auto';
								}
							},500);

							return false;

						} , false);
					})(i , j);
				}
				// If has submenu on li element
			}
		}

	});



})(jQuery);
