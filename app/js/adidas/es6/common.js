/**
 * @type object
 * @description
 * 	Namespace for ADidas mobile
 */
const adiApp = adiApp || {};

/**
 * @name addClass
 * @type function
 * @description Add class name to element by string or Array
 * @param {DOMobject , string || Array}
 */

adiApp.addClass = (element , className) => {
	const targetClassName = className.trim().split(' ');
	let regClassName;
	let newClassName = '';

	if(typeof element  !== 'array' && !element.length){
		targetClassName.map(( v, i ) => {
			regClassName = new RegExp('(\\s|^)'+v+'(\\s|$)');
			if(element.className.search(regClassName) < 0){
				newClassName += v+' ';
			}
		});

		if(newClassName !== ''){
			element.className = element.className.trim() + ' ' + newClassName.trim();
		}

	}else{
		for(let el of element){

			targetClassName.map(( v, i ) => {
				regClassName = new RegExp('(\\s|^)'+v+'(\\s|$)');
				if(el.className.search(regClassName) < 0){
					newClassName += v+' ';
				}
			});

			if(newClassName !== ''){
				el.className = el.className.trim() + ' ' + newClassName.trim();
			}

			newClassName = '';
		}
	}
};

/**
 * @name removeClass
 * @type function
 * @description Remove class name on element by string or array
 * @param {DOMobject , string || Array}

 * @return {number} This returns something that has a description too long to
 *                  fit in one line.
 */
adiApp.removeClass = (element , className) => {
	const targetClassName = className.trim().split(' ');
	let regClassName;

	if(typeof element  !== 'array' && !element.length){
		targetClassName.map((v , i) => {
			regClassName = new RegExp('(\\s|^)'+v+'(\\s|$)');
			element.className = element.className.replace(regClassName,' ');
		});
	}else{
		[...element].map(el => {
			targetClassName.map((v , i) => {
				regClassName = new RegExp('(\\s|^)'+v+'(\\s|$)');
				el.className = el.className.replace(regClassName,' ');
			});
		})
	}
};

/**
 * @name hasClass
 * @type function
 * @description  * @description Check element whether it has classn
 * @param {DOMobject , string}

 * @return {boolean} Return statement whether DOM has class name
 */
adiApp.hasClass = (element , className) => {
	if(!!element){
		var regExp = new RegExp('(\\s|^)'+className+'(\\s|$)');
		return element.className.search(regExp) < 0 ? false : true;
	}
	return null;

};


/**
 * @name addEventListener
 * @type function
 * @description Bind event to targeElement
 * @param {DOMobject | Array , string , function , boolean}
 */
adiApp.addEventListener = (element , eventName , func , isBubb = false) => {
	if(!element || element.length == 0){
		return;
	}

	if(typeof element  !== 'array' && !element.length){
		element.addEventListener(eventName , func , isBubb);
	}else{
		[...element].map(el => {
			el.addEventListener(eventName , func , isBubb);
		});
	}
};


/**
 * @name prependChild
 * @type function
 * @description Put element to targeElement at the start of.
 * @param {DOMobject , DOMobject}
 */
adiApp.prependChild = (targetElem , elem) => {
	if(targetElem.children.length > 0){
		targetElem.insertBefore(elem , targetElem.children[0]);
	}else{
		targetElem.appendChild(elem)
	}
};


/**
 * @name getNodefromString
 * @type function
 * @description Parse string to DOMObject
 * @param {string}
 * @return {DOMobject} Return DOMobject which convert from string
 */
adiApp.getNodefromString = (htmlString) => {
	const dummy = document.createElement('div');
	dummy.innerHTML = htmlString;
	return dummy.children[0];
};


/**
 * @name getElementSize
 * @type function
 * @description Parse string to DOMObject
 * @param {string}
 * @return {DOMobject} Return DOMobject which convert from string
 */
adiApp.getElementSize = (element) =>{
	const parentElem = element.parentNode;
	const cloneElem = element.cloneNode(true);
	cloneElem.style.display = 'block';
	cloneElem.style.visibility = 'hidden';
	cloneElem.style.position = 'absolute';
}

adiApp.animate = (from , to ,fn) => {

};

