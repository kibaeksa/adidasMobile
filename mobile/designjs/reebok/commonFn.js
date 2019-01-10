
/**
* 1. 이    름 : fn_trim
* 2. 설    명 : 값의 앞뒤 공백을 제거하고 반환한다.
* 3. 인    자 : String
* 4. 반 환 값 : String - 좌/우측 공백이 제거된 문자열
* 5. 사 용 예 : alert("["+fn_trim("    좌/우 공백 모두 제거됨     ")+"]");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*/
function fn_trim(a) {
	if(fn_isObject(a) && !fn_isArray(a) && !fn_isFunction(a)) {
		return a.value.replace(/(^\s*)|(\s*$)/g, "");
	} else if(fn_isString(a) || fn_isNumber(a)) {
		return a.replace(/(^\s*)|(\s*$)/g, "");
	} else {
		return "";
	}
}

/**
 * 1. 이    름 : fn_isObject
 * 2. 설    명 : 객체일 경우 true값을 반환한다. 문자열이나, 숫자, 배열, 함수,
								 Boolean, null 이나 undefined인 경우 false를 반환한다.
 * 3. 인    자 : Object
 * 4. 반 환 값 : Boolean true  - 객체일 경우
 *               Boolean false  - 문자열, 숫자, 함수, Boolean, null,
																	undefined일 경우
 * 5. 사 용 예 : alert("배열은 객체가 아니다. : " + fn_isObject(new Array()));
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 */
function fn_isObject(a) {
	return (typeof a == 'object' && !!a && !fn_isFunction(a));
}


/**
* 1. 이    름 : fn_isFunction
* 2. 설    명 : 함수인지 확인하고 함수이면 true값을 반환한다.
*               IE 7, firefox 3.1, chrome 동작 확인
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - 함수이면
*               Boolean false  - 함수가 아니면
* 5. 사 용 예 : alert("fn_isEmpty()는 함수이다 " + fn_isFunction(fn_isEmpty));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*/
function fn_isFunction(a) {
	return typeof a == 'function';
}

/**
* 1. 이    름 : fn_isNull
* 2. 설    명 : null 값인 경우 true값을 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - null값이면
*               Boolean false  - null값이 아니면
* 5. 사 용 예 : alert("널 값이다 : " + fn_isNull(null));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function fn_isNull(a) {
	return typeof a == 'object' && !a;
}


/**
* 1. 이    름 : fn_isNumber
* 2. 설    명 : 유한수일 경우 true를 반환한다. NaN이나 무한수일 경우는 false를
								 반환한다. 또한, 숫자로 변환 가능한 문자열이라 할지라도 false값을
								 반환한다.
 * 3. 인    자 : Object
 * 4. 반 환 값 : Boolean true  - 숫자이면
 *               Boolean false  - 숫자가 아니면
 * 5. 사 용 예 : alert("숫자이다 : " + fn_isNumber(0123));
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
function fn_isNumber(a) {
	return typeof a == 'number' && isFinite(a);
}


/**
* 1. 이    름 : fn_isString
* 2. 설    명 : 문자열일 경우 true를 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - 문자열이면
*               Boolean false  - 문자열이이 아니면
* 5. 사 용 예 : alert("\"1234\"는 문자열이다 :" + fn_isString("1234"));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function fn_isString(a) {
	return typeof a == 'string';
}

/**
* 1. 이    름 : fn_numbersonly
* 2. 설    명 : 키이벤트 숫자만 입력받기
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true   - 숫자이면
*               Boolean false  - 숫자가 아니면
* 5. 사 용 예 : 
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2013. 05. 28    안효진     최초 등록
*/
function fn_numbersonly(e, decimal) { 
    var key; 
    var keychar; 

    if (window.event) { 
       // IE에서 이벤트를 확인하기 위한 설정 
        key = window.event.keyCode; 
    } else if (e) { 
      // FireFox에서 이벤트를 확인하기 위한 설정 
        key = e.which; 
    } else { 
        return true; 
    } 

    keychar = String.fromCharCode(key); 
    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) 
            || (key == 27)) { 
        return true; 
    } else if ((("0123456789").indexOf(keychar) > -1)) { 
        return true; 
    } else if (decimal && (keychar == ".")) { 
        return true; 
    } else 
        return false; 
}


/**
* 1. 이    름 : fn_serializeObject
* 2. 설    명 : 폼의 object Array를 json object로 변환
* 3. 인    자 : Object
* 4. 반 환 값 : Object
* 5. 사 용 예 : 
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2013. 05. 28    안효진     최초 등록
*/
function fn_serializeObject(a){
	var obj = {};
	jQuery.each(a,function() {
		if(obj[this.name]) {
			if (!obj[this.name].push) {
				obj[this.name] = [obj[this.name]];
			}
			obj[this.name].push(this.value || '');
		} else {
			obj[this.name] = this.value || '';
		}
	});
	return obj;
}

