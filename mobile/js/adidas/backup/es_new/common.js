'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var adiApp = adiApp || {};

adiApp.addClass = function (element, className) {
	var targetClassName = className.trim().split(' ');
	var regClassName = void 0;
	var newClassName = '';

	if (typeof element !== 'array' && !element.length) {
		targetClassName.map(function (v, i) {
			regClassName = new RegExp('(\\s|^)' + v + '(\\s|$)');
			if (element.className.search(regClassName) < 0) {
				newClassName += v + ' ';
			}
		});

		if (newClassName !== '') {
			element.className = element.className.trim() + ' ' + newClassName.trim();
		}
	} else {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function _loop() {
				var el = _step.value;


				targetClassName.map(function (v, i) {
					regClassName = new RegExp('(\\s|^)' + v + '(\\s|$)');
					if (el.className.search(regClassName) < 0) {
						newClassName += v + ' ';
					}
				});

				if (newClassName !== '') {
					el.className = el.className.trim() + ' ' + newClassName.trim();
				}

				newClassName = '';
			};

			for (var _iterator = element[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
};

adiApp.removeClass = function (element, className) {
	var targetClassName = className.trim().split(' ');
	var regClassName = void 0;

	if (typeof element !== 'array' && !element.length) {
		targetClassName.map(function (v, i) {
			regClassName = new RegExp('(\\s|^)' + v + '(\\s|$)');
			element.className = element.className.replace(regClassName, ' ');
		});
	} else {
		[].concat(_toConsumableArray(element)).map(function (el) {
			targetClassName.map(function (v, i) {
				regClassName = new RegExp('(\\s|^)' + v + '(\\s|$)');
				el.className = el.className.replace(regClassName, ' ');
			});
		});
	}
};

adiApp.hasClass = function (element, className) {
	if (!!element) {
		var regExp = new RegExp('(\\s|^)' + className + '(\\s|$)');
		return element.className.search(regExp) < 0 ? false : true;
	}
	return null;
};

adiApp.addEventListener = function (element, eventName, func) {
	var isBubb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	if (!element || element.length == 0) {
		return;
	}

	if (typeof element !== 'array' && !element.length) {
		element.addEventListener(eventName, func, isBubb);
	} else {
		[].concat(_toConsumableArray(element)).map(function (el) {
			el.addEventListener(eventName, func, isBubb);
		});
	}
};

adiApp.prependChild = function (targetElem, elem) {
	if (targetElem.children.length > 0) {
		targetElem.insertBefore(elem, targetElem.children[0]);
	} else {
		targetElem.appendChild(elem);
	}
};

adiApp.getNodefromString = function (htmlString) {
	var dummy = document.createElement('div');
	dummy.innerHTML = htmlString;
	return dummy.children[0];
};

adiApp.getElementSize = function (element) {
	var parentElem = element.parentNode;
	var cloneElem = element.cloneNode(true);
	cloneElem.style.display = 'block';
	cloneElem.style.visibility = 'hidden';
	cloneElem.style.position = 'absolute';
};

adiApp.animate = function (from, to, fn) {};

adiApp.getAnimValue = function (from, to, speed) {
	if (Math.abs(from) - Math.abs(to) == 0.1) {
		return false;
	} else {
		return from - (from - to) * speed;
	}
};

adiApp.getIndex = function (element) {
	var elemParent = element.parentNode;
	var index = 0;
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = elemParent.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _el = _step2.value;

			if (_el.isEqualNode(element)) {
				return index;
			}
			index += 1;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
};

adiApp.getSiblings = function (element, selector) {
	var elemSiblings = [].concat(_toConsumableArray(element.parentNode.children));
	var elemName = selector.match(/^\w*(?=.?)/)[0];
	var rexClassNames = new RegExp(elemName + '.?');
	var classNames = selector.replace(rexClassNames, '').split('.');
	var index = 0;
	var count = 0;
	var returnElems = [];

	console.log(typeof elemSiblings === 'undefined' ? 'undefined' : _typeof(elemSiblings), elemSiblings);

	elemSiblings.map(function (elem, index) {

		console.log(elem);
		if (elemName !== '') {
			if (elem.nodeName.toLowerCase() !== elemName.toLowerCase()) {
				return;
			}

			if (classNames.length == 0 || classNames.length == 1 && classNames[0] == '') {
				returnElems.push(elem);
				return;
			}
		}

		elem.className.trim().split(' ').map(function (cn) {
			for (var k = 0; k < classNames.length; k++) {
				if (cn == classNames[k]) {
					count += 1;
				}
			}
		});

		if (count == classNames.length) {
			returnElems.push(elem);
		}
		count = 0;
	});

	return returnElems;
};

adiApp.getPreviousElement = function (element) {
	var parentElem = element.parentNode;
	var childElems = [].concat(_toConsumableArray(parentElem.children));
	var index = 0;

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = childElems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var i = _step3.value;

			if (i == element) {
				return childElems[index - 1];
			}
			index += 1;
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
};

adiApp.getNextElement = function (element) {
	var parentElem = element.parentNode;
	var childElems = [].concat(_toConsumableArray(parentElem.children));
	var index = 0;

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = childElems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var i = _step4.value;

			if (i == element) {
				if (index + 1 <= childElems.length - 1) {
					return childElems[index + 1];
				}
			}
			index += 1;
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	return undefined;
};

adiApp.init = function () {
	var elemHeader = document.getElementById('header');
	if (!document.querySelector('.navmenu_close')) {
		adiApp.prependChild(elemHeader, adiApp.getNodefromString('<a href="javascript:void(0)" class="navmenu_close close_x_btn"></a>'));
	}
	if (!document.getElementById('nav_menu_overlay')) {
		adiApp.prependChild(elemHeader, adiApp.getNodefromString('<div id="nav_menu_overlay"></div>'));
	}
};

(function ($) {
	var _this = this;

	adiApp.init();

	var isAnimate = false;
	var elemHtml = document.getElementsByTagName('html')[0];
	var elemHeader = document.getElementById('header');
	var elemGnbNav = document.querySelector('#header .nav_menu');
	var elemSearchNav = document.querySelector('#header .nav_search');
	var elemButtonGnb = document.querySelector('.nav_main .btn_slide');
	var elemCloseButtonGnb = document.querySelector('#header>.navmenu_close');
	var elemButtonSearch = document.querySelector('.nav_main .btn_search');

	elemGnbNav.style.width = window.innerWidth - 60 + 'px';
	elemGnbNav.style.WebkitTransitionProperty = '-webkit-transform';
	elemGnbNav.style.transitionProperty = 'transform';

	var closeGnbNavMenu = function closeGnbNavMenu() {
		adiApp.removeClass(elemButtonGnb, 'open');
		adiApp.removeClass(elemHtml, 'no_srl');
		adiApp.removeClass(elemGnbNav, 'slide-open');

		elemGnbNav.style.transform = elemGnbNav.style.WebkitTransform = elemGnbNav.style.MozkitTransform = 'translate3d(-100%,0,0)';
		adiApp.removeClass(elemHeader, 'open-menu');
	};

	var closeSearchNavMenu = function closeSearchNavMenu() {
		adiApp.removeClass(elemButtonSearch, 'open');
		adiApp.removeClass(elemHtml, 'no_srl');
		adiApp.removeClass(elemSearchNav, 'slide-open');
		elemSearchNav.style.right = '-100%';
		adiApp.removeClass(elemHeader, 'open-menu');
	};

	var closeNavOverlay = function closeNavOverlay() {
		var elem = document.getElementById('nav_menu_overlay');
		adiApp.removeClass(elem, 'active');
		setTimeout(function () {
			elem.style.display = 'none';
		}, 200);
	};

	document.getElementById('nav_menu_overlay').addEventListener('click', function (e) {
		closeGnbNavMenu();
		closeNavOverlay();
		adiApp.removeClass(elemCloseButtonGnb, 'open');
		setTimeout(function () {
			elemCloseButtonGnb.style.display = 'none';
		}, 100);
		window.scrollTo(0, document.querySelector('.nav_main').prevScroll);
	});

	elemCloseButtonGnb.addEventListener('click', function (e) {
		closeGnbNavMenu();
		closeNavOverlay();
		adiApp.removeClass(elemCloseButtonGnb, 'open');
		setTimeout(function () {
			elemCloseButtonGnb.style.display = 'none';
		}, 100);
		window.scrollTo(0, document.querySelector('.nav_main').prevScroll);
	});

	elemButtonGnb.addEventListener('click', function (e) {
		e.stopPropagation();

		if (isAnimate) {
			return;
		}
		isAnimate = true;

		if (adiApp.hasClass(e.currentTarget, 'open')) {

			closeNavOverlay();
			closeGnbNavMenu();
			adiApp.removeClass(elemCloseButtonGnb, 'open');
			setTimeout(function () {
				elemCloseButtonGnb.style.display = 'none';
			}, 100);

			window.scrollTo(0, document.querySelector('.nav_main').prevScroll);
		} else {
			(function () {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var topBnnElem = document.querySelector('.top_bnn');
				var offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;
				var elemH = window.innerHeight - document.getElementById('header').getBoundingClientRect().bottom;

				adiApp.addClass(elemHeader, 'open-menu');

				if (adiApp.hasClass(elemButtonSearch, 'open')) {

					adiApp.removeClass(elemSearchNav, 'slide-open');
					adiApp.removeClass(elemButtonSearch, 'open');
					elemSearchNav.style.right = '-100%';
					elemCloseButtonGnb.style.display = 'none';

					setTimeout(function () {
						adiApp.addClass(elemButtonGnb, 'open');
						adiApp.addClass(elemGnbNav, 'slide-open');
						elemGnbNav.style.minHeight = elemGnbNav.style.height = elemH + 'px';

						elemGnbNav.style.transform = elemGnbNav.style.WebkitTransform = elemGnbNav.style.MozkitTransform = 'translate3d(0,0,0)';

						elemCloseButtonGnb.style.display = 'block';
						setTimeout(function () {
							adiApp.addClass(elemCloseButtonGnb, 'open');
						}, 350);
					}, 100);
				} else {
					document.getElementById('nav_menu_overlay').style.display = 'block';
					setTimeout(function () {
						adiApp.addClass(document.getElementById('nav_menu_overlay'), 'active');
					}, 10);

					document.querySelector('.nav_main').prevScroll = scrollTop;

					setTimeout(function () {
						document.querySelector('.nav_main').prevScroll = scrollTop;
						adiApp.addClass(e.target, 'open');
						adiApp.addClass(elemGnbNav, 'slide-open');
						elemGnbNav.style.height = elemGnbNav.style.minHeight = elemH + 'px';

						elemGnbNav.style.transform = elemGnbNav.style.WebkitTransform = elemGnbNav.style.MozkitTransform = 'translate3d(0,0,0)';
						adiApp.addClass(elemHtml, 'no_srl');

						elemCloseButtonGnb.style.display = 'block';
						setTimeout(function () {
							adiApp.addClass(elemCloseButtonGnb, 'open');
						}, 350);
					}, 200);
				}
			})();
		}

		setTimeout(function () {
			isAnimate = false;
		}, 500);

		return false;
	}, true);

	elemButtonSearch.addEventListener('click', function (e) {
		e.stopPropagation();

		if (isAnimate) {
			return;
		}

		document.getElementById('nav_menu_overlay').style.display = 'block';
		setTimeout(function () {
			adiApp.addClass(document.getElementById('nav_menu_overlay'), 'active');
		}, 10);

		isAnimate = true;
		if (adiApp.hasClass(e.currentTarget, 'open')) {
			closeSearchNavMenu();
			closeNavOverlay();
			elemCloseButtonGnb.style.display = 'none';
			adiApp.removeClass(elemCloseButtonGnb, 'open');

			window.scrollTo(0, document.querySelector('.nav_main').prevScroll);
		} else {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var topBnnElem = document.querySelector('.top_bnn');
			var offsetTop = !topBnnElem ? 61 : topBnnElem.getBoundingClientRect().bottom - topBnnElem.getBoundingClientRect().top + 61;
			var elemH = window.innerHeight - document.getElementById('header').getBoundingClientRect().bottom;

			adiApp.addClass(elemHeader, 'open-menu');

			if (adiApp.hasClass(elemButtonGnb, 'open')) {
				closeGnbNavMenu();
				elemCloseButtonGnb.style.display = 'none';
				adiApp.removeClass(elemCloseButtonGnb, 'open');
			}

			document.querySelector('.nav_main').prevScroll = scrollTop;

			adiApp.addClass(elemButtonSearch, 'open');
			adiApp.addClass(elemHtml, 'no_srl');
			elemSearchNav.style.minHeight = elemSearchNav.style.height = elemH + 'px';
			elemSearchNav.style.right = 0;
		}

		setTimeout(function () {
			isAnimate = false;
		}, 500);

		return false;
	}, true);

	adiApp.addEventListener(document.querySelectorAll('#header .nav_menu .gnb>li'), 'click', function (e) {
		e.stopPropagation();
		e.preventDefault();
		if (!adiApp.hasClass(e.currentTarget, 'open')) {
			(function () {

				adiApp.removeClass(document.querySelectorAll('#header .nav_menu .gnb>li'), 'open');
				adiApp.addClass(e.currentTarget, 'open');

				var el = e.currentTarget;
				var scrollVal = document.querySelector('.nav_menu').scrollTop;
				var objOffsetTop = e.currentTarget.getBoundingClientRect().top + (scrollVal - 60);

				setTimeout(function () {
					var scrollVal = document.querySelector('.nav_menu').scrollTop;
					var objOffsetTop = el.getBoundingClientRect().top + (scrollVal - 60);

					$('#header .nav_menu').animate({
						scrollTop: objOffsetTop
					}, 300);
				}, 150);
			})();
		} else {
			adiApp.removeClass(e.currentTarget, 'open');
		}
		return false;
	});

	adiApp.addEventListener(document.querySelectorAll('#header .nav_menu .gnb>li li.dep'), 'click', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if (adiApp.hasClass(e.currentTarget, 'open')) {
			adiApp.removeClass(e.currentTarget, 'open');
		} else {
			adiApp.addClass(e.currentTarget, 'open');
		}

		return false;
	});

	adiApp.addEventListener(document.querySelectorAll('#header .nav_menu .gnb>li li.dep li a'), 'click', function (e) {
		e.stopPropagation();
	});

	adiApp.addEventListener(document.getElementById('filterLayerBtn'), 'click', function (e) {
		if (adiApp.hasClass(e.currentTarget, 'on')) {

			adiApp.removeClass(document.getElementsByTagName('html')[0], 'no_srl');
			adiApp.removeClass(document.getElementById('filter_layer'), 'open');
		} else {
			fnGetOptions();

			adiApp.addClass(document.getElementsByTagName('html')[0], 'no_srl');
			adiApp.addClass(document.getElementById('filter_layer'), 'open');
		}
	});

	adiApp.addEventListener(document.querySelector('#filter_layer .close_x_btn'), 'click', function (e) {
		adiApp.removeClass(document.getElementsByTagName('html')[0], 'no_srl');
		adiApp.removeClass(document.getElementById('filter_layer'), 'open');
		adiApp.removeClass(document.getElementById('filterLayerBtn'), 'open');
	});

	adiApp.addEventListener(document.querySelectorAll('#filter_layer .toggle_arw'), 'click', function (e) {
		if (adiApp.hasClass(e.currentTarget, 'open')) {
			adiApp.removeClass(e.currentTarget, 'open');
		} else {
			adiApp.addClass(e.currentTarget, 'open');
		}
	});

	if ($('div').owlCarousel) {
		$('.viewed_items .item_list .slider').owlCarousel({
			stagePadding: 30,
			margin: 15,
			items: 3,
			merge: true
		});
	}

	adiApp.addEventListener(document.querySelectorAll('#header .nav_search .sch_tab>a'), 'click', function (e) {
		if (adiApp.hasClass(e.currentTarget, 'on')) {
			return false;
		}

		var elemKeywords = document.querySelector('#header .nav_search .keyword_recent');
		var elemSchList = document.querySelector('#header .nav_search .sch_list');

		if (adiApp.getIndex(e.currentTarget) == 0) {
			$('#header .nav_search .keyword_recent').show();
			elemKeywords.style.display = 'block';
			elemSchList.style.display = 'none';
		} else {
			elemSchList.style.display = 'block';
			elemKeywords.style.display = 'none';
		}
		adiApp.removeClass(document.querySelectorAll('#header .nav_search .sch_tab>a'), 'on');
		adiApp.addClass(e.currentTarget, 'on');
	});

	adiApp.addEventListener(document.querySelectorAll('.top_bnn .top_bnn_close'), 'click', function (e) {
		e.currentTarget.parentNode.removeChild(e.currentTarget);

		if (adiApp.hasClass(document.querySelector('#header .btn_slide'), 'open')) {
			document.querySelector('#header .nav_menu').style.height = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
			document.querySelector('#header .nav_menu').style.minHeight = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
		}

		if (adiApp.hasClass(document.querySelector('#header .btn_search'), 'open')) {
			document.querySelector('#header .nav_search').style.height = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
			document.querySelector('#header .nav_search').style.minHeight = window.outerHeight - document.getElementById('header').getBoundingClientRect().bottom + 'px';
		}
	});

	adiApp.bindSelectBox = function (elemId) {
		if (elemId != undefined) {
			adiApp.addEventListener(document.getElementById(elemId), 'change', function (e) {
				var elemTextbox = e.currentTarget.parentNode.nextSibling;
				var selectedText = e.currentTarget.options[e.currentTarget.selectedIndex].text;
				var aElem = adiApp.getSiblings(e.currentTarget, 'a')[0];
				aElem.querySelector('span').innerHTML = selectedText;
			});
		} else {
			adiApp.addEventListener(document.querySelectorAll('.sel_design>select'), 'change', function (e) {
				var elemTextbox = e.currentTarget.parentNode.nextSibling;
				var selectedText = e.currentTarget.options[e.currentTarget.selectedIndex].text;
				var aElem = adiApp.getSiblings(e.currentTarget, 'a.toggle_arw')[0];
				aElem.querySelector('span').innerHTML = selectedText;
			});
		}
	};

	adiApp.openHotspot = function (elemId, obj) {
		if (elemId !== undefined) {
			if (adiApp.hasClass(document.getElementById('.' + elemId), 'active')) {
				return;
			}

			adiApp.removeClass(document.querySelectorAll('.hotspot_layer'), 'active');
			console.log(document.querySelectorAll('.' + elemId));
			adiApp.addClass(document.querySelectorAll('.' + elemId), 'active');
		}
	};

	adiApp.closeHotspot = function (elemId, obj) {
		adiApp.removeClass(document.querySelectorAll('.' + elemId), 'active');
		return false;
	};

	adiApp.bindSelectBox();
	adiApp.bindHotspot = function () {
		var elemsHotspot = [].concat(_toConsumableArray(document.querySelectorAll('.hotspot')));

		elemsHotspot.map(function (node, index) {
			if (node.dataset.hotspotLayer !== undefined) {
				node.addEventListener('click', function (e) {
					adiApp.openHotspot(node.dataset.hotspotLayer, e.currentTarget);

					adiApp.addEventListener(document.querySelectorAll('.' + node.dataset.hotspotLayer + ' .close'), 'click', function (e) {
						adiApp.closeHotspot(node.dataset.hotspotLayer, e.currentTarget);
					});
				});
			}
		});
	};

	(function () {
		var offsetTop = void 0;
		var offsetBottom = void 0;
		var headerElem = document.getElementById('header');
		var containerElem = document.getElementById('container');
		var elemTopbnn = document.getElementsByClassName('top_bnn');
		var prevScroll = document.documentElement.scrollTop || document.body.scrollTop;
		var topBnnH = 0;

		if (elemTopbnn && elemTopbnn.length > 1) {
			elemTopbnn.map(function (v, i) {
				var imgsPath = [];
				var imgSrc = function imgSrc(index) {
					var iSrc = '';
					if (v.getElementsByTagName('img').length > 0) {
						var image = new Image();
						image.onload = function () {
							topBnnH += window.innerWidth * (_this.height / _this.width);
						};
						image.src = v.getElementsByTagName('img')[0].getAttribute('src');
					}
				};
			});
		}

		var headerSticky = function headerSticky() {

			if (adiApp.hasClass(document.getElementById('header'), 'open-menu')) {
				requestAnimationFrame(headerSticky);
				return;
			}

			var sTop = document.documentElement.scrollTop || document.body.scrollTop;
			offsetTop = 61 + topBnnH;
			if (sTop < offsetTop - 50) {
				adiApp.addClass(headerElem, 'unfixed hide');
				containerElem.style.marginTop = '0';
				prevScroll = sTop;
			} else if (sTop > offsetTop) {
				adiApp.removeClass(headerElem, 'unfixed');
				containerElem.style.marginTop = '61px';
				offsetTop = 61 + topBnnH;

				if (prevScroll - sTop > 3) {
					adiApp.removeClass(headerElem, 'hide');
				} else if (prevScroll - sTop < -3) {
					adiApp.addClass(headerElem, 'hide');
				}

				offsetTop = headerElem.getBoundingClientRect().top;
				offsetBottom = headerElem.getBoundingClientRect().bottom;

				prevScroll = sTop;
			}

			requestAnimationFrame(headerSticky);
		};

		headerSticky();
	})();

	window.openModalVideoViewer = function (ytbId, width, height) {
		var popElem = void 0;
		var htmlString = '<div id="video-modal-popup" style="width:100%;height:100%;position:fixed;top:0;left:0;box-sizing:border-box;-webkit-box-sizing:border-box;z-index:301;opacity:0;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;">';
		htmlString += '	<div class="overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;box-sizing:border-box;-webkit-box-sizing:border-box;background:rgba(0,0,0,0.8);"></div>';
		htmlString += '	<div class="popup" style="width:80%;height:80%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);box-sizing:border-box;-webkit-box-sizing:border-box;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;opacity:1">';
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