adiApp.getAnimValue = (from , to , speed) => {
	if(Math.abs(from) - Math.abs(to) == 0.1){
		return false;
	}else{
		return from - ( from - to ) * speed
	}
};


/**
 * @name getIndex
 * @type function
 * @description Get index of element
 * @param {DOMObject}
 * @return {number} Return index of element
 */
adiApp.getIndex = (element) => {
	const elemParent = element.parentNode;
	let index = 0;
	// const idx = elemParent.children.findIndex((v) =>{ v === element});
	for(let el of elemParent.children){
		if(el.isEqualNode(element)){
			return index;
		}
		index += 1;
	}
};


/**
 * @name getSiblings
 * @type function
 * @description Get index of element
 * @param {DOMObject , string}
 * @return {Array} Return Array which sibling elements of targetElement
 */
adiApp.getSiblings = (element , selector) =>{
	const elemSiblings = [...element.parentNode.children];
	const elemName = selector.match(/^\w*(?=.?)/)[0];
	const rexClassNames = new RegExp(elemName+'.?');
	const classNames = selector.replace(rexClassNames,'').split('.');
	let index = 0;
	let count = 0;
	let returnElems = [];

    console.log(typeof elemSiblings,elemSiblings);

	// for(let elem of elemSiblings){
	elemSiblings.map((elem , index) => {


        console.log(elem);
		if(elemName !== ''){
			if(elem.nodeName.toLowerCase() !== elemName.toLowerCase()){
				return;
			}

			if(classNames.length == 0 || (classNames.length == 1 && classNames[0] == '')){
				returnElems.push(elem);
                return;
			}
		}


		elem.className.trim().split(' ').map(cn => {
			for(let k = 0; k < classNames.length; k++){
				if(cn == classNames[k]){
					count += 1;
				}
			}
		});

		if(count == classNames.length){
			returnElems.push(elem);
		}
		count = 0;
	});

	return returnElems;
};


/**
 * @name getPreviousElement
 * @type function
 * @description Get previous element of targetElement
 * @param {DOMObject}
 * @return {Array} Return previous element of targetElement
 */
adiApp.getPreviousElement = (element) => {
	const parentElem = element.parentNode;
	const childElems = [...parentElem.children];
	let index = 0;

	for(let i of childElems){
		if(i == element){
			return childElems[index-1];
		}
		index += 1;
	}
};


/**
 * @name getNextElement
 * @type function
 * @description Get next element of targetElement
 * @param {DOMObject}
 * @return {Array} Return next element of targetElement
 */
adiApp.getNextElement = (element) => {
	const parentElem = element.parentNode;
	const childElems = [...parentElem.children];
	let index = 0;

	for(let i of childElems){
		if(i == element){
			if(index+1 <= childElems.length-1){
				return childElems[index+1];
			}
		}
		index += 1;
	}
	return undefined;
};

/**
 * @name init
 * @type function
 * @description Initial adidas
 */
 adiApp.init = () =>{
	 const elemHeader = document.getElementById('header');
	 if(!document.querySelector('.navmenu_close')){
		 adiApp.prependChild(elemHeader ,adiApp.getNodefromString('<a href="javascript:void(0)" class="navmenu_close close_x_btn"></a>') );
	 }
	 if(!document.getElementById('nav_menu_overlay')){
		 adiApp.prependChild(elemHeader ,adiApp.getNodefromString('<div id="nav_menu_overlay"></div>'));
	 }
 };