/**
* 1. 이    름 : fn_setCookie
* 2. 설    명 : 쿠키설정
* 3. 인    자 : Object
* 4. 반 환 값 : Object
* 5. 사 용 예 : 
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2013. ??. ??    안효진     최초 등록
*/
function fn_setCookie(name, value, expiredays){
  var todayDate = new Date();
  todayDate.setDate( todayDate.getDate() + expiredays );
  document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

/**
* 1. 이    름 : fn_getCookie
* 2. 설    명 : 쿠키조회
* 3. 인    자 : Object
* 4. 반 환 값 : Object
* 5. 사 용 예 : 
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2013. ??. ??    안효진     최초 등록
*/
function fn_getCookie(name){
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return '';
}

function openLayer(oid){
	setTimeout(function(){
		jQuery('.layer_bg').css({
			height:jQuery(document).height()+'px',
			opacity:0.6		
		});
		jQuery('.layer_bg').fadeIn();		
	},500);
	
	var o=jQuery('#'+oid);
    setTimeout(function(){
    	o.fadeIn();
    },500);    
}

//Focus 이동
function moveFocus(num,fromform,toform) {
	var str = fromform.value.length;
	if(str == num) {
		toform.focus();
	}
}

/**
 * input type=radio 또는 checkbox 의 value 값을 가져온다.
 * @ param obj : radio 또는 checkbox Object
 */
function getRadiosValue(obj) {
    if(typeof(obj.length) == "undefined"){
        if(obj.checked == true){
            return obj.value;
        }else{
        	if(typeof(obj.uncheckvalue) != "undefined"){
        		return obj.uncheckvalue;
        	}
        }
    }else{
    	for(i = 0; i < obj.length; i++) {
    		if(obj[i].checked == true)
    			return obj[i].value;
    	}
    	return "";
    }
    return "";
}

/**
 * input type=radio 또는 checkbox 의 value 값을 가져온다.
 * @ param obj : radio 또는 checkbox Object
 */
function getCheckboxValue(obj) {
    if(typeof(obj.length) == "undefined"){
        if(obj.checked == true){
            return obj.value;
        }else{
        	if(typeof(obj.uncheckvalue) != "undefined"){
        		return obj.uncheckvalue;
        	}
        }
    }else{
    	if(obj.length == 0) {
    		return "";
    	} else {
    		var rstVal = "";
        	for(i = 0; i < obj.length; i++) {
        		if(obj[i].checked == true) {
        			rstVal += obj[i].value + ",";
        		}
        	}   
        	if(rstVal != "") {
        		rstVal = rstVal.substring(0, rstVal.length-1);
        	}
        	return rstVal;
    	}
    }
    return "";
}


////////////////////////////////////////////////////////////////////////////////////
//작성자 : indigo
//작성일 : 2007.01.21
//함수명 : fn_checkString(검색어 특수문자방지)
//설  명 : 불필요한 html태그공격에 대비하기위해서...급조


function fn_CheckType(s,spc) {
    var i;
    for(i=0; i<s.length; i++) {
        if (spc.indexOf( s.substring(i, i+1)) > -1) {
            return false;
        }
    }
    return true;
}
function fn_checkString(sInput) {
    var _NoInputTag = "~!#$%&*+@^`'{|}><[];:,\\"+"\n"+"\r";
    var sInput;
    if (!fn_CheckType(sInput,_NoInputTag)){
        alert("HTML태그나 부적절한 특수문자는 지원하지 않습니다.올바른 검색어를 입력해주세요.");
        return false;
    }
    return true;
}

function fn_checkStringCom(sInput, sMsgStr) {
    var _NoInputTag = "/#$&`'{|}><;:\\\(\)";
    var sInput;
    if (!fn_CheckType(sInput,_NoInputTag)){
        if(typeof(sMsgStr) == "undefined") {
            alert("HTML태그나 부적절한 특수문자는 지원하지 않습니다.");
        } else {
            alert(sMsgStr);
        }
        return false;
    }
    return true;
}

function fn_checkStringSearch(sInput, sMsgStr) {
    var _NoInputTag = "#$&`'{|}<;:\\";
    var sInput;
    if (!fn_CheckType(sInput,_NoInputTag)){
        if(typeof(sMsgStr) == "undefined") {
            alert("HTML태그나 부적절한 특수문자는 지원하지 않습니다.");
        } else {
            alert(sMsgStr);
        }
        return false;
    }
    return true;
}

////////////////////////////////////////////////////////////////////////////////////
//작성자 : indigo
//작성일 : 2009.04.14
//함수명 : fn_clearTagString(검색어 특수문자제거)
//설  명 : 불필요한 html태그공격에 대비하기위해서...급조

function fn_clearTagString(sInput) {
    //var limit_char = /[~!@\#$%%^&*\\=+|:;?"<,.>']/;
    var limit_char = /[~!@\#$%%^&*\\=+|:;?"<.>]/;
    var tmp_str="";
    if(sInput.length > 0){
        for(var i=0; i<sInput.length; i++) {
            var data = sInput.charAt(i);
            tmp_str+=data.replace(limit_char,"");
        }
    }

    return tmp_str;
}

function fn_clearTagStringCom(sInput) {
    var limit_char = /[\/\#$&\\|:;"<>'`\)\({}]/;
    var tmp_str="";
    if(sInput.length > 0){
        for(var i=0; i<sInput.length; i++) {
            var data = sInput.charAt(i);
            tmp_str+=data.replace(limit_char,"");
        }
    }

    return tmp_str;
}

function getCookie(cookieName) {

    var search = cookieName + "=";
    var cookie = document.cookie;

    // 현재 쿠키가 존재할 경우
    if (cookie.length > 0) {
        // 해당 쿠키명이 존재하는지 검색한 후 존재하면 위치를 리턴.
        startIndex = cookie.indexOf(cookieName);

        // 만약 존재한다면
        if (startIndex != -1) {

            // 값을 얻어내기 위해 시작 인덱스 조절
            startIndex += cookieName.length;

            // 값을 얻어내기 위해 종료 인덱스 추출
            endIndex = cookie.indexOf(";", startIndex);

            // 만약 종료 인덱스를 못찾게 되면 쿠키 전체길이로 설정
            if (endIndex == -1) endIndex = cookie.length;

            // 쿠키값을 추출하여 리턴(한글 깨짐방지를 위해 decodeURIComponent)
            return decodeURIComponent(cookie.substring(startIndex + 1, endIndex)).replaceAll("\\+", " ");
        }else {
            // 쿠키 내에 해당 쿠키가 존재하지 않을 경우
            return false;
        }
    }else {
        // 쿠키 자체가 없을 경우
        return false;
    }
}

function setCookie (name, value, expires) {
	document.cookie = name + "=" + encodeURI(value) + "; path=/; domain=.adidas.co.kr; expires=" + expires.toGMTString() + ";";
}

/**
 * <pre>
 * 인수로 받은 object가 배열인지 판단 한다.
 * - null이면 0을 리턴
 * - 배열이 아니면 1을 리턴
 * - 배열이라면 배열 길이를 리턴
 * </pre>
 * @param obj 검사할 form.element
 * @return number (0, 1, obj.length)
 */
 isArray = function(obj){
	if(obj == null){
		return 0;
	}else {
		//alert(obj.type);
		if(obj.type == 'select-one'){
			return 1;
		}else if(obj.type == 'select-multiple'){
			return 1;
		}else{
			if(obj.length > 1){
				return obj.length;
			}else {
				return 1;
			}
		}
	}
 }
 
/*--------------------------------------------------------------------------------*\
 * return query string.
\*--------------------------------------------------------------------------------*/
function getParameterByName(name, url) {
	var rex = new RegExp("[?&]"+ ((name||'').replace(/[\[\]]/g, "\\$&")) +"(=([^&#]*)|&|#|$)"),
    	rst = rex.exec((url || window.location.href));
	if (!rst) return '';
	if (!rst[2]) return '';
	return decodeURIComponent(rst[2].replace(/\+/g, ' '));
}

/*--------------------------------------------------------------------------------*\
 * StringBuilder object
\*--------------------------------------------------------------------------------*/
var StringBuilder = function(str) { 
     this.buffer = [];
     this.append(str);
};
StringBuilder.prototype = {
     append : function(str) { 
     	if (str) this.buffer.push(str); 
     	return this;
     },
     clear : function() {
     	this.buffer.length = 0;
     	return this;
     },
     toString : function(s) { 
         return this.buffer.join(s || ""); 
     }
 };

/*--------------------------------------------------------------------------------*\
 * Cookie object
\*--------------------------------------------------------------------------------*/
var oCookie = function(expiresDay) {
     var expdate = (typeof expiresDay == 'number') ? expiresDay : 1;    
     return {
         get : function(cName) {
             cName = cName + '=';
             var cookieData = document.cookie;
             var start = cookieData.indexOf(cName);
             var cValue = '';
             if(start != -1){
                  start += cName.length;
                  var end = cookieData.indexOf(';', start);
                  if(end == -1)end = cookieData.length;
                  cValue = cookieData.substring(start, end);
             }
             return unescape(cValue);        
         },
         set : function(cName, cValue, expireDays) {
             this.setOwner(cName, cValue, ((typeof expireDays == 'number' ? expireDays : expdate) * 24 * 60 * 60 * 1000))
 			return this;
         },
         setOwner : function(cName, cValue, expire) {             
             var expdate = new Date();
             expdate.setTime(expdate.getTime() + (typeof expire == 'number' ? expire : (expdate * 24 * 60 * 60 * 1000)));
             document.cookie = cName+"=" + cValue + "; path=/; domain="+document.domain+"; expires=" + expdate.toGMTString();
         },
         remove : function(name) {
             return this.set(name, '', -1);
         },
         getItem : function(name) {
             return this.get(name);
         },
         setItem : function(name, value) {
             this.set(name, value);
         },
         removeItem : function(name) {
             this.remove(name);
         },
 		clear : function() {
 			return;
 		}
     };
 };     

/*--------------------------------------------------------------------------------*\
 * Cache object
\*--------------------------------------------------------------------------------*/
var oCache = function(type, span/* integer */, format/* s, m, h, d, M, y, w */) {
     var _cacheType	= (typeof type != 'string' || type == '') ? 'cache' : type; // cache || local || session
     var _span		= (typeof span == 'number') ? span : 0;
     var _format		= (typeof format == 'string') ? format : '';
     var _storage	= null;
     var _expires	= getCacheExpires(_span, _format);
     var _default	= {
             set : function() { return;},
             get : function() { return '';},
             isStatus : function() { return false;},
             remove : function() { return; },
 			clear : function() { return; }
         };
     
     
     if (_cacheType == 'session') {
         if (!window.sessionStorage) return _default;                 
         _storage= window.sessionStorage;
         _expires= (_span != 0) ? _expires : getCacheExpires(12, 'h'); // 12 hours
     } 
     else if (_cacheType == 'cache') {
         if (!window.sessionStorage) return _default;                 
         _storage= window.sessionStorage;
         _expires= (_span != 0) ? _expires : getCacheExpires(5, 'm'); // 5 minutes
     }
     else if (_cacheType == 'local') {
         if (!window.localStorage) return _default;        
         _storage = window.localStorage;
         _expires= (_span != 0) ? _expires : getCacheExpires(7, 'd'); // 7 days
     }
     else if (_cacheType == 'cookie') {
         _storage = oCookie(1);
         _expires= (_span != 0) ? _expires : getCacheExpires(1, 'd'); // 1 days
     }
     else {
         return _default;
     }
     
     function getCacheExpires(s, f) {
         var exp = 0;
         switch(f) {
             case 's' : exp = s;					 break;
             case 'm' : exp = s * 60;				 break;
             case 'h' : exp = s * 60 * 60;			 break;
             case 'd' : exp = s * 60 * 60 * 24;		 break;
             case 'w' : exp = s * 60 * 60 * 24 * 7;	 break;
             case 'M' : exp = s * 60 * 60 * 24 * 30; break;
             case 'y' : exp = s * 60 * 60 * 24 * 365;break;
         }
         return exp;
     }
     
     return {
         type    : _cacheType,
         storage : _storage,
         expires : _expires, 
         set : function(name, value, expires) {
             if (typeof name != 'string' || name == '') return;
             if (value == 'undefined') return;            
             if (expires=='undefined' || typeof expires != 'number') { expires = this.expires; }
     
             var date = new Date();
             var schedule= Math.round((date.setSeconds(date.getSeconds()+expires))/1000);            
     
             try {
	             this.storage.setItem(this.type +'@'+ name, value);
	             this.storage.setItem(this.type +'@time_' + name, schedule);
             } catch(e) {
            	 // security mode
             }
             return this;
         },
         get : function(name) {            
             if (this.isStatus(name)) {
                 return this.storage.getItem(this.type +'@'+ name);
             }
             else {
                 return '';
             }
         },
         isStatus : function(name) {
             if (this.storage.getItem(this.type +'@'+ name) == null || this.storage.getItem(this.type +'@'+ name) == '')
                 return false;
             
             var date = new Date();
             var current = Math.round(+date/1000);
     
             // Get Schedule
             var stored_time = this.storage.getItem(this.type +'@time_' + name);
             if (stored_time=='undefined' || stored_time=='null') { stored_time = 0; }
     
             // Expired
             if (stored_time < current) {    
                 this.remove(name);
                 return false;
             } else {
                 return true;
             }
         },
         remove : function(name) {            
             this.storage.removeItem(this.type +'@'+ name);
             this.storage.removeItem(this.type +'@time_' + name);
         },
 		 clear : function() {
 			for (var item in this.storage) {
 				if (String(item).startWith(this.type)) {
 					this.storage.removeItem(item);
 				}
 			}
 			//this.storage.clear();
 		}
     };
 };
 