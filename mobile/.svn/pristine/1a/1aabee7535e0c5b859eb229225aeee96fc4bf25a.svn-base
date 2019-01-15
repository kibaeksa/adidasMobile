var Flicker;
;(function($){		

	var utils = (function () {
		var me = {};

		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}

			return false;
		})();

		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);

		}

		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};

		var _transform = _prefixStyle('transform');

		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});

		me.extend(me.style = {}, {
			transform: _transform,
			transition:_prefixStyle('transition'),
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});
		
		return me;
	})();

	var hasTouch = 'ontouchstart' in window;
	var ev_start = hasTouch ? 'touchstart' : 'mousedown';
	var ev_move = hasTouch ? 'touchmove' : 'mousemove';
	var ev_end = hasTouch ? 'touchend' : 'mouseup';
	var ev_resize = 'onorientationchange' in window ? 'orientationchange' : 'resize';		
	var domPos = ['-100%','0','100%'];		
	
	Flicker = function(options){					
		this.options = options;
		this.data = this.options.data.html;
		this.domWrap = document.getElementById(options.container);
		this.domObj = (function(wrap){
			for(var i = 0; i < wrap.childNodes.length; i++)
				if(wrap.childNodes[i].nodeType == 1) return wrap.childNodes[i];
		})(this.domWrap);
		this.start = {
			x:0,
			y:0
		};
		this.end = {
			x:0,
			y:0
		}
		this.delta = {
			x:0,
			y:0
		};
		this.elePos = {
			x:0,
			y:0
		};
		this.x = 0;
		this.y = 0;

		this.length = this.data.length;
		this.width = document.body.clientWidth;
		this.index = 0;
		this.prevIdx = this.length-1;
		this.nextIdx =1;					
		this.direction = 0;
		this.isVerMoving = undefined;
		this.isMoving = false;
		this.isAction = false;		

		this.init();
	};				

	Flicker.prototype.init = function(){		
		this.domObj.style[utils.style.transition] = 'all 0ms ease-out 0ms';
		this.touchMoveBind = this.touchMove.bind(this);
		this.domObj.addEventListener(ev_start,this.touchStart.bind(this));
		this.domObj.addEventListener(ev_end,this.touchEnd.bind(this));

		if(this.options.init && typeof this.options.init == 'function') this.options.init.call('',{domObj : this.domObj,  index : this.index, length : this.length});
		if(this.options.btnLeft) document.getElementById(this.options.btnLeft).addEventListener(ev_start,this.bindBtnLeft.bind(this));
		if(this.options.btnRight) document.getElementById(this.options.btnRight).addEventListener(ev_start,this.bindBtnRight.bind(this));
		if(this.options.resize && typeof this.options.resize == 'function') addEventListener(ev_resize,this.options.resize);

		if(this.options.auto) this.addAutoMove();
		
		this.initDOM(0);
	};				

	Flicker.prototype.touchStart = function(e){		

		this.start.x = !hasTouch ? e.pageX : e.touches[0].pageX;
		this.start.y = !hasTouch ? e.pageY : e.touches[0].pageY;
		this.elePos.x = this.domObj.style[utils.style.transform] != undefined ? this.domObj.style[utils.style.transform].match(/\d{1,10}/)*-1 : 0;

		this.deltaX = this.start.x - this.elePos.x;
		this.domObj.addEventListener(ev_move,this.touchMoveBind);
	};

	Flicker.prototype.touchMoveBind = undefined;

	Flicker.prototype.touchMove = function(e){					

		this.delta.x = !hasTouch ? e.pageX : e.touches[0].pageX;
		this.delta.y = !hasTouch ? e.pageY : e.touches[0].pageY;
		this.x = this.delta.x - (this.start.x - this.elePos.x);
		this.y = this.delta.y - (this.start.y - this.elePos.y);

		if(Math.abs(this.start.x - this.delta.x) < Math.abs(this.start.y - this.delta.y) ){
			if(this.isVerMoving !== false){
				this.domObj.removeEventListener(ev_move,this.touchMoveBind);
				return;
			} 
		}else{			
			if(this.isAction) return false;
			this.isVerMoving = false;
			if(this.isAction == true && this.options.auto && this.auto) this.removeAutoMove();			
		}

		if(e.preventDefault()) e.preventDefault();
		else e.stopPropagation();	
		
		if(!this.isVerMoving){
			this.setTransform(this.domObj,this.x);	
		} 

	};

	Flicker.prototype.touchEnd = function(e){		
		if(this.isVerMoving !== false){
			return;
		} 	
		var that = this;

		if(this.isAction) return false;
		this.isAction = true;
		
		//플리킹이 덜 되었을 떄
		if(Math.abs(this.start.x - this.delta.x) < this.width*0.2){
			this.domObj.removeEventListener(ev_move,this.touchMoveBind);
			this.animateTransition({
				left : 0,
				transitionDuration : 200
			},function(that){
				setTimeout(function(){
					that.stopTransition();
					that.isAction = false;
				},200);
			});	
			this.isVerMoving = undefined;
			return false;
		}		

		//if next flicking is 1 , if prev -1
		this.direction = this.start.x - this.delta.x > 0 ? 1 : -1;

		this.domObj.removeEventListener(ev_move,this.touchMoveBind);
		this.isVerMoving = undefined;	

		if(this.direction > 0){
			if(this.index == this.length -1) this.setIndex(0);
			else this.setIndex(this.index+1);
		}else{
			if(this.index == 0) this.setIndex(this.length-1);
			else this.setIndex(this.index-1);
		}			

		
		this.animateTransition({
			left : this.width * this.direction*-1,
			transitionDuration : 300
		},function(that){
			setTimeout(function(){
				that.stopTransition();
				that.resetDOM(that.index);
				if(that.options.isSetHeight) that.setHeight();				
				that.isAction = false;
			},400);
		});
				
		this.isVerMoving = undefined;
		//this.isAction = false;
		if(this.options.auto) this.addAutoMove();

		this.callback();
	};

	Flicker.prototype.setTransform = function(ele , val){
		var v = val;
		if(typeof val == 'number'){
			v = v+'px';
		}

		ele.style[utils.style.transform] = 'translate3D('+v+' ,0px ,0px)';
	};
	Flicker.prototype.setTransition = function(prop){

		var val;		
		for(var i in prop){	
			if(utils.style[i]){
				if(i === 'transitionDuration' || i === 'transitionDelay'){
					val = prop[i]+'ms';
				}else{
					val = prop[i];
				}

				this.domObj.style[utils.style[i]] = val;
			} 
		}		
	};

	Flicker.prototype.animateTransition = function(prop,callback){
		var left;

		if(prop.left !== undefined){
			left = prop.left;
			delete prop.left;	
		}

		this.setTransition(prop);	
		this.setTransform(this.domObj,left);

		if(callback) callback(this);
	};

	Flicker.prototype.stopTransition = function(){
		this.setTransition({
			transitionDuration : 0
		});
	};

	Flicker.prototype.initDOM = function(){
		var that = this;
		var idx = [this.prevIdx,this.index,this.nextIdx];		
		var dom = [];
		var ele = this.stringToDOM(this.data);
		var tmp;
		
		for(var i = 0; i < 3; i++){
			ele[idx[i]].style[utils.style.transform] = 'translate3D('+domPos[i]+' ,0 ,0)';
			tmp = this.domToString(ele[idx[i]]);
			dom.push(tmp[0]);
		}

		dom = dom.join('');
		this.setTransform(this.domObj,0);
		this.domObj.innerHTML = dom;
	};

	Flicker.prototype.makeDOM = function(idxs){		
		var that = this;		
		var idx = [this.prevIdx,this.index,this.nextIdx];		
		var dom = [];
		var ele = this.stringToDOM(this.data);
		var tmp;

		if(this.direction > 0){
			//when index increase 1 value
			tmp = this.stringToDOM(this.data[idx[2]]);
			tmp[0].style[utils.style.transform] = 'translate3D('+domPos[2]+' ,0 ,0)';			

			//remove first DOM 
			this.domObj.removeChild(this.domObj.childNodes[0]);
			//and add DOM at end of the container
			this.domObj.insertBefore(tmp[0],this.domObj.childNodes[2]);
		}else{
			//when index decrease 1 value
			tmp = this.stringToDOM(this.data[idx[0]]);
			tmp[0].style[utils.style.transform] = 'translate3D('+domPos[0]+' ,0 ,0)';

			//remove last DOM
			this.domObj.removeChild(this.domObj.childNodes[2]);
			//and add DOM at first position of the container
			this.domObj.insertBefore(tmp[0],this.domObj.childNodes[0]);
		}

		for(var i = 0; i< 3; i++){
			//set three DOMs  in sequence (-100%, 0 ,100%)
			this.domObj.childNodes[i].style[utils.style.transform] = 'translate3D('+domPos[i]+' ,0 ,0)';
		}
	
	};

	// convert string  to dom object
	Flicker.prototype.stringToDOM = function(prm){
		var div = document.createElement('div'),
			data = [],
			rt = [],
			ele;

		if(prm instanceof Array){
			data = prm;
		}else{
			data[0] = prm;
		}

		for(var i in data){
			div.innerHTML = data[i];
			ele = div.firstChild;			
			rt.push(ele);
			div.innerHTML = '';
		}
		return rt;
	};

	// convert dom object to string
	Flicker.prototype.domToString = function(prm){
		var div = document.createElement('div'),
			data = [],
			rt = [],
			ele;

		if(prm instanceof Array){
			data = prm;
		}else{
			data[0] = prm;
		}

		for(var i in data){
			div.appendChild(data[i]);
			ele = div.innerHTML;
			rt.push(ele);
			div.innerHTML = '';
		}
		return rt;
	}

	Flicker.prototype.resetDOM = function(index){
		this.setTransform(this.domObj,0);
		$('body>div').append(this.domObj.style[utils.style.transform]);
		this.makeDOM(index);		
		var that = this;
	};	

	Flicker.prototype.setIndex = function(index){
		if(this.length > 2){
			if(index == 0){
				this.index = index;
				this.prevIdx = this.length-1;
				this.nextIdx = index+1;	
			}else if(index == this.length-1){
				this.index = index;
				this.prevIdx = index-1;
				this.nextIdx = 0;	
			}else{
				this.index = index;
				this.prevIdx = index-1;
				this.nextIdx = index+1;		
			}
		}else{
			if(index == 0){
				this.index = index;
				this.prevIdx = this.nextIdx = 1;
			}else{
				this.index = index;
				this.prevIdx = this.nextIdx = 0;
			}
		}
	};

	Flicker.prototype.setHeight = function(){
		ele = this.domObj.childNodes[1].clientHeight;	
		this.domObj.style.height = ele+'px';
		window.scrollTo(0,108);
	};

	Flicker.prototype.callback = function(){
		if(this.options.callback && typeof this.options.callback == 'function'){
			this.options.callback.call('',{ domObj : this.domObj,index : this.index, length : this.length});	
		} 
		if(this.options.eachCallback instanceof Array && this.options.eachCallback[this.index]){
			this.options.eachCallback[this.index].call('',{ domObj : this.domObj, index : this.index, length : this.length});
		}
	}

	Flicker.prototype.bindBtnLeft = function(e){
		var that = this;
		if(this.isAction) return false;
		if(this.isAction == true && this.options.auto) this.removeAutoMove();
		this.isAction = true;

		if(e.preventDefault){
			e.preventDefault();	
		}else{
			e.stopPropagation();	
		}

		if(this.index == 0) this.setIndex(this.length -1);
		else this.setIndex(this.index-1);

		this.animateTransition({
			left : this.width * 1,
			transitionDuration : 300
		},function(that){setTimeout(function(){
			that.stopTransition();
			that.resetDOM(that.index);
			that.isAction = false;
		},400)});	
		this.callback();
		return false;
	}

	Flicker.prototype.bindBtnRight = function(e){
		var that = this;
		if(this.isAction) return false;
		if(this.isAction == true && this.options.auto) this.removeAutoMove();
		this.isAction = true;

		if(e.preventDefault){
			e.preventDefault();	
		}else{
			e.stopPropagation();	
		}
		

		if(this.index == this.length -1) this.setIndex(0);
		else this.setIndex(this.index+1);

		this.animateTransition({
			left : this.width * -1,
			transitionDuration : 300
		},function(that){setTimeout(function(){
			that.stopTransition();
			that.resetDOM(that.index);
			that.isAction = false;
		},400)});	
		this.callback();
		return false;
	}

	Flicker.prototype.addAutoMove = function(){		
		var that = this;
		this.auto = setInterval(function(){
			if(that.index == that.length -1) that.setIndex(0);
			else that.setIndex(that.index+1);

			that.animateTransition({
				left : that.width * -1,
				transitionDuration : 300
			},function(that){setTimeout(function(){
				that.stopTransition();
				that.resetDOM(that.index);
				that.isAction = false;
			},400)});

			that.callback();

		} , 4500);

	};

	Flicker.prototype.removeAutoMove = function(){
		clearInterval(this.auto);
	}

	Flicker.prototype.resize = function(){
		this.width = document.body.clientWidth;
		if(this.options.resize) this.options.resize.call('',{ index : this.index, length : this.length,width:this.width});
	}
})(jQuery);