$.fn.zoomImage = function(options){
	
	if(!('ontouchstart' in window)){
		return;
	}
	this.each(function(){					

		var zoomElem;
		var loadingElem;
		var wrapElem = $(this);
		var targetElem = wrapElem.find(options.target);
		var targetImage = targetElem.attr('data-zoom-image');					
		var btn = wrapElem.find(options.zoomBtn);						

		var width = targetElem.find('img')[0].clientWidth;					
		var height = width;	

		var offsetX = targetElem.find('img').offset().left;
		var offsetY = targetElem.find('img').offset().top;
		var scaleValue = 1.5;
		var scaledWidth = width*scaleValue,
			scaledHeight = height*scaleValue,
			tempX = 0,
			tempY = 0,
			x = 0,
			y = 0,
			startX = 0,
			startY = 0,
			endX = scaledWidth - width,
			endY = scaledHeight - height;

		

		btn.bind('click',function(){

			if($(this).hasClass('zoomed')){
				$(this).removeClass('zoomed');
				zoomElem.remove();
			}else{
				readyImageZoom();
				$(this).addClass('zoomed');							
			}
		});

		function readyImageZoom(){
			loadingElem = $('<div class="loading-adi"><div></div><div></div><div></div></div>');
			targetElem.prepend(loadingElem);

			zoomElem = $('<div class="zoom_area"></div>');
			zoomElem.html('<img src="'+targetImage+'" alt=""/>');
			zoomElem.bind('touchstart',function(event){
				event.cancelBubble = true;
			});
			zoomElem.bind('touchmove',function(event){
				event.cancelBubble = true;
			});

			loadTargetImage(function(){

				loadingElem.remove();

				targetElem.prepend(zoomElem);
				zoomElem.animate({
					opacity : 1
				},200);
				zoomElem.find('img').css({
					width : scaledWidth,
					height : scaledHeight
				});									

				zoomElem[0].addEventListener('touchstart',startZoom);
				zoomElem[0].addEventListener('touchend',endZoom);

			});
		}

		function startZoom(event){
			event.stopPropagation();							
			event.preventDefault();

			startX = event.touches[0] ? event.touches[0].pageX : event.pageX;
			startY = event.touches[0] ? event.touches[0].pageY : event.pageY;

			zoomElem.css({
				transition : 'none'
			});

			window.addEventListener('touchmove',moveZoom);
		}

		function moveZoom(event){
			event.preventDefault();
			event.stopPropagation();

			var eX = event.touches[0] ? event.touches[0].pageX : event.pageX;
			var eY = event.touches[0] ? event.touches[0].pageY : event.pageY;

			tempX = x - (startX - eX);
			tempY = y - (startY - eY);


			if(tempX >= 0){
				tempX = 0
			}else if(Math.abs(tempX) >= Math.abs(endX)){
				tempX = endX*-1;
			}

			if(tempY >= 0){
				tempY = 0
			}else if(Math.abs(tempY) >= Math.abs(endY)){
				tempY = endY*-1;
			}

			zoomElem.find('img').css({
				// left : tempX+'px',
				// top : tempY+'px'		
				transform : 'translate3d('+tempX+'px,'+tempY+'px,0)'						
			});							

		}

		function endZoom(event){

			event.stopPropagation();							
			event.preventDefault();

			x = tempX;
			y = tempY;

			window.removeEventListener('touchmove',moveZoom);
			return false;
		}

		function loadTargetImage(fn){
			var img = new Image();
			img.onload = fn;
			img.src = targetImage;
		}
	});
};