(function($){

	adiApp.init();


	let isAnimate = false;
	const elemHtml = document.getElementsByTagName('html')[0];
	const elemHeader = document.getElementById('header');
	const elemGnbNav = document.querySelector('#header .nav_menu');
	const elemSearchNav = document.querySelector('#header .nav_search');
	const elemButtonGnb = document.querySelector('.nav_main .btn_slide');
	const elemCloseButtonGnb = document.querySelector('#header>.navmenu_close');
	const elemButtonSearch = document.querySelector('.nav_main .btn_search');

	elemGnbNav.style.width = window.innerWidth - 60 + 'px';
	elemGnbNav.style.WebkitTransitionProperty = '-webkit-transform';
	elemGnbNav.style.transitionProperty = 'transform';



	const closeGnbNavMenu = () => {
		adiApp.removeClass(elemButtonGnb,'open');
		adiApp.removeClass(elemHtml,'no_srl');
		adiApp.removeClass(elemGnbNav,'slide-open');
		// elemGnbNav.style.left = '-100%'
		elemGnbNav.style.transform =
		elemGnbNav.style.WebkitTransform =
		elemGnbNav.style.MozkitTransform ='translate3d(-100%,0,0)';
		adiApp.removeClass(elemHeader,'open-menu');
	};

	const closeSearchNavMenu = () => {
		adiApp.removeClass(elemButtonSearch,'open');
		adiApp.removeClass(elemHtml,'no_srl');
		adiApp.removeClass(elemSearchNav,'slide-open');
		elemSearchNav.style.right = '-100%';
		adiApp.removeClass(elemHeader,'open-menu');
	};

	const closeNavOverlay = () => {
		var elem = document.getElementById('nav_menu_overlay');
		adiApp.removeClass(elem , 'active');
		setTimeout(()=>{
			elem.style.display = 'none';
		},200)
	}

	document.getElementById('nav_menu_overlay').addEventListener('click',(e)=>{
		closeGnbNavMenu();
		closeNavOverlay();
		adiApp.removeClass(elemCloseButtonGnb,'open');
		setTimeout(() => {
			elemCloseButtonGnb.style.display = 'none';
		},100);
		window.scrollTo(0,document.querySelector('.nav_main').prevScroll);
	});

	elemCloseButtonGnb.addEventListener('click',e=>{
		closeGnbNavMenu();
		closeNavOverlay();
		adiApp.removeClass(elemCloseButtonGnb,'open');
		setTimeout(() => {
			elemCloseButtonGnb.style.display = 'none';
		},100);
		window.scrollTo(0,document.querySelector('.nav_main').prevScroll);
	});

	elemButtonGnb.addEventListener('click',(e) => {
		e.stopPropagation();

		if(isAnimate){
			return;
		}
		isAnimate = true;

		if(adiApp.hasClass(e.currentTarget,'open')){


			closeNavOverlay();
			closeGnbNavMenu();
			adiApp.removeClass(elemCloseButtonGnb,'open');
			setTimeout(() => {
				elemCloseButtonGnb.style.display = 'none';
			},100);

			window.scrollTo(0,document.querySelector('.nav_main').prevScroll);
		}else{
			const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			const topBnnElem = document.querySelector('.top_bnn');
			const offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;
			const elemH = window.innerHeight - document.getElementById('header').getBoundingClientRect().bottom;

			adiApp.addClass(elemHeader,'open-menu');

			if(adiApp.hasClass(elemButtonSearch , 'open')){

				adiApp.removeClass(elemSearchNav,'slide-open');
				adiApp.removeClass(elemButtonSearch,'open');
				elemSearchNav.style.right = '-100%';
				elemCloseButtonGnb.style.display = 'none';

				setTimeout(() => {
					adiApp.addClass(elemButtonGnb , 'open');
					adiApp.addClass(elemGnbNav , 'slide-open');
					elemGnbNav.style.minHeight =
					elemGnbNav.style.height = elemH + 'px';
					// elemGnbNav.style.left = 0;
					elemGnbNav.style.transform =
					elemGnbNav.style.WebkitTransform =
					elemGnbNav.style.MozkitTransform ='translate3d(0,0,0)';

					elemCloseButtonGnb.style.display = 'block';
					setTimeout(() => {
						adiApp.addClass(elemCloseButtonGnb,'open');
					},350);
				},100);
			}else{
				document.getElementById('nav_menu_overlay').style.display = 'block';
				setTimeout(()=>{
					adiApp.addClass(document.getElementById('nav_menu_overlay') , 'active');
				},10);

				document.querySelector('.nav_main').prevScroll = scrollTop;

				setTimeout(()=>{
					document.querySelector('.nav_main').prevScroll = scrollTop;
					adiApp.addClass(e.target , 'open');
					adiApp.addClass(elemGnbNav , 'slide-open');
					elemGnbNav.style.height =
					elemGnbNav.style.minHeight = elemH + 'px';
					// elemGnbNav.style.left = '0';
					elemGnbNav.style.transform =
					elemGnbNav.style.WebkitTransform =
					elemGnbNav.style.MozkitTransform ='translate3d(0,0,0)';
					adiApp.addClass(elemHtml,'no_srl');

					elemCloseButtonGnb.style.display = 'block';
					setTimeout(() => {
						adiApp.addClass(elemCloseButtonGnb,'open');
					},350);

				} , 200);
			}
		}

		setTimeout(()=>{
			isAnimate = false;
		},500);

		return false;
	},true);

	elemButtonSearch.addEventListener('click',(e) => {
		e.stopPropagation();

		if(isAnimate){
			return;
		}

		document.getElementById('nav_menu_overlay').style.display = 'block';
		setTimeout(()=>{
			adiApp.addClass(document.getElementById('nav_menu_overlay') , 'active');
		},10);

		isAnimate = true;
		if(adiApp.hasClass(e.currentTarget,'open')){
			closeSearchNavMenu();
			closeNavOverlay();
			elemCloseButtonGnb.style.display = 'none';
			adiApp.removeClass(elemCloseButtonGnb,'open');

			window.scrollTo(0,document.querySelector('.nav_main').prevScroll);
		}else{
			const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			const topBnnElem = document.querySelector('.top_bnn');
			const offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;
			const elemH = window.innerHeight - document.getElementById('header').getBoundingClientRect().bottom;

			adiApp.addClass(elemHeader,'open-menu');

			if(adiApp.hasClass(elemButtonGnb , 'open')){
				closeGnbNavMenu();
				elemCloseButtonGnb.style.display = 'none';
				adiApp.removeClass(elemCloseButtonGnb,'open');
			}

			document.querySelector('.nav_main').prevScroll = scrollTop;

			adiApp.addClass(elemButtonSearch , 'open');
			adiApp.addClass(elemHtml,'no_srl');
			elemSearchNav.style.minHeight =
			elemSearchNav.style.height = elemH + 'px'
			elemSearchNav.style.right = 0;
		}

		setTimeout(()=>{
			isAnimate = false;
		},500);

		return false;

	},true);

	adiApp.addEventListener(document.querySelectorAll( '#header .nav_menu .gnb>li') , 'click' , (e) => {
		e.stopPropagation();
		e.preventDefault();
		if(!adiApp.hasClass(e.currentTarget,'open')){
			// const rootTop = document.getElementById('header').getBoundingClientRect().bottom;
			// const innerTop = rootTop - document.querySelector('#header .nav_menu .nav_menu_inner').getBoundingClientRect().top;
			// const yVal = (e.currentTarget.getBoundingClientRect().top - rootTop) + innerTop;


			adiApp.removeClass(document.querySelectorAll('#header .nav_menu .gnb>li'),'open')
			adiApp.addClass(e.currentTarget , 'open');

			const el = e.currentTarget;
			const scrollVal = document.querySelector('.nav_menu').scrollTop;
			const objOffsetTop = (e.currentTarget.getBoundingClientRect().top + (scrollVal-60));


			// document.querySelector('#header .nav_menu').scrollTop = objOffsetTop;

			setTimeout(function(){
				const scrollVal = document.querySelector('.nav_menu').scrollTop;
				const objOffsetTop = (el.getBoundingClientRect().top + (scrollVal-60));

				$('#header .nav_menu').animate({
					scrollTop : objOffsetTop
				},300);
			},150);

		}else{
			adiApp.removeClass(e.currentTarget , 'open');
		}
		return false;
	});

	adiApp.addEventListener(document.querySelectorAll('#header .nav_menu .gnb>li li.dep'),'click',(e) =>{
		e.stopPropagation();
		e.preventDefault();

		if(adiApp.hasClass(e.currentTarget , 'open')){
			adiApp.removeClass(e.currentTarget , 'open');
		}else{
			adiApp.addClass(e.currentTarget , 'open');
		}

		return false;
	});

	adiApp.addEventListener(document.querySelectorAll('#header .nav_menu .gnb>li li.dep li a'),'click',(e) =>{
		e.stopPropagation();
	});

	adiApp.addEventListener(document.getElementById('filterLayerBtn') , 'click' , (e)=>{
		if(adiApp.hasClass(e.currentTarget , 'on')){


			adiApp.removeClass(document.getElementsByTagName('html')[0] , 'no_srl');
			adiApp.removeClass(document.getElementById('filter_layer') , 'open');
		}else{
			fnGetOptions();

			adiApp.addClass(document.getElementsByTagName('html')[0] , 'no_srl');
			adiApp.addClass(document.getElementById('filter_layer') , 'open');
		}
	});

	adiApp.addEventListener(document.querySelector('#filter_layer .close_x_btn') , 'click' , (e)=>{
		adiApp.removeClass(document.getElementsByTagName('html')[0] , 'no_srl');
		adiApp.removeClass(document.getElementById('filter_layer') , 'open');
		adiApp.removeClass(document.getElementById('filterLayerBtn') , 'open');
	});

	adiApp.addEventListener(document.querySelectorAll('#filter_layer .toggle_arw') , 'click' , (e)=>{
		if(adiApp.hasClass(e.currentTarget , 'open')){
			adiApp.removeClass(e.currentTarget , 'open');
		}else{
			adiApp.addClass(e.currentTarget , 'open');
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


	adiApp.addEventListener(document.querySelectorAll('#header .nav_search .sch_tab>a') , 'click' , (e)=>{
		if(adiApp.hasClass(e.currentTarget,'on')){
			return false;
		}

		const elemKeywords = document.querySelector('#header .nav_search .keyword_recent');
		const elemSchList = document.querySelector('#header .nav_search .sch_list');

		if(adiApp.getIndex(e.currentTarget) == 0){
			$('#header .nav_search .keyword_recent').show();
			elemKeywords.style.display = 'block';
			elemSchList.style.display = 'none';
		}else{
			elemSchList.style.display = 'block';
			elemKeywords.style.display = 'none';
		}
		adiApp.removeClass(document.querySelectorAll('#header .nav_search .sch_tab>a') , 'on');
		adiApp.addClass(e.currentTarget , 'on');
	});

	adiApp.addEventListener(document.querySelectorAll('.top_bnn .top_bnn_close') , 'click' , (e)=>{
		e.currentTarget.parentNode.removeChild(e.currentTarget);

		if( adiApp.hasClass(document.querySelector('#header .btn_slide') , 'open') ){
			document.querySelector('#header .nav_menu').style.height = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
			document.querySelector('#header .nav_menu').style.minHeight = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
		}

		if( adiApp.hasClass(document.querySelector('#header .btn_search') , 'open') ){
			document.querySelector('#header .nav_search').style.height = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
			document.querySelector('#header .nav_search').style.minHeight = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
		}
	});


	adiApp.bindSelectBox = function(elemId){
		if(elemId != undefined){
			adiApp.addEventListener(document.getElementById(elemId) , 'change',(e)=>{
				const elemTextbox = e.currentTarget.parentNode.nextSibling;
				const selectedText = e.currentTarget.options[e.currentTarget.selectedIndex].text;
				const aElem = adiApp.getSiblings(e.currentTarget , 'a')[0];
				aElem.querySelector('span').innerHTML = selectedText;
			});
		}else{
			adiApp.addEventListener(document.querySelectorAll('.sel_design>select') , 'change',(e)=>{
				const elemTextbox = e.currentTarget.parentNode.nextSibling;
				const selectedText = e.currentTarget.options[e.currentTarget.selectedIndex].text;
				const aElem = adiApp.getSiblings(e.currentTarget , 'a.toggle_arw')[0];
				aElem.querySelector('span').innerHTML = selectedText;
			});
		}
	};

	adiApp.openHotspot = function(elemId,obj){
		if(elemId !== undefined){
			if(adiApp.hasClass(document.getElementById('.'+elemId),'active')){
				return;
			}

			adiApp.removeClass(document.querySelectorAll('.hotspot_layer') , 'active');
			console.log(document.querySelectorAll('.'+elemId));
			adiApp.addClass(document.querySelectorAll('.'+elemId) , 'active');
		}
	};

	adiApp.closeHotspot = function(elemId , obj){
		adiApp.removeClass(document.querySelectorAll('.'+elemId) , 'active');
		return false;
	};

	adiApp.bindSelectBox();
	adiApp.bindHotspot = function(){
		let elemsHotspot = [...document.querySelectorAll('.hotspot')];

		// for(let node of elemsHotspot){
		elemsHotspot.map((node , index) => {
			if(node.dataset.hotspotLayer !== undefined){
				node.addEventListener('click',(e)=>{
					adiApp.openHotspot(node.dataset.hotspotLayer,e.currentTarget);

					// Binding click event to close button
					adiApp.addEventListener(document.querySelectorAll('.'+node.dataset.hotspotLayer+' .close') , 'click' , (e)=>{
						adiApp.closeHotspot(node.dataset.hotspotLayer , e.currentTarget);
					});
				});
			}
		})

		// }
	};


	(() => {
		let offsetTop;
		let offsetBottom;
		let headerElem = document.getElementById('header');
		let containerElem = document.getElementById('container');
		let elemTopbnn = document.getElementsByClassName('top_bnn');
		let prevScroll = document.documentElement.scrollTop || document.body.scrollTop;
		let topBnnH = 0;

		// Detect Topbanners height and add all
		if(elemTopbnn && elemTopbnn.length > 1){
			elemTopbnn.map((v , i) => {
				const imgsPath = [];
				const imgSrc = (index => {
					let iSrc = '';
					if(v.getElementsByTagName('img').length > 0){
						const image = new Image();
						image.onload = () => {
							topBnnH += window.innerWidth * (this.height / this.width);
						};
						image.src = v.getElementsByTagName('img')[0].getAttribute('src');
					}
				});
			});
		}

		const headerSticky = () => {

			if(adiApp.hasClass(document.getElementById('header'),'open-menu')){
				requestAnimationFrame(headerSticky);
				return;
			}

			const sTop = document.documentElement.scrollTop || document.body.scrollTop;
			offsetTop = 61 + topBnnH;
			if(sTop < offsetTop-50){
				adiApp.addClass(headerElem , 'unfixed hide');
				containerElem.style.marginTop = '0';
				prevScroll = sTop;
			}else if(sTop > offsetTop){
				adiApp.removeClass(headerElem , 'unfixed');
				containerElem.style.marginTop = '61px';
				offsetTop = 61 + topBnnH;

				if(prevScroll - sTop > 3){
					adiApp.removeClass(headerElem , 'hide');
				}else if(prevScroll - sTop < -3){
					adiApp.addClass(headerElem , 'hide');
				}

				offsetTop = headerElem.getBoundingClientRect().top;
				offsetBottom = headerElem.getBoundingClientRect().bottom;

				prevScroll = sTop;
			}

			requestAnimationFrame(headerSticky);
		}

		headerSticky();
	})();

	window.openModalVideoViewer = (ytbId , width , height) => {
		let popElem;
		let htmlString = '<div id="video-modal-popup" style="width:100%;height:100%;position:fixed;top:0;left:0;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:301;opacity:0;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;">';
			htmlString += '	<div class="overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;box-sizing:border-box;-webkit-box-sizing:border-box;background:rgba(0,0,0,0.8);"></div>';
			htmlString += '	<div class="popup" style="width:80%;height:80%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);box-sizing:border-box;-webkit-box-sizing:border-box;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;opacity:1">';
			htmlString += '		<a href="javascript:void(0)" class="close_x_btn white" style="width:50px;height:50px;position:absolute;top:-50px;right:0;background:#000;"></a>';
			htmlString += '		<iframe class="video" id="main_video" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/'+ytbId+'?rel=0"></iframe>'
			htmlString += '	</div>';
			htmlString += '</div">';

		document.getElementsByTagName('body')[0].appendChild(adiApp.getNodefromString(htmlString));
		popElem = document.getElementById('video-modal-popup');


		const pm = new Promise((resolve , reject) => {
			setTimeout(()=>{
				popElem.style.opacity = 1;
				resolve();
			},10);
		});
		pm.then((data) => {
			setTimeout(()=>{
				popElem.querySelector('.popup').style.opacity = 1;
			},500);
		});

		popElem.querySelector('.overlay').addEventListener('click',e => {
			popElem.parentNode.removeChild(popElem);
		});

		popElem.querySelector('.close_x_btn').addEventListener('click',e => {
			popElem.parentNode.removeChild(popElem);
		});
	}

})(jQuery);
