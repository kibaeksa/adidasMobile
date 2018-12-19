(function($,undefined){	
	var dummyStyle = document.createElement('div').style;
	var vendor = (function () {
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
	
	var transform = prefixStyle('transform');	
	var transform = prefixStyle('transform');
	var transitionProperty = prefixStyle('transitionProperty');
	var transitionDuration = prefixStyle('transitionDuration');
	var transformOrigin = prefixStyle('transformOrigin');
	var transitionTimingFunction = prefixStyle('transitionTimingFunction');
	var transitionDelay = prefixStyle('transitioDelay');
	var transition = prefixStyle('transition');

	// Browser capabilities
	var isAndroid = (/android/gi).test(navigator.appVersion);
	var isIDevice = (/iphone|ipad/gi).test(navigator.appVersion);
	var isTouchPad = (/hp-tablet/gi).test(navigator.appVersion);

	var has3d = prefixStyle('perspective') in dummyStyle;
	var hasTouch = 'ontouchstart' in window && !isTouchPad;
	var hasTransform = vendor !== false;
	var hasTransitionEnd = prefixStyle('transition') in dummyStyle;
	var transform = (function(){
		var prop = ['transform','MozTransform','WebkitTransform'];
		var ele = document.documentElement;
		for(var i = 0; i<prop.length; i++)
			if(prop[i] in ele.style) return prop[i];
	})();

	var RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	var START_EV = hasTouch ? 'touchstart' : 'mousedown';
	var MOVE_EV = hasTouch ? 'touchmove' : 'mousemove';
	var END_EV = hasTouch ? 'touchend' : 'mouseup';
	var CANCEL_EV = 'mouseup';				

	function prefixStyle (style) {
		if ( vendor === '' ) return style;

		style = style.charAt(0).toUpperCase() + style.substr(1);
		return vendor + style;
	}			

	FlickKkb = function(options){			
		this.that = this;
		this.option = {
			criterion : 2 , 
			callback : null , 
			btn : null , 
			looptype : false,
			useTransition : true
		};
		this.custom_ops = options;
		this.slider;		

		var obj = this;
		this.device_width = document.body.clientWidth;
		this.info = {
			origX : 0,
			origY : 0,
			deltaX : 0,
			deltaY : 0,
			startXPos : 0,
			startYPos : 0,
			endXPos : 0,
			endYPos : 0,
			moveXPos : 0,
			moveYPos : 0,
			moveval : 0,
			dir:'',
			length : 0,
			index : 0,
			nowLeft : 0,
			moveStatus : false,
			isHScrolling : false,
			isTouched : false,
			isMoved : false,
			isAnimating : false,
			parentHeight : []
		}
		
	};

	FlickKkb.prototype.init = function(){
		
		this.option = this.extendOption(this.option,this.custom_ops);
		this.slider = (function(wrp){
			var o;
			switch(typeof wrp){
				case 'string' : o = document.getElementById(wrp); break;
				case 'object' : o = option.wrapper; break;
			}
			o.style.width = '10000%';
			o.style.overflow = 'hidden';				
			return o;
		})(this.option.wrapper);

		// loop type check			
		
		if(this.option.looptype){
			this.initLoop();

			this.info.fake_index_ary = this.getFakeIndex(this.getLength());
			this.info.index = 1;
			this.info.fake_index = this.info.fake_index_ary[this.info.index];
		} 

		this.info.length = this.getLength();
		
		if( this.option.btn ) this.bindBtn();

		this.addEvent(this.slider,START_EV,'start');
		this.addEvent(this.slider,END_EV,'end');
		this.addEvent(window,'resize','windowResize');
		this.resizeObject();
	
		if(this.info.length > 1){
			this.useSetTimeout(this,'setParentHeight',1000);
			this.useSetTimeout(this,'setHeight',1000,1);
		}		
		
	};

	FlickKkb.prototype.addTransition = function(){		
		this.slider.style[transitionProperty] = 'transform';
		this.slider.style[transitionDuration] = '1000ms';
		this.slider.style[transitionDelay] = '0ms';
		if (this.option.useTransition) this.slider.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';
	};

	FlickKkb.prototype.removeTransition = function(){
		this.slider.style[transitionDuration] = '0ms';
	};

	FlickKkb.prototype.initLoop = function(){		
		var $s = $(this.slider);	
		var first_obj = $s.children().eq(0).clone().addClass('fake').attr('id','main_cnt1_fake');
		var last_obj = $s.children().eq(this.info.length-1).clone().addClass('fake').attr('id','main_cnt5_fake');
		$(this.slider).prepend(last_obj).append(first_obj);
		this.flickAction(-1*this.device_width);	
	};

	FlickKkb.prototype.start = function(e){

		if(this.info.isAnimating && !this.info.isHScrolling) return false;
		this.info.isTouched = true;
		var client_x = !hasTouch ? e.clientX : e.touches[0].clientX;
		var client_y = !hasTouch ? e.clientY : e.touches[0].clientY;
		
		this.setStartMouseInfo(client_x , client_y);

		if( this.option.looptype ){
			if(this.info.index == this.info.length-1 && this.info.fake_index == 0){
				this.setIndex(1);
				this.info.nowLeft = -1*this.device_width;
				this.flickAction(-1*this.device_width);
			}else if(this.info.index == 0 && this.info.fake_index == this.info.length-3){
				var _lf = (this.info.length-2 )*(this.device_width*-1);
				this.setIndex(this.info.length-2);
				this.flickAction(_lf);
				this.info.nowLeft = _lf;
			}
			this.setStartMouseInfo();
		}
		this.addEvent(this.slider,MOVE_EV,'move');

	};

	FlickKkb.prototype.move = function(e){		

		this.info.isMoved = true;
		this.removeTransition();
		var x_val = !hasTouch ? e.clientX - this.info.deltaX : e.touches[0].clientX - this.info.deltaX;						
		var y_val = !hasTouch ? e.clientY - this.info.deltaY : e.touches[0].clientY - this.info.deltaY;						

		var _clx = !hasTouch ? e.clientX : e.touches[0].clientX;
		var _cly = !hasTouch ? e.clientY : e.touches[0].clientY;

		
		this.info.nowLeft = x_val;


		if(Math.abs((_clx - this.info.origX)-this.info.deltaX) < Math.abs((_cly - this.info.origY)-this.info.deltaY) && this.info.isHScrolling != true) this.info.isHScrolling = false;
		else this.info.isHScrolling = true;	


		this.info.dir = this.info.startXPos - ( e.clientX  || e.touches[0].clientX ) > 0 ? 'l' : 'r';

		if(this.info.isHScrolling){
			if(e.preventDefault()) e.preventDefault();	
			else e.stopPropagation();
			this.flickAction(x_val);
		}else{							
			return false;
		}
		
		if(!hasTouch){
			if(Math.abs(this.info.startXPos - e.clientX) > (this.device_width/this.option.criterion) ) this.info.moveStatus = true;
			else this.info.moveStatus = false;
		}else{														
			if( Math.abs(this.info.startXPos - e.touches[0].clientX) > (this.device_width/this.option.criterion)) this.info.moveStatus = true;	
			else this.info.moveStatus = false;
		}
	};

	FlickKkb.prototype.end = function(e){	
		this.info.isTouched = false;					
		this.removeEvent(this.slider,MOVE_EV,'move');
		if(!this.info.isHScrolling){
			return false;
		}else{
			this.stopEventBubble(e);
			this.finishAnimate(this.info.dir,this.info.moveStatus);
		}
		if(this.info.parentHeight.length > 1) this.setParentHeight();		
		if(this.option.looptype) this.setHeight(this.info.fake_index);
		this.setHeight(this.info.index);
		
		
	};	

	FlickKkb.prototype.windowResize = function(){
		this.device_width = document.body.clientWidth;
		this.resizeObject();
	}
			

	FlickKkb.prototype.finishAnimate = function(dir,sts){
		var val = 0;
		this.info.isMoved = false;
		this.info.isAnimating = true;
		if(this.option.useTransition) this.addTransition();		

		if(sts && this.info.moveStatus){
			if((this.info.index == 0 && this.info.dir == 'r') ) {
				this.setIndex(0);	
			}else if(this.info.index == this.info.length-1 && this.info.dir =='l'){
				this.setIndex(this.info.length-1);
			}else {
				if(dir == 'l') this.setIndex(this.info.index+1) 
				else this.setIndex(this.info.index-1);
			}
		}else{	
			val = this.device_width*this.info.index*-1;
		}
		
		this.flickAction(this.device_width*this.info.index*-1);

		this.useSetTimeout(this.info , 'isAnimating' , 300 , false);
		this.useSetTimeout(this.info , 'isHScrolling' , 300 , false);
		this.useSetTimeout(this , 'removeTransition' , 300);

		this.callback();

	};

	FlickKkb.prototype.bindBtn = function(){
		var that = this;
		$(this.option.btn).bind('click',function(){
			var idx = $(this).index();
			if((!that.option.looptype && idx == that.info.index) || that.option.looptype && idx == that.info.fake_index) return false;

			that.option.btn.each(function(){
				$(this).find('a').removeClass('on');
			});	

			if( that.option.looptype ){

				if(that.info.index == that.info.length-1 && that.info.fake_index == 0){
					that.setIndex(1);
					that.info.nowLeft = -1*that.device_width;
					that.flickAction(-1*that.device_width);
				}else if(that.info.index == 0 && that.info.fake_index == that.info.length-3){
					var _lf = (that.info.length-2 )*(that.device_width*-1);
					that.setIndex(that.info.length-2);
					that.flickAction(_lf);
					that.info.nowLeft = _lf;
				}										
				that.setIndex(idx+1);
				that.setHeight(that.info.fake_index);
				that.option.btn.eq(that.info.fake_index).find('a').addClass('on');

				that.info.moveStatus = true;

				if(that.option.useTransition) that.addTransition();
				that.flickAction(that.device_width*that.info.index*-1);
			}else{
				that.setIndex(idx);
				that.setHeight(idx);
				that.option.btn.eq(idx).find('a').addClass('on');

				that.info.moveStatus = true;

				if(this.option.useTransition) that.addTransition();

				that.flickAction(that.device_width*that.info.index*-1);

				setTimeout(function(){
					that.info.isAnimating = false;
					that.info.isHScrolling = false;				
					that.removeTransition();	
				},300);
			} 
		
			return false;
		});			

	};

	FlickKkb.prototype.flickAction = function(val){

		if(this.slider.style[transform] != undefined){
			this.slider.style[transform] = 'translateX('+val+'px)';
		}else{
			this.slider.style.position = 'absolute';
			this.slider.style.left = val+'px';
		}
		this.info.nowLeft = val;
		

	};

	FlickKkb.prototype.addEvent = function(o,evt,fn){

		var that = this;
		var _evt = 'on'+evt;
		if(window.addEventListener){
			if(fn == 'move') o[_evt] = function(evt){ that[fn].call(that,evt); };
			else o.addEventListener(evt , function(evt){ that[fn].call(that,evt); });
		} else{
			o.attachEvent(_evt,fn);
		}

	};

	FlickKkb.prototype.removeEvent = function(o,evt,fn){

		var that = this;
		var _evt = 'on'+evt;
		if(window.removeEventListener){
			if(fn == 'move') o[_evt] = '';
			else o.removeEventListener(evt , function(evt){ that[fn].call(that,evt); });
			
		}else{
			var _evt = 'on'+evt;
			o.detachEvent(_evt,fn);
		}
	};

	FlickKkb.prototype.getLength = function(){
		var l = 0;
		for(var i =0; i < this.slider.childNodes.length; i++){
			if(!this.slider.childNodes[i].style) continue;
			l++;
		}
		return l;
	};

	FlickKkb.prototype.stopEventBubble = function(e){
		if(window.removeEventListener) e.stopPropagation();
		else e.cancleBubble = true;
	};
	
	FlickKkb.prototype.resizeObject = function(){
		for(var i =0; i < this.slider.childNodes.length; i++){
			if(!this.slider.childNodes[i].style) continue;
			this.slider.childNodes[i].style.width = this.device_width+'px';
		}
		this.flickAction(this.info.index * this.device_width * -1);
		this.setHeight(this.info.index);
	};

	FlickKkb.prototype.callback = function(){
		var o = {
			index : this.info.index,
			fake_index : this.info.fake_index,
			looptype : this.info.looptype
		}
		if(this.option.callback){
			if(typeof this.option.callback == 'function') this.option.callback(o);
		}
	};
	
	FlickKkb.prototype.extendOption = function(to,from){
		var obj = to;
		for(var n in from) if(from[n] != undefined) obj[n] = from[n];	
		return obj;
	};

	FlickKkb.prototype.setParentHeight = function(){				
		for(var i =0; i < this.slider.childNodes.length; i++){
			if(!this.slider.childNodes[i].style) continue;
			this.info.parentHeight.push( this.slider.childNodes[i].offsetHeight );
		}			
	};

	FlickKkb.prototype.setHeight = function(n){
		this.slider.style.height = this.info.parentHeight[n]+'px';
	};

	FlickKkb.prototype.getFakeIndex = function(n){
		var ary = new Array(n);
		
		for(var i = 0; ary.length > i; i++){
			if(i == 0) ary[i] = n-3;
			else if(i == n-1) ary[i] = 0;
			else ary[i] = i-1;
		}
		
		return ary;
	};

	FlickKkb.prototype.setIndex = function(n){
		this.info.index = n;
		if(this.option.looptype) this.info.fake_index = this.info.fake_index_ary[n];
	};

	FlickKkb.prototype.setStartMouseInfo = function(clientX , clientY){			
		this.info.startXPos = clientX ? clientX : this.info.startXPos;
		this.info.startYPos = clientY ? clientY : this.info.startYPos;
		this.info.origX = this.slider.style[transform] != undefined ? this.slider.style[transform].match(/\d{1,10}/)*-1 : this.slider.style.left.match(/\d{1,10}/)*-1 ;
		this.info.origY = this.slider.offsetTop;
		this.info.deltaX = this.info.startXPos - this.info.origX;
		this.info.deltaY = this.info.startYPos - this.info.origY;
	};	

	FlickKkb.prototype.useSetTimeout = function(o , prop , time, val ){

		if(typeof o[prop] == 'function'){
			if(val == undefined) setTimeout(function(){ o[prop]() } , time);
			else setTimeout(function(){ o[prop](val) } , time);
		} else {
			setTimeout(function(){ o[prop] = val } , time);
		}

	};

	FlickKkb.prototype.addClass = function(el,klass){
		var _klass = el.getAttribute('class');
		_klass = _klass.split(' ');
		//if()
	}
	

})(jQuery);