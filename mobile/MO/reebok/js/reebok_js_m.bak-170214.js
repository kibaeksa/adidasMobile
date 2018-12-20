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

	$(document).ready(function(){
		Reebok.el.doc = $(document);
		Reebok.el.html = $('html');
		Reebok.el.wrap = $('#wrap');
		Reebok.el.leftmenu = $('#leftmenu');
		Reebok.el.container = $('#container');
		Reebok.el.flxNavi = $('#header .hdr2');			
	});
})(jQuery);