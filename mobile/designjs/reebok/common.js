/*******************************************************************************
 * 일반적인 자바 스크립트의 기초가 되는 스크립트 모음
 *******************************************************************************
 * 함수 목록 :
 * cfn_isObject(object) - 객체 여부를 반환
 * cfn_isArray(array) - 배열 여부를 반환
 * cfn_isBoolean(boolean) - 부울대수 여부를 반환
 * cfn_isEmpty(object) - 빈 값 여부를 반환
 * cfn_isFunction(function) - 함수 여부를 반환
 * cfn_isNull(object) - Null 여부를 반환
 * cfn_isNumber(number) - 수 여부를 반환
 * cfn_isString(string) - 문자열 여부를 반환
 * cfn_isUndefined(object) - Undefined여부를 반환
 * cfn_isNumberString(string) - 수로 변경 가능한 문자여부를 반환
 * cfn_isDate(object) - Date 객체 여부를 바환
 * cfn_trim(string) - 좌우 공백을 제거
 *
 ******************************************************************************
 * 문자열을 처리하는 스크립트 모음(String 객체의 프로퍼티로 실행)
 *******************************************************************************
 * 함수 목록 :
 *  trim                좌/우 공백 제거
 *  ltrim               좌측 공백 제거
 *  rtrim               우측 공백 제거
 *  isEmpty             빈값 여부
 *  parseInt            integer로 벼환
 *  toDate              Date 형으로 변환
 *  byteLength          byte length 반환
 *  getByteCutString	byte 길이만큼의 문자값 반환
 *  getNumber           숫만 반환
 *  getFigure           숫자만 반환
 *  getAlphabet         영자만 반환
 *  getAlphaNum         영자와 숫자만 반환
 *  meta                정규식 특수문자 escape
 *  removeRegExpChar    인수로 입력받은 문자를 제거하고 반환
 *  isFigure            숫자로인지 여부
 *  isAlphabet          알파벳인지 여부
 *  isAlphaNum          알파벳, 숫자로만 구성 여부
 *  isNumber            수인지 여부
 *  isUserId            알파벳으로 시작하고 알파벳, 숫자 여부
 *  isDate              날자로 변환 가능한지 체크
 *  lpad                좌측 padding
 *  rpad                우측 padding
 *  removeComma         , 콤마 제거
 *  replaceAll          문자열 교환
 *
 *******************************************************************************
 * 날짜를 입력받아 처리하는 스크립트 모음(Date 객체의 프로퍼티로 실행)
 *******************************************************************************
 * 함수 목록 :
 * getFormattedString(string) - 지정된 포멧으로 날짜를 반환한다.
 * addDate(number[, number[, number[, number[, number[, number[, number[, number]]]]]]])
 *      - 현재 날자에서 입력받은 시간을 더한 날자를 반환
 * addDay(number) - 현재 날자에서 입력받은 일을 더한 날자를 반환
 * addMonth(number) - 현재 날자에서 입력받은 월을 더한 날자를 반환
 * addYear(number) - 현재 날자에서 입력받은 년을 더한 날자를 반환
 * compareTo(date[, string]) - 날자를 비교할 날자와 비교한다.
 * getDateGap(date) - 대상 날자와의 차이 일수를 계산한다.
 *
 *******************************************************************************
 * 숫자를 입력받아 처리하는 스크립트 모음
 *******************************************************************************
 * 함수 목록 :
 * toCurrency(obj) - 입력란의 값의 3자리 마다 콤마를 찍는다.
 *
 * *****************************************************************************
 * cfn_setFldToCurrencyFld(strId) - 입력란을 통화 필드로 세팅. 키 입력이벤트를 받아서 3자리마다
 *               자동으로 콤마를 추가한다.
 * cfn_setFldToNumberFld(strId) - 입력란을 수 필드로 세팅. 0123456789.-
 * cfn_setFldToFigureFld(strId) - 입력란을 숫자 필드로 세팅 0123456789
 * cfn_setTelFld(strId) -전화번호 포메팅, 해당 입력란에 키 입력이 있을 때마다 전화
 *      번호 포메팅
 * cfn_setDateFld(strId) -날짜 포메팅, 해당 입력란에 키 입력이 있을 때마다 날짜 포메팅(YYYY-MM-DD)
 * cfn_setFormattedFld(strId, pattern, seperator) - 숫자를 주어진 포멧에 맞게 해당
 * 		입력란에 키 입력이 있을 때마다 포메팅
 * cfn_setCodeFld(strId) -영문자와 숫자로만 이루어진 필드로 세팅
 * cfn_setUpperCodeFld(strId)-영문자(대문자)와 숫자로만 이루어진 필드로 세팅
 * cfn_setEngFld(strId) -영문자로만 이루어진 필드로 세팅
 * cfn_setUpperEngFld(strId) -영문자(대문자)로만 이루어진 필드로 세팅
 * cfn_setAllCheckbox(strId, strName) - 전체 체크 체크박스를 클릭시 모든 대상
 *      체크박스의 값을 변경한다.
 * cfn_isOnlyOneChecked(str) - 대상 체크박스 중 하나의 값만 체크 되었는지 체크한다.
 * cfn_clearForm(str) - 폼 내의 입력값들을 초기화한다.
 * cfn_openPop(url, target, width, height) - 팝업 창을 연다. url만 입력해도 됨.
 * cfn_markRow(object) - 테이블에선 선택한 row의 스타일을 변경한다.
 * cfn_fckModeSwitch(name, key) - FCK 에디터의 편집 모드를 변경한다. 소스 <->WYSWYG
 * cfn_startLoading() - 화면에 진행중임을 나타내는 레이어를 띄운다.
 * cfn_endLoading() - 화면에서 진행중임을 나타내는 레이어를 지운다.
 * cfn_popReturn(contGubun, passiveId, keyNm1, keyVal1) - 신고하기 팝업을 연다.(글로벌물류)
 * cfn_avoidBackspaceInReadonly(evt) - 읽기전용인 입력란에서 백스페이스를 눌렀을때 히스토리백 방지.
 * cfn_checkString(value)-특수문자입력체크)
 * cfn_clearTagString(value)-특수문자포함시 특수문자만제거한 나머지만리턴)
 * cfn_isValidDate(Object) - 입력한 날짜가 형식에 맞는지 체크한다.
 * cfn_maxLen(object,maxValue) - onKey이벤트시 체크    = 오브젝트와 제한길이(byte값)을 넣어준다.
 * cfn_getByte(Object) - Object.value의 byte값을리턴
 ******************************************************************************/

/**
 * 1. 이    름 : cfn_isObject
 * 2. 설    명 : 객체일 경우 true값을 반환한다. 문자열이나, 숫자, 배열, 함수,
								 Boolean, null 이나 undefined인 경우 false를 반환한다.
 * 3. 인    자 : Object
 * 4. 반 환 값 : Boolean true  - 객체일 경우
 *               Boolean false  - 문자열, 숫자, 함수, Boolean, null,
																	undefined일 경우
 * 5. 사 용 예 : alert("배열은 객체가 아니다. : " + cfn_isObject(new Array()));
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
function cfn_isObject(a) {
	return (typeof a == 'object' && !!a && !cfn_isFunction(a));
}


/**
* 1. 이    름 : cfn_isArray
* 2. 설    명 : Array 생성자나 [] 배열 문장으로 만든 배열인지 여부를 체크하고
*               배열일 경우 true값을 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean True  - 배열이면
*               Boolean False  - 배열이 아니면
* 5. 사 용 예 : var arr = new Array();
*               alert("arr은 배열이다 : " + cfn_isArray(arr));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isArray(a) {
	return Object.prototype.toString.call(a) == '[object Array]';
}


/**
* 1. 이    름 : cfn_isBoolean
* 2. 설    명 : Boolean 값 중 true 나 false 인지 체크한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - false 나 true 중 하나인 경우
*               Boolean false  - false 나 true 가 아닌 값인 경우
* 5. 사 용 예 : alert("false는 Boolean값이다 : "+cfn_isBoolean(false));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isBoolean(a) {
	return typeof a == 'boolean';
}


/**
* 1. 이    름 : cfn_isEmpty
* 2. 설    명 : 셀만한 것이 없는 object 이거나 array 이거나 함수일 경우
								 true값을 반환한다. 선언이 되지 않았거나 생성 되지 않았으면 true를 반환
 * 3. 인    자 : Object
 * 4. 반 환 값 : Boolean true  - 비었다.
 *               Boolean false  - 안 비었다.
 * 5. 사 용 예 : alert("배열을 Array 생성자를 사용해 새로 생성하면 비었다 : " +cfn_isEmpty(new Array()));
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
function cfn_isEmpty(o) {
	if(cfn_isObject(o)) {
		for (var i in o) {
			return false;
		}
	} else {
		if(cfn_isUndefined(o)) {
			return true;
		} else if(cfn_isNull(o)) {
			return true;
		} else if(cfn_trim(o) != "") {
			return false;
		}
	}
	return true;
}


/**
* 1. 이    름 : cfn_isFunction
* 2. 설    명 : 함수인지 확인하고 함수이면 true값을 반환한다.
*               IE 7, firefox 3.1, chrome 동작 확인
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - 함수이면
*               Boolean false  - 함수가 아니면
* 5. 사 용 예 : alert("cfn_isEmpty()는 함수이다 " + cfn_isFunction(cfn_isEmpty));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isFunction(a) {
	return typeof a == 'function';
}


/**
* 1. 이    름 : cfn_isNull
* 2. 설    명 : null 값인 경우 true값을 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - null값이면
*               Boolean false  - null값이 아니면
* 5. 사 용 예 : alert("널 값이다 : " + cfn_isNull(null));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isNull(a) {
	return typeof a == 'object' && !a;
}


/**
* 1. 이    름 : cfn_isNumber
* 2. 설    명 : 유한수일 경우 true를 반환한다. NaN이나 무한수일 경우는 false를
								 반환한다. 또한, 숫자로 변환 가능한 문자열이라 할지라도 false값을
								 반환한다.
 * 3. 인    자 : Object
 * 4. 반 환 값 : Boolean true  - 숫자이면
 *               Boolean false  - 숫자가 아니면
 * 5. 사 용 예 : alert("숫자이다 : " + cfn_isNumber(0123));
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
function cfn_isNumber(a) {
	return typeof a == 'number' && isFinite(a);
}


/**
* 1. 이    름 : cfn_isString
* 2. 설    명 : 문자열일 경우 true를 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - 문자열이면
*               Boolean false  - 문자열이이 아니면
* 5. 사 용 예 : alert("\"1234\"는 문자열이다 :" + cfn_isString("1234"));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isString(a) {
	return typeof a == 'string';
}


/**
* 1. 이    름 : cfn_isUndefined
* 2. 설    명 : undefined 인 경우 true를 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - undefined이면
*               Boolean false  - undefined가 아니면
* 5. 사 용 예 : var a;
*               alert("a는 undefined이다 : " + cfn_isUndefined(a));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isUndefined(a) {
	return typeof a == 'undefined';
}


/**
* 1. 이    름 : cfn_isNumberString
* 2. 설    명 : 숫자이거나 숫자로 변환 가능한 문자열인 경우 true를 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - 숫자이거나 숫자로 변환 가능한 문자열이면
*               Boolean false  - 숫자이거나 숫자로 변환 가능한 문자열이 아니면
* 5. 사 용 예 : var a = "1234";
*               alert("a는 숫자로 변환가능한 문자열이다 : " + cfn_isNumberString(a));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isNumberString(a) {
	if(cfn_isNumber(a)) {
		return true;
	} else {
		return !isNaN(a);
	}
}


/**
* 1. 이    름 : cfn_isDate
* 2. 설    명 : Date 객체인 경우 true를 반환한다.
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean true  - Date 객체이면
*               Boolean false  - Date 객체가 아니면
* 5. 사 용 예 : alert(cfn_isDate(new Date()));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_isDate(a) {

	if(cfn_isObject(a)) {
		if(a.getDate() > -1) {
			return true;
		}
	} else if(a.getFigure().toDate() > -1) {
		return true;
	}

	return false;
}


/**
* 1. 이    름 : cfn_trim
* 2. 설    명 : 값의 앞뒤 공백을 제거하고 반환한다.
* 3. 인    자 : String
* 4. 반 환 값 : String - 좌/우측 공백이 제거된 문자열
* 5. 사 용 예 : alert("["+cfn_trim("    좌/우 공백 모두 제거됨     ")+"]");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_trim(a) {
	if(cfn_isObject(a) && !cfn_isArray(a) && !cfn_isFunction(a)) {
		return a.value.replace(/(^\s*)|(\s*$)/g, "");
	} else if(cfn_isString(a) || cfn_isNumber(a)) {
		return a.replace(/(^\s*)|(\s*$)/g, "");
	} else {
		return "";
	}
}

/**
* 1. 이    름 : cfn_isEditKey
* 2. 설    명 : 특수키나 편집키인지 확인
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : ... onkeypress="cfn_isEditKey()" ...
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 05. 22    이민재     최초 등록
*/
function cfn_isEditKey(ev) {
	if(cfn_isUndefined(ev) || cfn_isNull(ev)) {
		ev = event;
	}

	var key = ev.keyCode;
	if(	key == 8 ||						// backspace
			key == 46 || 					// delete
			(key >= 35 && key <= 40) ||		// home, end, 방향키
			key == 9 ||						// tab
			key == 13 ||					// return || enter
			key == 16 ||					// shift
			key ==  17 ||					// ctrl
			key == 18 ||					// alt
			(key >= 112 && key <= 123) ||	// function key
			key == 144 ||					// num lock
			key == 20						// caps lock
	) {
		return true;
	}
	return false;
}

/**
* 1. 이    름 : cfn_onlyFigureKey
* 2. 설    명 : 숫자키만 입력 받는다.
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : ... onkeypress="cfn_onlyFigureKey()" ...
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 02. 26    이민재     최초 등록
*      2009. 05. 22    이민재     함수명 수정
*/
function cfn_onlyFigureKey(ev) {
	if(cfn_isUndefined(ev) || cfn_isNull(ev)) {
		ev = event;
	}

	var keyCode = ev.keyCode;

	if(keyCode < 48 || (keyCode > 57 && keyCode < 96) || keyCode > 105) {
		ev.returnValue = false;
		Event.stop(ev);
	}
}

/**
* 1. 이    름 : cfn_onlyNumberKey
* 2. 설    명 : 숫자키와 -키만 입력 받는다.
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : ... onkeypress="cfn_onlyNumberKey()" ...
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 02. 26    이민재     최초 등록
*      2009. 05. 22    이민재     함수명 수정
*/
function cfn_onlyNumberKey(ev) {
	if(cfn_isUndefined(ev) || cfn_isNull(ev)) {
		ev = event;
	}

	var keyCode = ev.keyCode;

	if(keyCode < 48 || (keyCode > 57 && keyCode < 96) || keyCode > 105) {
		if(keyCode != 109 && keyCode != 189 && keyCode != 110 && keyCode != 190) {
			ev.returnValue=false;
			Event.stop(ev);
		}
	}
}

/**
* 1. 이    름 : cfn_onlyAlphaNumKey
* 2. 설    명 : 영문자키와 숫자키만 입력 받는다.
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : ... onkeypress="cfn_onlyAlphaNumKey()" ...
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 05. 22    이민재     최초 등록
*/
function cfn_onlyAlphaNumKey(ev) {
	if(cfn_isUndefined(ev) || cfn_isNull(ev)) {
		ev = event;
	}

	var keyCode = ev.keyCode;

	if(keyCode == 229 || keyCode < 48 || (keyCode > 57 && keyCode < 65) || (keyCode > 90 && keyCode < 96) || keyCode > 105) {
		ev.returnValue = false;
		Event.stop(ev);
	}
}

/**
* 1. 이    름 : cfn_onlyAlphabetKey
* 2. 설    명 : 영문자키만 입력 받는다.
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : ... onkeypress="cfn_onlyAlphabetKey()" ...
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 05. 22    이민재     최초 등록
*/
function cfn_onlyAlphabetKey(ev) {
	if(cfn_isUndefined(ev) || cfn_isNull(ev)) {
		ev = event;
	}

	var keyCode = ev.keyCode;

	if(keyCode < 65 || keyCode > 90) {
		ev.returnValue = false;
		Event.stop(ev);
	}
}

/*******************************************************************************
* 문자열을 처리하는 스크립트 모음
*******************************************************************************
*
* 함수 목록 :
*  trim                좌/우 공백 제거
*  ltrim               좌측 공백 제거
*  rtrim               우측 공백 제거
*  isEmpty             빈값 여부
*  parseInt            integer로 벼환
*  toDate              Date 형으로 변환
*  byteLength          byte length 반환
*  getNumber           숫만 반환
*  getFigure           숫자만 반환
*  meta                정규식 특수문자 escape
*  removeRegExpChar    인수로 입력받은 문자를 제거하고 반환
*  isFigure            숫자로인지 여부
*  isAlphabet          알파벳인지 여부
*  isAlphaNum          알파벳, 숫자로만 구성 여부
*  isNumber            수인지 여부
*  isUserId            알파벳으로 시작하고 알파벳, 숫자 여부
*  isDate              날자로 변환 가능한지 체크
*  lpad                좌측 padding
*  rpad                우측 padding
*  removeComma         , 콤마 제거
*  replaceAll          문자열 교환
*
******************************************************************************/



/**
 * 1. 이    름 : trim
 * 2. 설    명 : 문자의 좌/우측 공백을 제거한다.
 * 3. 인    자 :
 * 4. 반 환 값 : String - 좌/우측 공백이 제거된 문자열
 * 5. 사 용 예 : alert("["+"    좌/우 공백 모두 제거됨     ".trim()+"]");
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

/**
* 1. 이    름 : ltrim
* 2. 설    명 : 문자의 좌측 공백을 제거한다.
* 3. 인    자 :
* 4. 반 환 값 : String - 좌측 공백이 제거된 문자열
* 5. 사 용 예 : alert("["+"     좌측 공백만 제거됨     ".ltrim()+"]");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.ltrim = function() {
	return this.replace(/(^\s*)/, "");
}

/**
* 1. 이    름 : rtrim
* 2. 설    명 : 문자의 우측 공백을 제거한다.
* 3. 인    자 :
* 4. 반 환 값 : String - 우측 공백이 제거된 문자열
* 5. 사 용 예 : alert("["+"     우측 공백만 제거됨     ".rtrim()+"]");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.rtrim = function() {
	return this.replace(/(\s*$)/, "");
}

/**
* 1. 이    름 : isEmpty
* 2. 설    명 : 문자값이 빈 값인지 체크한다.
* 3. 인    자 :
* 4. 반 환 값 : Boolean True  - 빈 값
*               Boolean False - 값 존재
* 5. 사 용 예 : var a = "예제 문자열  ";
*               if(a.isEmpty()) {alert("비었음");} else {alert("안 비었음");}
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.isEmpty = function() {
	return cfn_isEmpty(this);
}

/**
* 1. 이    름 : parseInt
* 2. 설    명 : 숫자로 변환 가능한 문자열을 int로 변환한다.
* 3. 인    자 :
* 4. 반 환 값 : Number
* 5. 사 용 예 : alert("200".parseInt());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.parseInt = function() {
	if(!isNaN(this)) {
		return parseInt(this);
	} else {
		return null;
	}
}


/**
* 1. 이    름 : toDate
* 2. 설    명 : 문자열을 Date 객체로 변환하여 반환한다.
* 3. 인    자 : String - 날자 문자열의 패턴
* 4. 반 환 값 : Date
* 5. 사 용 예 : alert("20090120".toDate());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.toDate = function(pattern) {
	var index = -1;
	var year;
	var month;
	var day;
	var hour = 0;
	var min  = 0;
	var sec  = 0;
	var ms   = 0;
	var newDate;

	if (pattern == null) {
		pattern = "YYYYMMDD";
	}

	if ((index = pattern.indexOf("YYYY")) == -1 ) {
		index = pattern.indexOf("YY");
		year = "20" + this.substr(index, 2);
	} else {
		year = this.substr(index, 4);
	}

	if ((index = pattern.indexOf("MM")) != -1 ) {
		month = this.substr(index, 2);
	} else {
		month = 1;
	}

	if ((index = pattern.indexOf("DD")) != -1 ) {
		day = this.substr(index, 2);
	} else {
		day = 1;
	}

	if ((index = pattern.indexOf("HH")) != -1 ) {
		hour = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("mm")) != -1 ) {
		min = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("ss")) != -1 ) {
		sec = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("SS")) != -1 ) {
		ms = this.substr(index, 2);
	}

	newDate = new Date(year, month - 1, day, hour, min, sec, ms);
	if (month > 12) {
		newDate.setFullYear(year + 1);
	} else {
		newDate.setFullYear(year);
	}

	return newDate;
}


/**
* 1. 이    름 : byteLength
* 2. 설    명 : 바이트 길이를 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : Number - 문자열의 바이트 길이
* 5. 사 용 예 : alert("팔바이트".byteLength());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.byteLength = function() {
	var cnt = 0;
	for (var i = 0; i < this.length; i++) {
		if (this.charCodeAt(i) > 127)
			cnt += 2;
		else
			cnt++;
	}
	return cnt;
}

/**
* 1. 이    름 : getByteCutString
* 2. 설    명 : 지정 byte 길이까지의 값을 리턴한다.
* 3. 인    자 :
* 4. 반 환 값 : String
* 5. 사 용 예 : alert("abcde".getByteCutString(80));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2011. 03. 11   최병언     최초 등록
*/
String.prototype.getByteCutString = function(len) {
	var cnt = 0;
	var str = "";
	for (var i = 0; i < this.length; i++) {
		cnt += (this.charCodeAt(i) > 127) ? 2 : 1;

		if (cnt > len) {
			return this.substring(0, i);
		}
	}
	return this;
}

/**
* 1. 이    름 : getNumber
* 2. 설    명 : 수만 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : String - 수인 문자열
* 5. 사 용 예 : alert("-1,300".getNumber());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.getNumber = function() {
	if(this.charAt(0) == "-") {
		return "-"+ this.replace(/[^\d\.]*/g, "");
	} else {
		return this.replace(/[^\d\.]*/g, "");
	}
}


/**
* 1. 이    름 : getFigure
* 2. 설    명 : 숫자만 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : String - 숫자로만 이루어진 문자열
* 5. 사 용 예 : alert("-1,300".getFigure());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.getFigure = function() {
	return (this.trim().replace(/[^0-9]/g, ""));
}

/**
* 1. 이    름 : getAlphabet
* 2. 설    명 : 영문자만 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : String - 영문자로만 이루어진 문자열
* 5. 사 용 예 : alert("asdfㄴ이라ㅓ-1,300".getAlphabet());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 05. 22    이민재     최초 등록
*/
String.prototype.getAlphabet = function() {
	return (this.trim().replace(/[^a-zA-Z]/g, ""));
}

/**
* 1. 이    름 : getAlphaNum
* 2. 설    명 : 영문자와 숫자만 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : String - 영문자와 숫자로만 이루어진 문자열
* 5. 사 용 예 : alert("aaㅇㅇ-1,300".getAlphaNum());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 05. 22    이민재     최초 등록
*/
String.prototype.getAlphaNum = function() {
	return (this.trim().replace(/[^0-9a-zA-Z]/g, ""));
}


/**
* 1. 이    름 : meta
* 2. 설    명 : 정규식에 쓰이는 특수한 문자열을 escape한 뒤 반환한다.
*               removeChar 함수에 필요
* 3. 인    자 :
* 4. 반 환 값 : String - 정규식에 쓰이는 특수문자가 escape된 문자열
* 5. 사 용 예 : alert("$abc".meta());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.meta = function() {
	var str = this;
	var result = ""
		for(var i = 0; i < str.length; i++) {
			if((/([\$\(\)\*\+\.\[\]\?\\\^\{\}\|]{1})/).test(str.charAt(i))) {
				result += str.charAt(i).replace((/([\$\(\)\*\+\.\[\]\?\\\^\{\}\|]{1})/), "\\$1");
			} else {
				result += str.charAt(i);
			}
		}
	return result;
}


/**
* 1. 이    름 : removeRegExpChar
* 2. 설    명 : 인수로 입력받은 문자들을 제거한 문자열을 반환한다.
*               meta 함수 필수
* 3. 인    자 : String - 제거할 문자들
* 4. 반 환 값 : String - 입력받은 문자들이 제거된 문자열
* 5. 사 용 예 : alert("$abc".removeRegExpChar());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.removeRegExpChar = function(pattern) {
	return (pattern == null) ? this : eval("this.replace(/[" + pattern.meta() + "]/g, \"\")");
}


/**
* 1. 이    름 : isFigure
* 2. 설    명 : 숫자로만 이루어졌는지 여부를 반환한다.
* 3. 인    자 : String - 제외할 문자들
* 4. 반 환 값 : Boolean - 숫자로만 이루어진 문자열 여부
* 5. 사 용 예 : alert("-1,300".isFigure("-,"));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.isFigure = function() {
	return (/^[0-9]+$/).test(this.removeRegExpChar(arguments[0])) ? true : false;
}


/**
* 1. 이    름 : isAlphabet
* 2. 설    명 : 영문자로만 이루어졌는지 여부를 반환한다.
* 3. 인    자 : String - 제외할 문자들
* 4. 반 환 값 : Boolean - 영문자로만 이루어진 문자열 여부
* 5. 사 용 예 : alert("se7en".isAlphabet("7"));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.isAlphabet = function() {
	return (/^[a-zA-Z]+$/).test(this.removeRegExpChar(arguments[0])) ? true : false;
}


/**
* 1. 이    름 : isAlphaNum
* 2. 설    명 : 영문자와 숫자로만 이루어졌는지 여부를 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : Boolean - 염문자와 숫자로만 이루어진 문자열 여부
* 5. 사 용 예 : alert("window2003".isAlphaNum());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.isAlphaNum = function() {
	return (/^[0-9a-zA-Z]+$/).test(this.removeRegExpChar(arguments[0])) ? true : false;
}


/**
* 1. 이    름 : isNumber
* 2. 설    명 : 수인지 여부를 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : Boolean - 수 여부
* 5. 사 용 예 : alert("-123".isNumber());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*/
String.prototype.isNumber = function() {
	return (/^(\-)?[0-9]*(\.[0-9]*)?$/).test(this.removeRegExpChar(arguments[0])) ? true : false;
}


/**
* 1. 이    름 : isUserid
* 2. 설    명 : 영문자로시작하고 영문자와 숫자로만 이루어졌는지 여부를 반환한다.
* 3. 인    자 :
* 4. 반 환 값 : Boolean - 영문자로 시작하고 영문자와 숫자로만 이루어진 문자열 여부
* 5. 사 용 예 : alert("window2003".isAlphanumeric());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.isUserid = function() {
	return (/^[a-zA-z]{1}[0-9a-zA-Z]+$/).test(this.remove(arguments[0])) ? true : false;
}


/**
* 1. 이    름 : isDate
* 2. 설    명 : 날자로 변환 간능한지 체크
* 3. 인    자 : String - 날짜 표시 패천
* 4. 반 환 값 : Boolean - 날자로 변환 여부
* 5. 사 용 예 : alert("2008/10/10".isDate(YYYY/MM/DD));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.isDate = function(pattern) {
	if(pattern == null || pattern.trim() == "") {
		pattern = "YYYYMMDD";
	}

	if(this.getFigure().length != 8)
		return false;
	var d = this.toDate(pattern);

	if(this.getFigure() != d.getFullYear()+(d.getMonth()+1 +"").lpad("0", 2)+(d.getDate() +"").lpad("0",2)) {
		return false;
	} else {
		return true;
	}
}


/**
* 1. 이    름 : lpad
* 2. 설    명 : 문자열이 l의 길이가 될 때까지 왼쪽에 str을 붙이고 반환한다.
* 3. 인    자 : Char, Number
* 4. 반 환 값 : String - 길이가 l인 문자열
* 5. 사 용 예 : alert("1234".lpad('0', 10));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.lpad = function(c, l) {
	var len = this.length;
	var s = this;

	while(len < l) {
		s = c + s;
		len++;
	}

	return s;
}


/**
* 1. 이    름 : rpad
* 2. 설    명 : 문자열이 l의 길이가 될 때까지 오른쪽에 str을 붙이고 반환한다.
* 3. 인    자 : Char, Number
* 4. 반 환 값 : String - 길이가 l인 문자열
* 5. 사 용 예 : alert("1234".rpad('0', 10));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.rpad = function(c, l) {
	var len = this.length;
	var s = this;

	while(len < l) {
		s += c;
		len++;
	}

	return s;
}


/*
* 1. 이    름 : removeComma
* 2. 설    명 : 콤마(',')가 포함된 객체의 값에서 콤마를 제거하고 반환한다
* 3. 인    자 :
* 4. 반 환 값 : String - 콤마(',')가 제거된 문자열
* 5. 사 용 예 : alert("1234,567,890".removeComma());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.removeComma = function() {
	return this.replace(/,/gi, "");
}


/*
* 1. 이    름 : replaceAll
* 2. 설    명 : 문자열의 모든 일부 문자를 다른 문자로 모두 변경한다.
* 3. 인    자 : String strForm - 원 문자열
*               String strTo - 변경 문자열
* 4. 반 환 값 : String - 모든 문자열 strForm이 strTo으로 변경된 문자열
* 5. 사 용 예 : alert("1234,567,890".removeComma());
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
String.prototype.replaceAll = function(strFrom, strTo) {
	if(strTo.isEmpty()) {
		strTo = "\"\"";
	}

	return eval("this.replace(/" + strFrom + "/g, '"+ strTo +"')");
};


/*******************************************************************************
*
* 날짜를 입력받아 처리하는 스크립트 모음
*
*******************************************************************************
*
* 함수 목록 :
* getFormattedString(string) - 지정된 포멧으로 날짜를 반환한다.
* addDate(number[, number[, number[, number[, number[, number[, number[, number]]]]]]])
*      - 현재 날자에서 입력받은 시간을 더한 날자를 반환
* addDay(number) - 현재 날자에서 입력받은 일을 더한 날자를 반환
* addMonth(number) - 현재 날자에서 입력받은 월을 더한 날자를 반환
* addYear(number) - 현재 날자에서 입력받은 년을 더한 날자를 반환
* compareTo(date[, string]) - 날자를 비교할 날자와 비교한다.
* getDateGap(date) - 대상 날자와의 차이 일수를 계산한다.
*
******************************************************************************/

var GLB_MONTH_IN_YEAR       = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var GLB_SHORT_MONTH_IN_YEAR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var GLB_DAY_IN_WEEK         = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
var GLB_SHORT_DAY_IN_WEEK   = ["일", "월", "화", "수", "목", "금", "토"];
//var GLB_DAYS_IN_MONTH       = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/*
 * 1. 이    름 : getFormattedString
 * 2. 설    명 : 지정된 포멧으로 날짜를 반환한다.
 * 3. 인    자 : String - 날짜 포멧
 * 4. 반 환 값 : String - 포메팅된 날짜
 * 5. 사 용 예 : alert((new Date()).getFormattedString("YYYY/MM/DD"));
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
Date.prototype.getFormattedString = function(pattern) {

	var year      = this.getFullYear();
	var month     = this.getMonth() + 1;
	var day       = this.getDate();
	var dayInWeek = this.getDay();
	var hour24    = this.getHours();
	var ampm      = (hour24 < 12) ? "AM" : "PM";
	var hour12    = (hour24 > 12) ? (hour24 - 12) : hour24;
	var min       = this.getMinutes();
	var sec       = this.getSeconds();

	var YYYY = "" + year;
	var YY   = YYYY.substr(2);
	var MM   = (("" + month).length == 1) ? "0" + month : "" + month;
	var MON  = GLB_MONTH_IN_YEAR[month-1];
	var mon  = GLB_SHORT_MONTH_IN_YEAR[month-1];
	var DD   = (("" + day).length == 1) ? "0" + day : "" + day;
	var DAY  = GLB_DAY_IN_WEEK[dayInWeek];
	var day  = GLB_SHORT_DAY_IN_WEEK[dayInWeek];
	var HH   = (("" + hour24).length == 1) ? "0" + hour24 : "" + hour24;
	var hh   = (("" + hour12).length == 1) ? "0" + hour12 : "" + hour12;
	var mm   = (("" + min).length == 1) ? "0" + min : "" + min;
	var ss   = (("" + sec).length == 1) ? "0" + sec : "" + sec;
	var SS   = "" + this.getMilliseconds();

	var dateStr;
	var index = -1;

	if (typeof(pattern) == "undefined") {
		dateStr = "YYYYMMDD";
	} else {
		dateStr = pattern;
	}

	dateStr = dateStr.replace(/YYYY/g, YYYY);
	dateStr = dateStr.replace(/YY/g,   YY);
	dateStr = dateStr.replace(/MM/g,   MM);
	dateStr = dateStr.replace(/MON/g,  MON);
	dateStr = dateStr.replace(/mon/g,  mon);
	dateStr = dateStr.replace(/DD/g,   DD);
	dateStr = dateStr.replace(/DAY/g,  DAY);
	dateStr = dateStr.replace(/day/g,  day);
	dateStr = dateStr.replace(/hh/g,   hh);
	dateStr = dateStr.replace(/HH/g,   HH);
	dateStr = dateStr.replace(/mm/g,   mm);
	dateStr = dateStr.replace(/ss/g,   ss);
	dateStr = dateStr.replace(/(\s+)a/g, "$1" + ampm);

	return dateStr;
}


/*
* 1. 이    름 : addDate
* 2. 설    명 : 현재 날자에서 입력받은 시간을 더한 날자를 반환
* 3. 인    자 : Number
* 4. 반 환 값 : Date
* 5. 사 용 예 : alert((new Date()).addDate(0,0,1));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
Date.prototype.addDate = function(years, months, dates, hours, miniutes, seconds, mss) {

	if (years == null)    years    = 0;
	if (months == null)   months   = 0;
	if (dates == null)    dates    = 0;
	if (hours == null)    hours    = 0;
	if (miniutes == null) miniutes = 0;
	if (seconds == null)  seconds  = 0;
	if (mss == null)      mss      = 0;

	return new Date(this.getFullYear() + years,
			this.getMonth() + months,
			this.getDate() + dates,
			this.getHours() + hours,
			this.getMinutes() + miniutes,
			this.getSeconds() + seconds,
			this.getMilliseconds() + mss
	);
}


/*
* 1. 이    름 : compareTo
* 2. 설    명 : 날자를 비교할 날자와 비교한다.
* 3. 인    자 : Date, String(날자 패턴)
* 4. 반 환 값 : Number 1   - 비교값보다 큰 경우
*               Number 0   - 같은 경우
*               Number -1  - 비교값보다 작은 경우
* 5. 사 용 예 : alert((new Date()).compare(1));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
Date.prototype.compareTo = function(targetDate, pattern) {
	var d = this;

	if(cfn_isString(targetDate)) {
		targetDate = targetDate.getFigure().toDate();
	}

	if(!cfn_isDate(targetDate)) {
		return;
	}

	if(pattern == null) {
		pattern = "YYYYMMDD";
	}

	d = d.getFormattedString(pattern);
	targetDate = targetDate.getFormattedString(pattern);

	d = d.toDate();
	targetDate = targetDate.toDate();

	if (d > targetDate) {
		return 1;
	} else if(d < targetDate) {
		return -1;
	} else {
		return 0;
	}
}

/*
* 1. 이    름 : addDay
* 2. 설    명 : 현재 날자에서 입력받은 일을 더한 날자를 반환
* 3. 인    자 : Number
* 4. 반 환 값 : Date
* 5. 사 용 예 : alert((new Date()).addDay(1));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 02. 17    이민재     최초 등록
*/
Date.prototype.addDay = function(day) {
	return this.addDate(0, 0, day);
}

/*
* 1. 이    름 : addMonth
* 2. 설    명 : 현재 날자에서 입력받은 월을 더한 날자를 반환
* 3. 인    자 : Number
* 4. 반 환 값 : Date
* 5. 사 용 예 : alert((new Date()).addMonth(1));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 02. 17    이민재     최초 등록
*/
Date.prototype.addMonth = function(month) {
	return this.addDate(0, month);
}

/*
* 1. 이    름 : addYear
* 2. 설    명 : 현재 날자에서 입력받은 년을 더한 날자를 반환
* 3. 인    자 : Number
* 4. 반 환 값 : Date
* 5. 사 용 예 : alert((new Date()).addYear(1));
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 02. 17    이민재     최초 등록
*/
Date.prototype.addYear = function(year) {
	return this.addDate(year);
}

/*
* 1. 이    름 : getDateGap
* 2. 설    명 : 대상 날자와의 차이 일수를 계산한다.
* 3. 인    자 : Date - 비교할 날자
* 4. 반 환 값 : Number - 차이 일 수
* 5. 사 용 예 : alert("오늘과 한달 전의 일자 차이는?  "+(new Date()).getDateGap((new Date().addDate(0,1))), 'YYYYMM');
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
Date.prototype.getDateGap = function(targetDate) {
	var d = this;

	if(cfn_isString(targetDate)) {
		targetDate = targetDate.getFigure().toDate();
	}

	if(!cfn_isDate(targetDate)) {
		return;
	}

	d = d.valueOf()/(24*60*60*1000);
	targetDate = targetDate.valueOf()/(24*60*60*1000);

	return (d - targetDate);

}




/*******************************************************************************
*
* 숫자를 입력받아 처리하는 스크립트 모음
*
*******************************************************************************
*
* 함수 목록 :
* toCurrency(obj) - 입력란의 값의 3자리 마다 콤마를 찍는다.
* setFldToNumberFld(obj) - 입력란을 숫자 필드로 세팅. 키 입력이벤트를 받아서
*      3자리마다 자동으로 콤마를 추가한다.
*
******************************************************************************/

/*
 * 1. 이    름 : toCurrency
 * 2. 설    명 : 소수점이 포함된 객체의 값에 3자리마다 콤마(',')를 추가하고 그
 *               값을 반환한다
 * 3. 인    자 : Object
 * 4. 반 환 값 : String - 3자리마다 콤마(',')가 추가된 문자열
 * 5. 사 용 예 : alert(toCurrency(1234567890));
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
function toCurrency(obj) {
	var tmp = 0;

	if(cfn_isObject(obj)) {
		tmp = $(obj).value.split(".");
	} else if(cfn_isNumber(obj) || obj.isNumber()) {
		tmp = new String(obj).split(".");
	} else {
		tmp = obj.getNumber().split(".");
	}

	var number = tmp[0];
	var length_of_number = number.length;
	var new_number = "";
	var minusFlag = false;
	for (var position = 0; position < length_of_number; position++) {
		if(number.charAt(position) == "-") {
			minusFlag = true;
			continue;
		}
		new_number += number.substring(position, position + 1);
		if (((length_of_number - position - 1) % 3) === 0 && (length_of_number - position - 1) > 0) {
			new_number += ",";
		}
	}
	if(minusFlag) {
		new_number = "-" + new_number;
	}

	if (cfn_isUndefined(tmp[1]) || cfn_isNull(tmp[1])) {
		return new_number;
	} else {
		return new_number + "." + tmp[1];
	}
}

/*******************************************************************************
*
* 기타
*
******************************************************************************/
function AjaxReq(req){
	this.text = req.responseText;

	this.isError = function() {
		if(this.text.substring(0, 9) == "__ERROR__") {
			return true;
		} else {
			return false;
		}
	}
	this.getMsg = function() {
		return this.text.substring(9);
	}
	this.getText = function() {
		return this.text;
	}
}

/*
* 1. 이    름 : 디버깅용 콘솔창
* 2. 설    명 : 화면 오픈시 스크립트를 부르고 (<script...> Log.init();...)
*               Log.log("로그내용"); 으로 로그를 로그창에 찍는다.
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_popPost("popIcs.action","test3","400","500");
* 6. 변경사항 :
*      변경일          		변경자    		변경내용
*    --------------------------------------------------------------------------
*      2009. 04. 24    Hippie     	최초 등록
*/
var Log = {
	init : function() {
		var c = document.createElement("div");	// 디버깅 콘솔 틀
		c.id = 'debugConsoleContainer'
		c.style.position = "absolute";

		//c.style.width = "500px";
		//c.style.height = "200px";
		c.style.right = 0;
		c.style.top = document.body.scrollTop;
		c.style.border = "1px solid silver";
		c.style.background = "white";

		c.innerHTML = "<input type='button' value='clear' onclick=\"document.getElementById('debugConsole').innerText = ''\">"
			+ "<input type='button' value='copy' onclick=\"window.clipboardData.setData('Text', document.getElementById('debugConsole').innerText)\">"
			+ "<input type='button' value='min' onclick=\"document.getElementById('debugConsole').style.display='none'; document.getElementById('debugConsoleContainer').style.height='0px';\">"
			+ "<input type='button' value='restore' onclick=\"document.getElementById('debugConsoleContainer').style.height='220px'; document.getElementById('debugConsole').style.display='block';\">"
			+ "<div id='debugConsole' style='position:relative; overflow:auto; width:500px; height:200px; left:0px; border:1px solid silver'></div>"
			+ "<div style='clear:both;'></div>";

		document.body.appendChild(c);
		Event.observe(window, 'scroll', function() {$('debugConsoleContainer').style.top = document.body.scrollTop;}, false);
	},
	log : function(str) {
		if(!$("debugConsoleContainer")) {
			Log.init();
		}
		var t = $("debugConsole").innerText;
		if(t.length > 500) {
			t = t.substring(t.length - 500, t.length);
		}
		$("debugConsole").innerText = t+"\n" + new Date().getFormattedString("HH:mm:ss") + " " + str ;
		$("debugConsole").scrollTop = $("debugConsole").scrollHeight;
		$("debugConsole").style.bottom = $("debugConsoleContainer").style.bottom;
	},
	print : function(str) {
		if(!$("debugConsoleContainer")) {
			Log.init();
		}
		Log.log(str);
	}
}

/*
 * 1. 이    름 : cfn_ajaxRequest
 * 2. 설    명 : ajax 리퀘스트를 보내는 공통함수
 * 3. 인    자 : String url - 리퀘스트 URL
 *               Map params - 리퀘스트 파라매터 맵
 *               function onSuccess - 리퀘스트 성공시 호출할 함수
 *               function onFailure - 리퀘스트 실패시 호출할 함수
 * 4. 반 환 값 :
 * 5. 사 용 예 : cfn_ajaxRequest(url, param, onSuccess, onFailure);
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 09. 01    이민재     최초 등록
 */
function cfn_ajaxRequest(url, params, onSuccess, onFailure) {
	if(cfn_isEmpty(url)) {
		alert("URL이 정의되지 않았습니다.");
		return false;
	} else if(cfn_isNull(onSuccess)) {
		alert("성공시 호출할 함수가 정의되지 않았습니다.");
		return false;
	}

	var ajax = new Ajax.Request(
			url,
			{
				method : "post",
				parameters : params,
				onSuccess : onSuccess,
				onFailure : onFailure
			}
	);
}

/*
 * 1. 이    름 : cfn_ajaxCode
 * 2. 설    명 : ajax 로 코드 콤보를 생성한다.
 * 3. 인    자 : String url - 리퀘스트 URL
 * 				 String id - 콤보박스가 위치할 상위 엘레먼트의 ID
 *               Map param - 리퀘스트 파라매터 맵
 * 4. 반 환 값 :
 * 5. 사 용 예 : cfn_ajaxRequest(url, param, onSuccess, onFailure);
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 09. 22    이민재     최초 등록
 */
function cfn_ajaxCode(url, id, param) {
	var onSuccess = function(req) {
			$(id).update(req.responseText);
	};
	var onFailure = function(req) {fn_error("코드 조회 중 에러 발생");};
	cfn_ajaxRequest(url, param, onSuccess, onFailure);
}


/*
* 1. 이    름 : cfn_setFldToCurrencyFld
* 2. 설    명 : 입력란을 통화 필드로 세팅. 키 입력이벤트를 받아서 3자리마다
*               자동으로 콤마를 추가한다.
* 3. 인    자 : String - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setFldToCurrencyFld("fldTest1");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_setFldToCurrencyFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyNumberKey(ev);
		}
		//        $(strId).value = toCurrency($F(strId).removeComma());
	};
}
// 수 필드
function cfn_setFldToNumberFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

//	Event.observe(strId, "keypress", function(ev) {
//		setField(strId, ev);
//	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyNumberKey(ev);
			var keyCode = ev.keyCode;
			// '-' 처리 - 이미 뭔가 입력되어 있으면
			if($F(strId).length > 0 && (keyCode == 109 || keyCode == 189)) {
				ev.returnValue = false;
				Event.stop(ev);
			}
			// '.' 처리
			if(keyCode == 110 || keyCode == 190) {
				// 키 다운시 입력란에 먼저 입력된 값이 있으면
				if ($F(strId).getFigure().length > 0) {
					if($F(strId).indexOf(".") == 0) {
						ev.returnValue = false;
						Event.stop(ev);
					}
				} else {
					if($F(strId).indexOf(".") < 0) {
						ev.returnValue = false;
						Event.stop(ev);
					}
				}
				// 이미 '.'이 입력되어 있으면
				if($F(strId).indexOf(".") > -1) {
					ev.returnValue = false;
					Event.stop(ev);
				}
			}
		}
		$(strId).value = $F(strId).getNumber();
	};
}

// 숫자필드
function cfn_setFldToFigureFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

	Event.observe(strId, "keypress", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyFigureKey(ev);
		}
		$(strId).value = $F(strId).getFigure();
	};
}

// return T/F에 따라서..
//ex) <input type="text" style="ime-mode:disabled;" onKeyPress="return numbersonly(event, false)">
//function cfn_numbersonly(e, decimal) {
//var key;
//var keychar;

//if (window.event) {
//key = window.event.keyCode;
//} else if (e) {
//key = e.which;
//} else {
//return true;
//}
//keychar = String.fromCharCode(key);

//if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
//|| (key == 27)) {
//return true;
//} else if ((("0123456789").indexOf(keychar) > -1)) {
//return true;
//} else if (decimal && (keychar == ".")) {
//return true;
//} else
//return false;
//}


/*
 * 1. 이    름 : cfn_setTelFld
 * 2. 설    명 : 전화번호 포메팅, 해당 입력란에 키 입력이 있을 때마다 전화번호 포메팅
 * 3. 인    자 : String - 입력란의 ID
 * 4. 반 환 값 :
 * 5. 사 용 예 : cfn_setTelFld("fldTest2");
 * 6. 변경사항 :
 *      변경일          변경자     변경내용
 *    --------------------------------------------------------------------------
 *      2009. 01. 19    이민재     최초 등록
 */
function cfn_setTelFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyNumberKey(ev);
		}

		var value = ev.target.value;
		value = value.getFigure();

		if(value.length == 12) {
			$(strId).value = value.substring(0, 4) + "-" + value.substring(4, 8) + "-" + value.substring(8, 12);
	    } else if(value.length == 11) {        // 11 자리일때
			$(strId).value = value.substring(0, 3) + "-" + value.substring(3, 7) + "-" + value.substring(7, 11);
		} else if(value.length == 10) { // 10 자리일때
			if(value.substring(0, 2) == "02") {
				$(strId).value = value.substring(0, 2) + "-" + value.substring(2, 6) + "-" + value.substring(6, 10);
			} else {
				$(strId).value = value.substring(0, 3) + "-" + value.substring(3, 6) + "-" + value.substring(6, 10);
			}
		} else if(value.length == 9) {  // 9 자리 일때
			$(strId).value = value.substring(0, 2) + "-" + value.substring(2, 5) + "-" + value.substring(5, 9);
		} else if(value.length > 6) {
			$(strId).value = value.substring(0, 2) + "-" + value.substring(2, 5) + "-" + value.substring(5, value.length);
		} else if(value.length > 3) {
			$(strId).value = value.substring(0, 2) + "-" + value.substring(2, value.length);
		} else {
			$(strId).value = value;
		}
	};
}


function cfn_getTelFld(strId) {
	var value = $(strId).value;

	if(value.length == 12) {
		$(strId).value = value.substring(0, 4) + "-" + value.substring(4, 8) + "-" + value.substring(9, 12);
    } else if(value.length == 11) {
		$(strId).value = value.substring(0, 3) + "-" + value.substring(3, 7) + "-" + value.substring(7, 11);
	} else if(value.length == 10) {
		if(value.substring(0, 2) == "02") {
			$(strId).value = value.substring(0, 2) + "-" + value.substring(2, 6) + "-" + value.substring(6, 10);
		} else {
			$(strId).value = value.substring(0, 3) + "-" + value.substring(3, 6) + "-" + value.substring(6, 10);
		}
	} else if(value.length == 9) {
		$(strId).value = value.substring(0, 2) + "-" + value.substring(2, 5) + "-" + value.substring(5, 9);
	} else if(value.length > 6) {
		$(strId).value = value.substring(0, 2) + "-" + value.substring(2, 5) + "-" + value.substring(5, value.length);
	} else if(value.length > 3) {
		$(strId).value = value.substring(0, 2) + "-" + value.substring(2, value.length);
	} else {
		$(strId).value = value;
	}
}


/*
* 1. 이    름 : cfn_setMultiTelFld
* 2. 설    명 : 숫자와 -와 , 만 입력받음
* 3. 인    자 : String - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setMultiTelFld("fldTest2");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_setMultiTelFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			if(cfn_isUndefined(ev) || cfn_isNull(ev)) {
				ev = event;
			}

			var keyCode = ev.keyCode;

			if(keyCode < 48 || (keyCode > 57 && keyCode < 96) || keyCode > 105) {
				if(keyCode != 109 && keyCode != 188 && keyCode != 189) {
					ev.returnValue=false;
					Event.stop(ev);
				}
			}
		}
	}
}

/*
* 1. 이    름 : cfn_setDateFld
* 2. 설    명 : 날짜 포메팅, 해당 입력란에 키 입력이 있을 때마다 날짜 포메팅(YYYY-MM-DD)
* 3. 인    자 : String - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setTelFld("fldTest2");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_setDateFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

	Event.observe(strId, "keypress", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyFigureKey(ev);
		}

		var value = ev.target.value;
		value = value.getFigure();
		value = value.substring(0, 8);

		if(value.length == 8) {
			$(strId).value = value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8);
		} else if(value.length == 6) {
			$(strId).value = value.substring(0, 4) + "-" + value.substring(4, 6);
		} else {
			$(strId).value = value.removeRegExpChar("~`!@#$%^&*()_+=[]\\{}|<>?,./");
		}
	};
}


/*
* 1. 이    름 : cfn_setFormattedFld
* 2. 설    명 : 숫자를 주어진 포멧에 맞게 해당 입력란에 키 입력이 있을 때마다 포메팅
* 3. 인    자 : String - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setFormattedFld("fldTest2", "000000-0000000", "-");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 01. 19    이민재     최초 등록
*/
function cfn_setFormattedFld(strId, pattern, seperator) {
	var orgPattern = pattern;

	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		pattern = orgPattern;
		if(!cfn_isEditKey(ev)) {
			cfn_onlyNumberKey(ev);
		}

		var value = ev.target.value;
		value = value.getFigure();
		var temp = "";
		var endIdx = value.length;

		if(cfn_isUndefined(seperator) || cfn_isNull(seperator)) {
			seperator = "-";
		}

		var idx = orgPattern.indexOf(seperator);

		while(idx > 0 && value.length > idx) {
			temp += value.substring(0, idx);
			temp += seperator;
			value = value.substring(idx, value.length);
			pattern = pattern.substring(idx+1, pattern.length);
			idx = pattern.indexOf(seperator);
		}
		temp += value;
		temp = temp.substring(0, orgPattern.length);
		$(strId).value = temp;

	};
}

/*
* 1. 이    름 : cfn_setCodeFld
* 2. 설    명 : 영문자와 숫자로만 이루어진 필드로 세팅
* 3. 인    자 : String - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setCodeFld("fldTest2");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 05. 22    이민재     최초 등록
*/
function cfn_setCodeFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyAlphaNumKey(ev);
		}
	}
}

/*
* 1. 이    름 : cfn_setUpperCodeFld
* 2. 설    명 : 영어 대문자와 숫자로만 이루어진 필드로 세팅
* 3. 인    자 : String - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setUpperCodeFld("fldTest2");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 05. 22    이민재     최초 등록
*/
function cfn_setUpperCodeFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled
	$(strId).style.textTransform = "uppercase";
	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyAlphaNumKey(ev);
			$(strId).value = $F(strId).toUpperCase();
		}
	}
}

function cfn_setUppercaseFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled
	$(strId).style.textTransform = "uppercase";

	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		$(strId).value = $F(strId).toUpperCase();
	}
}

/*
* 1. 이    름 : cfn_setEngFld
* 2. 설    명 : 영문자만 입력하는 필드로 세팅
* 3. 인    자 : String - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setEngFld("fldTest2");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*       2009. 05. 22    이민재     최초 등록
*/
function cfn_setEngFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled

//	Event.observe(strId, "keydown", function(ev) {
//	setField(strId, ev);
//	});

//	Event.observe(strId, "keyup", function(ev) {
//	setField(strId, ev);
//	});

//	Event.observe(strId, "blur", function(ev) {
//	setField(strId, ev);
//	});

//	function setField(strId, ev) {
//	if(!cfn_isEditKey(ev)) {
//	cfn_onlyAlphabetKey(ev);
//	}
//	};
}

/*
* 1. 이    름 : cfn_setUpperEngFld
* 2. 설    명 : 영문자(대문자)로만 이루어진 필드로 세팅
* 3. 인    자 : String  - 입력란의 ID
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setUpperEngFld("fldTest2");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 10. 22    심수현     최초 등록
*/

function cfn_setUpperEngFld(strId) {
	$(strId).style.imeMode = "disabled";	// IME-MODE disabled
	$(strId).style.textTransform = "uppercase";
	Event.observe(strId, "keydown", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "keyup", function(ev) {
		setField(strId, ev);
	});

	Event.observe(strId, "blur", function(ev) {
		setField(strId, ev);
	});

	function setField(strId, ev) {
		if(!cfn_isEditKey(ev)) {
			cfn_onlyAlphabetKey(ev);
			$(strId).value = $F(strId).toUpperCase();
		}
	}
}




/*
* 1. 이    름 : cfn_setAllCheckbox
* 2. 설    명 : 전체 체크 체크박스를 클릭시 모든 대상 체크박스의 값을 변경한다.
* 3. 인    자 : String tot - 전체 체크박스 ID
*               Stirng chk - 대상 체크박스의 name
* 4. 반 환 값 :
* 5. 사 용 예 : <input type="checkbox" onclick="cfn_setAllCheckbox('totChk', 'chk')">
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 11    이민재     최초 등록
*/
function cfn_setAllCheckbox(tot, chk) {
	var f = $(tot).checked;
	var c = document.getElementsByName(chk);
	for(var i = 0; i < c.length; i++) {
		c[i].checked = f;
	}
}

/*
* 1. 이    름 : cfn_isOnlyOneChecked
* 2. 설    명 : 대상 체크박스 중 하나의 값만 체크 되었는지 체크한다.
* 3. 인    자 : String - 대상 체크박스의 name
* 4. 반 환 값 : boolean
* 5. 사 용 예 : setFldToNumberFld("fldTest2");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 11    이민재     최초 등록
*/
function cfn_isOnlyOneChecked(name) {
	var c = document.getElementsByName(name);
	var cnt = 0;
	for(var i = 0; i < c.length; i++) {
		if(c[i].checked) {
			cnt++;
		}
	}

	if(cnt < 1) {
		alert("체크된 항목 없음");
		return false;
	} else if( cnt > 1) {
		alert("하나만 선택하시오");
		return false;
	}
	return true;
}

/*
* 1. 이    름 : cfn_clearForm
* 2. 설    명 : 대상 폼 내의 입력값들을 초기화한다.
* 3. 인    자 : String - 대상 폼 name
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_clearForm("frmCommCode");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 11    이민재     최초 등록
*/
function cfn_clearForm(frmName) {
	var eleArr = Form.getElements(frmName);

	for(var i = 0; i < eleArr.length; i++) {
		if(eleArr[i].type == "text" || eleArr[i].type == "textarea" || eleArr[i].type == "hidden") {
			eleArr[i].value = "";
		} else if(eleArr[i].type == "check") {
			eleArr[i].checked = false;
		} else if(eleArr[i].tagName.toLowerCase() == "select") {
			eleArr[i].selectedIndex = 0;
		}
	}
}

/*
* 1. 이    름 : cfn_clearForm2
* 2. 설    명 : 대상 폼 내의 입력값들을 초기화한다.
* 3. 인    자 : String - 대상 폼 name
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_clearForm("frmCommCode");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 11    이민재     최초 등록
*/
function cfn_clearForm2(frmName) {
	var eleArr = Form.getElements(frmName);

	for(var i = 0; i < eleArr.length; i++) {
		if(eleArr[i].type == "text" || eleArr[i].type == "textarea" || eleArr[i].type == "hidden" || eleArr[i].type == "password") {
			eleArr[i].value = "";
		} else if(eleArr[i].type == "check") {
			eleArr[i].checked = false;
		} else if(eleArr[i].tagName.toLowerCase() == "select") {
			eleArr[i].selectedIndex = 0;
		}
	}
}

/*
* 1. 이    름 : cfn_setSelectValue
* 2. 설    명 : 셀렉트 박스의 값을 세팅하고 해당 값의 option을 선택한다.
* 3. 인    자 : String - 대상 셀렉트박스 ID
*               String - 선택할 값
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_setSelectValue("cmbDetailRefLang", "ko");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 06. 23    이민재     최초 등록
*/
function cfn_setSelectValue(sel, value) {
	var list = $(sel).options;
	for(var i = 0; i < list.length; i++) {
		if(list[i].value == value) {
			$(sel).options.selectedIndex = i;
			break;
		}
	}

}


/*
* 1. 이    름 : cfn_openModal
* 2. 설    명 : MODAL 팝업을 연다.
*               현재 IE 5 이상, 파폭 3 이상, 크롬 지원 확인
* 3. 인    자 : String url - 팝업 URL
*               Object - 모달창으로 넘길 인자
*               Number width - 모달창의 넓이
*               Number height - 모달창의 높이
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_openModal("/popInstitution.action");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 23    이민재     최초 등록
*/
function cfn_openModal(url, args, width, height) {
	if(cfn_isUndefined(args)) {
		args = "";
	}
	if(cfn_isUndefined(width)) {
		width = 600;
	}
	if(cfn_isUndefined(height)) {
		height = 400;
	}

	var x = screen.availWidth;
	var y = screen.availHeight

	x = (x - width) / 2;
	y = (y - height) / 2;

	var status = "center:1;dialogHeight="+height+"px;dialogWidth="+width+"px;dialogLeft="+x+"px;dialogTop="+y+"px;";
	return window.showModalDialog(url, args, status);

}

/*
* 1. 이    름 : cfn_openPop
* 2. 설    명 : 팝업을 연다.
* 3. 인    자 : String url - 팝업 URL
* 				String name - 팝업 NAME
*               Number width - 팝업창의 넓이
*               Number height - 팝업창의 높이
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_openPop("/popInstitution.action");
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 23    이민재     최초 등록
*/
function cfn_openPop(url, name, width, height) {
	if(cfn_isUndefined(width)) {
		width = 616;
	}
	if(cfn_isUndefined(height)) {
		height = 400;
	}

	var x = screen.availWidth;
	var y = screen.availHeight
	var p;
	x = (x - width) / 2;
	y = (y - height) / 2;

	var status = "height="+height+",width="+width+",left="+x+",top="+y+",scrollbars=1";
	if (cfn_isUndefined(name)) {
		p = window.open(url, "_blank", status);
	} else {
		p = window.open(url, name, status);
	}
	return p;
}
// 위와 동일, 단 스크롤바가 없다.
function cfn_openPop2(url, name, width, height) {
	if(cfn_isUndefined(width)) {
		width = 616;
	}
	if(cfn_isUndefined(height)) {
		height = 400;
	}

	var x = screen.availWidth;
	var y = screen.availHeight
	var p;
	x = (x - width) / 2;
	y = (y - height) / 2;

	var status = "height="+height+",width="+width+",left="+x+",top="+y+",scrollbars=no";
	if (cfn_isUndefined(name)) {
		p = window.open(url, "_blank", status);
	} else {
		p = window.open(url, name, status);
	}
	return p;
}

/*
* 1. 이    름 : cfn_fckModeSwitch
* 2. 설    명 : FCK 에디터의 편집 모드를 변경한다. 소스 <->WYSWYG
* 3. 인    자 : String name - 에디터 ID명
*               Sgring key - 소스 편집모드인지 에디터 편집 모드인지.(소스 0, WYSWYG 1)
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_fckModeSwitch('cd_nm', 0)
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 31    이민재     최초 등록
*/
function cfn_fckModeSwitch(name, key) {
	var oEditor = FCKeditorAPI.GetInstance(name) ;
	if(oEditor.EditMode == FCK_EDITMODE_SOURCE == key) {
		oEditor.SwitchEditMode(false) ;
	}
}

/*
* 1. 이    름 : cfn_startLoading
* 2. 설    명 : 화면에 진행중임을 나타내는 레이어를 띄운다.
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_startLoading();
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 04. 01    이민재     최초 등록
*/
function cfn_startLoading() {
	var width = document.body.clientWidth;		// 문서의 넓이
	var height = document.body.clientHeight;	// 문서의 높이
	var opacity = 0.8;			// 투명 정도
	var e = $("divLoading");

	if(cfn_isUndefined(e) || cfn_isNull(e)) {
		e = document.createElement("div");	// 레이어 엘리먼트 생성
		e.id = "divLoading";

		e.style.width = document.body.scrollWidth + "px";			// 레이어의 넓이를 window와 같게

		e.style.height = document.body.scrollHeight + "px";			// 레이어의 높이를 window와 같게
		e.style.position = "absolute";
		e.style.left = "0px";
		e.style.top = "0px";
		e.style.backgroundColor = "#ffffff";	// 레이어의 배경색(흰색)
		e.style.display = 'inline';
		e.style.zIndex = 0;						// 레이어의 z-index

		// 브라우저별 투명도 지정
		try{e.style.opacity = opacity;} catch(e) {}
		try{e.style.MozOpacity = opacity;} catch(e) {}
		try{e.style.filter = 'alpha(opacity='+Math.round(opacity * 100)+')';} catch(e) {}

		var t = document.createElement("img");	// 처리중임을 나타내는 이미지 생성
		t.src = '/nlic/img/progress.gif';			// 이미지 URL
		t.style.position = "absolute";
		t.style.left = (width - 100)/2 + "px";			// 이미지의 가로 위치 중앙
		t.style.top = (height - 100)/2 + "px";			// 이미지의 세로 위치 중앙
		t.style.display = 'inline';
		t.style.zIndex = 0;
		e.appendChild(t);
	}
	document.body.style.cursor = "wait";
	document.body.appendChild(e);
}

function cfn_startWating() {

	var width = document.body.clientWidth;// 문서의 넓이
	var height = document.body.clientHeight;// 문서의 높이
	var scroll_y = document.body.scrollTop;//현 스크롤 시에도 항상 가운데

	var	cOBJ = document.getElementById('listWrap');


	//alert("레이어레프트:"+cOBJ.offsetLeft);
	//alert("레이어폭:"+cOBJ.offsetHeight);
	//alert("레이어너비:"+cOBJ.offsetWidth);
	var pHeight = 32;
		var pWidth = 32;

	var sinist = width / 2 - pWidth / 2;
		var toppo = parseInt(cOBJ.offsetTop) + 200;

		//return;

	var opacity = 0.8;			// 투명 정도
	var e = $("divLoading");

	if(cfn_isUndefined(e) || cfn_isNull(e)) {
		e = document.createElement("div");	// 레이어 엘리먼트 생성
		e.id = "divLoading";
		e.style.width = document.body.scrollWidth;			// 레이어의 넓이를 window와 같게
		e.style.height = document.body.scrollHeight;			// 레이어의 높이를 window와 같게
		e.style.position = "absolute";
		e.style.left = (width/2)+"px";
		e.style.top= (toppo+scroll_y)+"px";
		//e.style.backgroundColor = "#ffffff";	// 레이어의 배경색(흰색)
		e.style.display = 'inline';
		e.style.zIndex = 0;						// 레이어의 z-index

		// 브라우저별 투명도 지정
		try{e.style.opacity = opacity;} catch(e) {}
		try{e.style.MozOpacity = opacity;} catch(e) {}
		try{e.style.filter = 'alpha(opacity='+Math.round(opacity * 100)+')';} catch(e) {}

		var t = document.createElement("img");	// 처리중임을 나타내는 이미지 생성
		t.src = '/nlic/img/common/bigLoading.gif';			// 이미지 URL
		t.style.position = "absolute";
		t.style.left = 0;			// 이미지의 가로 위치 중앙
		t.style.top = 0;			// 이미지의 세로 위치 중앙
		t.style.display = 'inline';
		t.style.zIndex = 0;
		e.appendChild(t);
	}
	document.body.style.cursor = "wait";
	document.body.appendChild(e);
}
/*
* 1. 이    름 : cfn_endLoading
* 2. 설    명 : 화면에서 진행중임을 나타내는 레이어를 지운다.
* 3. 인    자 :
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_endLoading();
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 04. 01    이민재     최초 등록
*/
function cfn_endLoading() {
	var e = $("divLoading");

	document.body.style.cursor = "default";
	if(!cfn_isUndefined(e) && !cfn_isNull(e)) {
		document.body.removeChild(e);
	}
}

/*
* 1. 이    름 : cfn_popReturn
* 2. 설    명 : 신고하기 팝업을 연다.
* 3. 인    자 : 	String contGubun - 컨텐츠 구분
*              String passiveId - 피신고자 ID
*              String keyNm1 - Link를 걸기위한 파라미터 이름
*              String keyVal1 - Link를 걸기위한 파라미터 값
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_popReturn("popIcs.action","test3","cont_seq","1");
* 6. 변경사항 :
*      변경일          변경자    		변경내용
*    --------------------------------------------------------------------------
*      2009. 04. 07    Hippie     	최초 등록
*/
function cfn_popReturn(contGubun, passiveId, keyNm1, keyVal1) {

	var url = "popReturn.action" + "?contGubun=" + contGubun + "&passiveId=" + passiveId + "&keyNm1=" + keyNm1 + "&keyVal1=" + keyVal1;

	var width = 500;
	var height = 400;

	var x = screen.availWidth;
	var y = screen.availHeight;

	x = (x - width) / 2;
	y = (y - height) / 2;

	var status = "height="+height+",width="+width+",left="+x+",top="+y+",scrollbars=0";

	window.open(url, "_blank", status);

}

/*
* 1. 이    름 : cfn_avoidBackspaceInReadonly
* 2. 설    명 : 읽기전용인 입력란에서 백스페이스를 눌렀을때 히스토리백 방지.
*               body 로드시에 readOnly 값이 참인 element에 대해 일괄적용됨.
*               문서의 스크립트 부분에 사용예의 코드가 들어가 있어야 함.
* 3. 인    자 : Event evt - 이벤트객체
* 4. 반 환 값 :
* 5. 사 용 예 : Event.observe(document.body, 'keydown', cfn_avoidBackspaceInReadonly, false);
* 6. 변경사항 :
*      변경일          변경자    		변경내용
*    --------------------------------------------------------------------------
*      2009. 04. 07    이민재     	최초 등록
*/
function cfn_avoidBackspaceInReadonly(evt){
	var child = Event.element(evt);
	//alert('Element id=' + child.id + ' was keydown. readonly = '+ child.readOnly + ", keycode " +evt.keyCode);
	//Event.stop(evt); //avoid another call related to 'parent_node' itself
	if(child.readOnly && evt.keyCode == Event.KEY_BACKSPACE) {
		Event.stop(evt);
		return false;
	}
}

/*
* 1. 이    름 : cfn_search
* 2. 설    명 : 엔터 입력시 조회하는 함수(cfn_search)를 호출한다.
*               단, 조회하는 함수는 fn_search 이고 조회조건 DIV 의 ID가 지정되어야야 한다.
*               사용예의 코드를 body가 onload된 뒤에 실행시킨다.
* 3. 인    자 : Event evt - 이벤트객체
* 4. 반 환 값 :
* 5. 사 용 예 : Event.observe('srchBox', 'keydown', cfn_search, false);
* 6. 변경사항 :
*      변경일          변경자    		변경내용
*    --------------------------------------------------------------------------
*      2009. 04. 07    이민재     	최초 등록
*/
function cfn_search(evt) {
	if(evt.keyCode == Event.KEY_RETURN) {
		var frm = Event.element(evt).id;
		fn_search(1, frm);
		Event.stop(evt);
		return false;
	}
}

////////////////////////////////////////////////////////////////////////////////////
//작성자 : indigo
//작성일 : 2007.01.21
//함수명 : cfn_checkString(검색어 특수문자방지)
//설  명 : 불필요한 html태그공격에 대비하기위해서...급조


function _CheckType(s,spc) {
	var i;
	for(i=0; i<s.length; i++) {
		if (spc.indexOf( s.substring(i, i+1)) > -1) {
			return false;
		}
	}
	return true;
}
function cfn_checkString(sInput) {
	var _NoInputTag = "~!#$%&*+@^`'{|}><[];:,\\"+"\n"+"\r";
	var sInput;
	if (!_CheckType(sInput,_NoInputTag)){
		alert("HTML태그나 부적절한 특수문자는 지원하지 않습니다.올바른 검색어를 입력해주세요.");
		return false;
	}
	return true;
}

function cfn_checkStringCom(sInput, sMsgStr) {
	var _NoInputTag = "/#$&`'{|}><;:\\\(\)";
	var sInput;
	if (!_CheckType(sInput,_NoInputTag)){
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
//함수명 : cfn_clearTagString(검색어 특수문자제거)
//설  명 : 불필요한 html태그공격에 대비하기위해서...급조

function cfn_clearTagString(sInput) {
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

function cfn_clearTagStringCom(sInput) {
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



////////////////////////////////////////////////////////////////////////////////////
//작성자 : indigo
//작성일 :
//함수명 : cfn_isValidDate(날짜 형식 체크 함수)
//설  명 : 입력날짜에 대한 포멧을 체크한다.월일 또는 년월일, 년2자리,숫자또는 숫자하이픈조합 모두 체크 허용


function isCheckType(s,spc) {
	var i;
	if(s !=''){
		for(i=0; i<s.length; i++) {
			if (spc.indexOf( s.substring(i, i+1)) < 0) {
				return false;
			}
		}
		return true;
	}
}

function cfn_isValidDate(obj) {

	if(obj.value.length > 0){
		var NUM = "0123456789-";
		if (!isCheckType(obj.value, NUM)) {
			alert('날짜형식에 맞지않은 문자가 입력되었습니다.');
			obj.value="";
			obj.focus();
			return false;
		}
	}
	/**
0303 4자리
03-03 5자리
090303 6자리
09-0303 7자리1
0903-03 7자리2
09-03-03 8자리1
20090303 8자리2
200903-03 9자리1
2009-0303 9자리2
2009-03-04 10자리
	 */
	var pt4 = /^\d{2}\d{2}$/;//4자리
	var pt5 = /^\d{2}-\d{2}$/;//5자리
	var pt6 = /^\d{2}\d{2}\d{2}$/;//6자리
	var pt71 = /^\d{2}-\d{2}\d{2}$/;//7자리
	var pt72 = /^\d{2}\d{2}-\d{2}$/;//7자리
	var pt81 = /^\d{2}-\d{2}-\d{2}$/;//8자리
	var pt82 = /^\d{4}\d{2}\d{2}$/;//8자리
	var pt91 = /^\d{4}\d{2}-\d{2}$/;//9자리
	var pt92 = /^\d{4}-\d{2}\d{2}$/;//9자리
	var pt10 = /^\d{4}-\d{2}-\d{2}$/;//10자리

	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();

	if (("" + month).length == 1) {
		month = "0" + month;
	}
	if (("" + day).length == 1) {
		day = "0" + day;
	}
	var y,m,d;
	if(obj.value.length >= 4 && obj.value.length <= 10) {

		switch(obj.value.length) {

		case 4://0303 4자리
		if (!pt4.exec(obj.value)) {
			alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n월일 입력예)"+month+""+day);
			obj.value ="";
			obj.focus();
			return false;
		}
		y = year;
		m = parseInt(obj.value.substr(0,2), 10) - 1;
		d = parseInt(obj.value.substr(2,2), 10);
		break;
		case 5://03-03 5자리
		if (!pt5.exec(obj.value)) {
			alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n월일 입력예)"+month+"-"+day);
			obj.value ="";
			obj.focus();
			return false;
		}
		y = year;
		m = parseInt(obj.value.substr(0,2), 10) - 1;
		d = parseInt(obj.value.substr(3,2), 10);
		break;
		case 6://090303 6자리
		if (!pt6.exec(obj.value)) {
			alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year.substr(0,2)+""+month+""+day);
			obj.value ="";
			obj.focus();
			return false;
		}
		y = parseInt(obj.value.substr(0,2), 10);
		m = parseInt(obj.value.substr(2,2), 10) - 1;
		d = parseInt(obj.value.substr(4,2), 10);
		break;
		case 7:

			if((obj.value).substr(2,1) =='-'){//09-0303 7자리1
				if (!pt71.exec(obj.value)) {
					alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year.substr(0,2)+"-"+month+""+day);
					obj.value ="";
					obj.focus();
					return false;
				}
			m = parseInt(obj.value.substr(3,2), 10) - 1;

			}else if((obj.value).substr(4,1) =='-'){//0903-03 7자리2
				if (!pt72.exec(obj.value)) {
					alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year.substr(0,2)+""+month+"-"+day);
					obj.value ="";
					obj.focus();
					return false;
				}
			m = parseInt(obj.value.substr(2,2), 10) - 1;
			}else{
				alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.정확한 날짜를 입력해주세요.\n예)"+year+"-"+month+"-"+day+" 또는)"+year+""+month+""+day);
				obj.value ="";
				obj.focus();
				return false;
			}
			y = parseInt(obj.value.substr(0,2), 10);
			d = parseInt(obj.value.substr(5,2), 10);

			break;
		case 8:
			if((obj.value).substr(2,1) =='-' && (obj.value).substr(5,1) =='-'){//09-03-03 8자리1
				if (!pt81.exec(obj.value)) {
					alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year.substr(0,2)+"-"+month+""+day);
					obj.value ="";
					obj.focus();
					return false;
				}
			y = parseInt(obj.value.substr(0,2), 10);
			m = parseInt(obj.value.substr(3,2), 10) - 1;

			}else{//20090303 8자리2
				if (!pt82.exec(obj.value)) {
					alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year+""+month+""+day);
					obj.value ="";
					obj.focus();
					return false;
				}
			y = parseInt(obj.value.substr(0,4), 10);
			m = parseInt(obj.value.substr(4,2), 10) - 1;
			}
			d = parseInt(obj.value.substr(6,2), 10);
			break;
		case 9:
			if((obj.value).substr(6,1) =='-'){//200903-03 9자리1
				if (!pt91.exec(obj.value)) {
					alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year+""+month+"-"+day);
					obj.value ="";
					obj.focus();
					return false;
				}

			m = parseInt(obj.value.substr(4,2), 10) - 1;

			}else if((obj.value).substr(4,1) =='-'){//2009-0303 9자리2
				if (!pt92.exec(obj.value)) {
					alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year+"-"+month+""+day);
					obj.value ="";
					obj.focus();
					return false;
				}
			m = parseInt(obj.value.substr(5,2), 10) - 1;
			}else{
				alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year+"-"+month+"-"+day+" 또는)"+year+""+month+""+day);
				obj.value ="";
				obj.focus();
				return false;
			}
			y = parseInt(obj.value.substr(0,4), 10);
			d = parseInt(obj.value.substr(7,2), 10);
			break;
		case 10:
			if (!pt10.exec(obj.value)) {
				alert("[" + obj.value + "]" + " 날짜형식에 맞지않습니다.\n년월일 입력예)"+year+"-"+month+"-"+day+" 또는)"+year+""+month+""+day);
				obj.value ="";
				obj.focus();
				return false;
			}
			y = parseInt(obj.value.substr(0,4), 10);
			m = parseInt(obj.value.substr(5,2), 10) - 1;
			d = parseInt(obj.value.substr(8,2), 10);
			break;
		}

		var dt = new Date(y, m, d);

		if (dt.getMonth() == m && dt.getDate() == d) {
			m = parseInt(m,10)+1;

			if (("" + y).length == 1) {
				y = "200" + y;
			}else if(("" + y).length==2){
				y = "20"+y;
			}

			if(("" + m).length==1){
				m = "0"+m;
			}
			if(("" + d).length==1){
				d = "0"+d;
			}
			obj.value = y+"-"+m+"-"+d;
			return true;

		} else {
			alert("적합하지않은 날짜가 입력되었습니다. 해당년월에 마지막 일자를 확인하세요.\n년월일 입력예)"+year+"-"+month+"-"+day+" 또는)"+year+""+month+""+day);
			//obj.value = year+"-"+month+"-"+day;
			obj.value ="";
			obj.focus();
			return false;
		}

	}else{
		if(obj.value.length > 0) {
			alert("날짜 표시는 년월일 또는 월일을 숫자로 입력합니다.구분단위로 -(하이픈허용).\n년월일 입력예)"+year+"-"+month+"-"+day+" 또는)"+year+""+month+""+day);
			//obj.value = year+"-"+month+"-"+day;
			obj.value ="";
			obj.focus();
			return false;
		}else{
			return true;
		}
	}
}



//작성자 : indigo
//작성일 : 2009-04-15
//함수명 : cfn_maxLen(object,maxValue)
//설   명 : onKey이벤트시 체크    = 오브젝트와 제한길이(byte값)을 넣어준다.
//예) onkeypress='cfn_maxLen(this,100);'

function cfn_maxLen(obj,lens) {
	var t;
	var msglen,defaultlen;
	defaultlen = lens; //byte수
	msglen = defaultlen;
	var fix = obj.value.length;
	var tmpstr = ""
		for(var k = 0; k < fix; k++) {
			t = obj.value.charAt(k);
			if (escape(t).length > 4){
				msglen -= 2;
			}else{
				msglen--;
			}
			if(msglen < 0) {
				alert(defaultlen+"자 미만으로 입력할 수 있습니다.");
				obj.value = tmpstr;
				msglen =0;
				break;
			}else{
				tmpstr += t;
				obj.focus();
			}
		}
}

/*
* 1. 이    름 : cfn_popPost
* 2. 설    명 : 팝업 (POST 전송을 위한 팝업)
* 3. 인    자 : 	String url - URL 정보
*              String winName - target을 걸기위한  Window ID
*              String width - 팝업의 가로크기
*              String height - 팝업의 세로크기
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_popPost("popIcs.action","test3","400","500");
* 6. 변경사항 :
*      변경일          		변경자    		변경내용
*    --------------------------------------------------------------------------
*      2009. 04. 24    Hippie     	최초 등록
*/
function cfn_popPost(url, winName, width, height) {

	var x = screen.availWidth;
	var y = screen.availHeight;

	x = (x - width) / 2;
	y = (y - height) / 2;

	var status = "height="+height+",width="+width+",left="+x+",top="+y+",scrollbars=1";

	var aa = window.open(url, winName, status);

}


////////////////////////////////////////////////////////////////////////////////////
//작성자 : indigo
//작성일 : 2009-05-12
//함수명 : cfn_getByte(object)
//설   명 : onKey이벤트시 object.value의 byte값리턴
//예) onkeypress='cfn_getByte(this);'

function cfn_getByte(obj){
	var t;
	var msglen=0;
	var fix = obj.value.length;
	for(var k = 0; k < fix; k++) {
		t = obj.value.charAt(k);
		if (escape(t).length > 4){
			msglen += 2;
		}else{
			msglen++;
		}
	}
	return msglen;
}


/*
* 1. 이    름 : cfn_markRow
* 2. 설    명 : 테이블에선 선택한 row의 스타일을 변경한다.
* 3. 인    자 : Object o - 테이블의 tr 객체
* 4. 반 환 값 :
* 5. 사 용 예 : onMouseOver="cfn_rollOver(this)" onMouseOut="cfn_rollOut(this)"
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009.05.25 indigo
*/
//현재 선택된 객체의 위치를 찾는다.
function getSelectClick() {
	var obj = event.srcElement
	while (obj.tagName != 'TD') obj = obj.parentElement
	return obj;
}
//객체의 로우값을 리턴
function getTrIdx(){
	var idx = getSelectClick().parentElement.rowIndex;
	return idx;
}
//마우스 오버시
function cfn_mouseOver(o) {
	Element.addClassName(o, "over");
}
//마우스아웃시
function cfn_mouseOut(o) {
	Element.removeClassName(o, "over");
}

/*
* 1. 이    름 : cfn_markRow
* 2. 설    명 : 테이블에선 선택한 row의 스타일을 변경한다.
* 3. 인    자 : Object o - 테이블의 tr 객체
* 4. 반 환 값 :
* 5. 사 용 예 : <tr id="trList$!cnt" ondblclick="fn_viewDetail('$!row.sno');cfn_markRow(this)">
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2009. 03. 23    이민재     최초 등록
*      2009. 05. 25  indigo 마우스오버/아웃시 변경된 스타일시트 적용
*/
function cfn_markRow(o) {
	var tr = document.getElementsByTagName("tr");
	if(!cfn_isNull(tr)) {
		for(var i = 0; i < tr.length; i++) {
			Element.removeClassName(tr[i], "clicked")
		}
	}
	Element.addClassName(o, "clicked");
}

/*
* 1. 이    름 : cfn_bindForm
* 2. 설    명 : JSON 데이터를 선택된 폼에 바인딩한다.
* 3. 인    자 : String frm - 폼 아이디
* 				JSON Object json - JSON 데이터
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_bindForm("frmDetail", jsondata);
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2010. 03. 04   이민재     최초 등록
*/
function cfn_bindForm(frm, json){
	var eleList = $(frm).getElements();
	var tagName;
	var type;
	var value;

	eleList.each(function(input){
		tagName = input.tagName.toLowerCase();
		value = "json." + input.name;
		//		Log.print(tagName+" json."+value);
		value = (json[input.name]==null)? '' : json[input.name].valueOf();
		if (!cfn_isUndefined(value)) {
//			Log.print(value);
			if (tagName == "input") {
				type = input.type.toLowerCase();
				//				Log.print(type);
				if (type == "text" || type == "hidden") { 				// 입력폼 타입이 test/hidden
					//					Log.print("json." + input.name + "_" + value);
					input.value = value;
				} else if (type == "radio" || type == "checkbox") { 	// 입력폼 타입이 radio/checkbox
					if (input.value == value) {
						input.checked = true;
					}
				}
			} else if (tagName == "select") { 							// 입력폼이 select
				var optionList = $A(input.getElementsByTagName('option'));
				//				Log.print(optionList);
				for (var i = 0; i < optionList.length; i++) {
					opt = optionList[i];
					//					Log.print(opt.value +"="+value);
					if (opt.value == value) {
						opt.selected = true;
						break;
					}
				}
			} else if (tagName == "textarea") { 						// 입력폼이 textarea
				//엔터키 설정
				input.value = value;
			}
		}
	});
}

/*
* 1. 이    름 : cfn_bindById
* 2. 설    명 : JSON 데이터를 ID에 따라 바인딩한다.
* 				단, radio 엘리먼트의 경우 이름에 따라 바인딩 된다.
* 3. 인    자 : JSON Object json - JSON 데이터
* 				String prefix - 바인딩할 ID의 접두어
* 				String suffix - 바인딩할 ID의 접미어
* 4. 반 환 값 :
* 5. 사 용 예 : cfn_bindForm("frmDetail", jsondata);
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2010. 03. 04   이민재     최초 등록
*/
function cfn_bindById(json, prefix, suffix) {
	var value;
	var id;
	var tagName;
	var type;
	var ele;

	if(prefix == null) {prefix = "";}									// 접두어 처리
	if(suffix == null) {suffix = "";}									// 접미어 처리

	for (key in json) {
		id = prefix + key + suffix;										// 접두어와 접미사를 붙인 ID
		value = (json[key] == null)? '' : json[key].valueOf();
		ele = $(id);

		var eleList = $A(document.getElementsByName(id));

		// input 엘리먼트의 radio 타입 처리
		for(var i = 0; i < eleList.length;i++){
			e = eleList[i];
			if(e.tagName.toLowerCase() == 'input' && e.type.toLowerCase() == "radio" && e.value == value) {
				e.checked = true;
				continue;
			}
		}

		if(ele != null) {												// ID가 있으면 처리
			tagName = ele.tagName.toLowerCase();

			if (tagName == "input") {
				type = ele.type.toLowerCase();

				if (type == "text" || type == "hidden") { 				// 엘리먼트 타입이 test/hidden
					ele.value = value;
				} else if (type == "checkbox") { 	// 엘리먼트 타입이 checkbox
					if (ele.value == value) {
						ele.checked = true;
					}
				}
			} else if (tagName == "select") { 							// select 엘리먼트
				var optionList = $A(ele.getElementsByTagName('option'));
				for (var i = 0; i < optionList.length; i++) {
					opt = optionList[i];
					if (opt.value == value) {
						opt.selected = true;
						break;
					}
				}
			} else if (tagName == "textarea") { 						// textarea 엘리먼트
				ele.update(value);
			} else {
				ele.update(value);
			}
		}
	}
}


var JsonUtil = {
	alert : function(json) {
		if(json != null && json.msg != null && !cfn_isEmpty(json.msg)) {
			alert(json.msg);
		}
	},

	isError : function(json) {
		if(json.error == 1) {
			return false;
		} else {
			return true;
		}
	}
}


/**
* 1. 이    름 : cfn_vaildation
* 2. 설    명 : 그리드내 필수값 체크
* 3. 인    자 : Object
* 4. 반 환 값 : Boolean True  - 필수값을 모두 입력했을때
*               Boolean False  - 필수값이 비어있을때
* 5. 사 용 예 : if(!cfn_vail(cellValue, rowNum)){return;};
* 6. 변경사항 : jQuery("#listDtl1") 의 id값을 변경가능하도록..
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2010. 04. 02    최수빈     최초 등록
*/
function cfn_vaildation(cellValue, rowNum, listDtl){
	var val = 0;

	if(rowNum > 0){
		for(var z=1; z<= rowNum; z++){
			for (k = 0; k < cellValue.length; k++){
				var cellText = jQuery(listDtl).getCell(z, cellValue[k][0]);
				//alert("전체~~~" + i + "  ::  cellText  ::  " + cellText);
				// 그리드 셀에 inputbox 가 있을때
				if(cellText != ""){
					var cell = cellText.substr(0,1);
					if(cell == "<"){
						var splText = cellText.split(" ");
						for(var i=0; i<splText.length; i++ ){
							var dtSplText = splText[i].split("=");
							for(var j=0; j<dtSplText.length; j++ ){
			                    if(dtSplText[j] == "value"){
									val++;
			                    }

							}
						}
						if(val == 0){
							//alert("value 없음");
							alert(cellValue[k][1] + " 항목을 반드시 입력해 주십시오.");
							return false;
						}else{
							val = 0;
						}
					}
				}
			}
		}// end for
	}

	return true;

}

/**
* 1. 이    름 : initMoving
* 2. 설    명 : 스크롤 따라 퀵 메뉴 이동
* 3. 인    자 : target, position, topLimit, btmLimit
* 4. 반 환 값 :
* 5. 사 용 예 : <script type="text/javascript">initMoving(document.getElementById("rightFix"), 50, 294, 50);</script>
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2010. 05. 28    최수빈     최초 등록
*/
function initMoving(target, position, topLimit, btmLimit) {
    if (!target)
        return false;


    var obj = target;
    obj.initTop = position;
    obj.topLimit = topLimit;
    obj.bottomLimit = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - btmLimit - obj.offsetHeight;


    obj.style.position = "absolute";
    obj.top = obj.initTop;
    obj.left = obj.initLeft;


    if (typeof(window.pageYOffset) == "number") {    //WebKit
        obj.getTop = function() {
            return window.pageYOffset;
        }
    } else if (typeof(document.documentElement.scrollTop) == "number") {
        obj.getTop = function() {
            return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        }
    } else {
        obj.getTop = function() {
            return 0;
        }
    }


    if (self.innerHeight) {    //WebKit
        obj.getHeight = function() {
            return self.innerHeight;
        }
    } else if(document.documentElement.clientHeight) {
        obj.getHeight = function() {
            return document.documentElement.clientHeight;
        }
    } else {
        obj.getHeight = function() {
            return 500;
        }
    }


    obj.move = setInterval(function() {
        if (obj.initTop > 0) {
            pos = obj.getTop() + obj.initTop;
        } else {
            pos = obj.getTop() + obj.getHeight() + obj.initTop;
            //pos = obj.getTop() + obj.getHeight() / 2 - 15;
        }


        if (pos > obj.bottomLimit)
            pos = obj.bottomLimit;
        if (pos < obj.topLimit)
            pos = obj.topLimit;


        interval = obj.top - pos;
        obj.top = obj.top - interval / 3;
        obj.style.top = obj.top + "px";
    }, 30)
}


/**
 * 작성자 : 김중태
 * 작성일 : 2010-05-28
 * 함수명 : cfn_maxLen2(object,maxValue)
 * 반환값 : 길이조건에 충족되면 true, 충족되지 못하면 false를 반환한다.
 * 설   명 : onKey이벤트시 체크    = 오브젝트와 제한길이(byte값)을 넣어준다.
 * 예) onkeypress='cfn_maxLen2(this,100);'
 */
function cfn_maxLen2(obj,lens) {
	var t;
	var msglen,defaultlen;
	defaultlen = lens; //byte수
	msglen = defaultlen;
	var fix = obj.value.length;
	var tmpstr = ""

	for(var k = 0; k < fix; k++) {
		t = obj.value.charAt(k);
		if (escape(t).length > 4){
			msglen -= 2;
		}else{
			msglen--;
		}
		if(msglen < 0) {
			alert(defaultlen+"자 미만으로 입력할 수 있습니다.");
			obj.value = tmpstr;
			msglen =0;
			return false;
		}else{
			tmpstr += t;
			obj.focus();
		}
	}
	return true;
}

function getHasdays(monthtoknow,yeartoknow)
{
	switch(monthtoknow)
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:

		return 31;
		break;

		case 4:
		case 6:
		case 9:
		case 11:

		return 30;
		break;

		case 2:
			if (yeartoknow==0)
				return 29;
			if ((yeartoknow%4!=0) || ((yeartoknow%100==0)&&(yeartoknow%400!=0)) )
				return 28;
			else
				return 29;
	}
}

// 권한관련 함수, 권한이 없을 경우 다음 함수를 실행하여 alert 창을 띄워, 권한이 없다는 메세지를 보여준다.
function noBtnAuth() {
	alert("권한이 없습니다.");
}

/* 퀵메뉴 위치 고정 */
function bodyWidth() {
	if(document.body.clientWidth < 960) {
		document.getElementById('rightFix').style.left = 968 + 'px';
		// frontTop 마이페이지 메뉴
		document.getElementById('menu1').style.left = 736 + 'px';
	} else {
		document.getElementById('rightFix').style.left = (document.body.clientWidth - 960) / 2 + 968 + 'px';
		// frontTop 마이페이지 메뉴
		document.getElementById('menu1').style.left = (document.body.clientWidth - 960) / 2 + 736 + 'px';
	}
}

//전화번호 지역번호 배열(이은용)
localNum = new Array("02","031","032","033","041","042","043","051","052","053","054","055","061","062","063","064","010","011","016","017","018","019","0502","0504","0130","0505","0506","0303","070","080");


function posChk() {
	var chk = false;

	if ( location.href.indexOf('PB050402') > 0 ) chk = true;
	if ( location.href.indexOf('PB050403') > 0 ) chk = true;
	if ( location.href.indexOf('PB040302') > 0 ) chk = true;
	if ( location.href.indexOf('PB050401') > 0 ) chk = true;
	if ( location.href.indexOf('PB040301') > 0 ) chk = true;
	if ( location.href.indexOf('PB050501') > 0 ) chk = true;
	if ( location.href.indexOf('PB100103') > 0 ) chk = true;

	if ( location.href.indexOf('PB0504011') > 0 ) chk = true;
	if ( location.href.indexOf('PB050401') > 0 ) chk = true;
	if ( location.href.indexOf('PB050403') > 0 ) chk = true;
	if ( location.href.indexOf('PB040303') > 0 ) chk = true;

	return chk;
}

function posPopChk() {
	var chk = false;

	//if ( location.href.indexOf('PB0504011') > 0 ) chk = true;
	//if ( location.href.indexOf('PB050401') > 0 ) chk = true;
	//if ( location.href.indexOf('PB050403') > 0 ) chk = true;
	//if ( location.href.indexOf('PB040303') > 0 ) chk = true;

	return chk;
}

/**
 * Number 인지 체크 (Decimal 은 false 이다)
 * @param ele ( text 또는 Form Object )
 */
function isNumeric(ele){
    //var elevalue = getElementValue(ele);
    var elevalue = ele.value;
    if(elevalue.length == 0) return false;
    for(var i=0;i<elevalue.length;i++){
    	var c=elevalue.charCodeAt(i);
       	if( !(  48 <= c && c <= 57 ) ) {
       		return false ;
       	}
     }
     return true;
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

function fn_escroInfoPopAdi() {

	var url = "/jsp/adidas/escroInfoPop.jsp";
	var winName = "EscroPop";

	var width = 630;
	var height = 585;
 	var wid = (screen.width)/2 - width/2 ;
 	var hei = (screen.height)/2 - height/2;
 	var win = window.open(url, winName, "menubar=no, scrollbars=yes, resizable=no, width=" + width + ", height=" + height+ ",top=" + hei + ",left=" + wid + "");
 	if(win != null)
 		win.focus();
	target = winName;
}

function fn_escroInfoPopRbk() {

	var url = "/jsp/reebok/escroInfoPop.jsp";
	var winName = "EscroPop";

	var width = 630;
	var height = 585;
 	var wid = (screen.width)/2 - width/2 ;
 	var hei = (screen.height)/2 - height/2;
 	var win = window.open(url, winName, "menubar=no, scrollbars=yes, resizable=no, width=" + width + ", height=" + height+ ",top=" + hei + ",left=" + wid + "");
 	if(win != null)
 		win.focus();
	target = winName;
}

function fn_certifiedInfoPopAdi() {
	var url = "/jsp/adidas/CertifiedInfoPop.jsp";
	var winName = "EscroPop";

	var width = 680;
	var height = 585;
 	var wid = (screen.width)/2 - width/2 ;
 	var hei = (screen.height)/2 - height/2;
 	var win = window.open(url, winName, "menubar=no, scrollbars=yes, resizable=no, width=" + width + ", height=" + height+ ",top=" + hei + ",left=" + wid + "");
 	if(win != null)
 		win.focus();
	target = winName;
}

function fn_certifiedInfoPopRbk() {
	var url = "/jsp/reebok/CertifiedInfoPop.jsp";
	var winName = "EscroPop";

	var width = 680;
	var height = 585;
 	var wid = (screen.width)/2 - width/2 ;
 	var hei = (screen.height)/2 - height/2;
 	var win = window.open(url, winName, "menubar=no, scrollbars=yes, resizable=no, width=" + width + ", height=" + height+ ",top=" + hei + ",left=" + wid + "");
 	if(win != null)
 		win.focus();
	target = winName;
}


/**
* 1. 이    름 : serializeObject
* 2. 설    명 : 
* 3. 인    자 : Object
* 4. 반 환 값 : Object
* 5. 사 용 예 : 
* 6. 변경사항 :
*      변경일          변경자     변경내용
*    --------------------------------------------------------------------------
*      2013. 02. 18    hjan       최초 등록
*/
function serializeObject(a){
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

/*
function right(e) {
	if (navigator.appName == 'Netscape' &&
			(e.which == 3 || e.which == 2))
		return false;
	else if (navigator.appName == 'Microsoft Internet Explorer' &&
			(event.button == 2 || event.button == 3)) {
		//alert("우측 마우스 버튼은 사용하실 수 없습니다.");
		return false;
	}
	return true;
}

if (document.layers) window.captureEvents(Event.MOUSEDOWN);
window.onmousedown=right;
document.onmousedown=right;
*/

function mouseClickRight() {
	if ( (event.button == 2) || (event.button == 3) ) {
		document.body.oncontextmenu = function(){return false;};
		document.body.ondragstart 	= function(){return false;};
		document.body.onselectstart = function(){return false;};
		return;
	}
}
//document.onmousedown = mouseClickRight;

/**
 * 리턴 url (아디다스&리복)
 * 사이트 구분 : 현재 URL 로 구분
 * 외부 : 메인 이동, 내부 : 이전 페이지 이동
 */
function referUrl() {
	var preUrl = window.location.href;
	var refUrl = document.referrer;
	var goUrl = refUrl;
	
	if(preUrl.indexOf('reebok.co.kr') < 1 ) {
		if(refUrl.indexOf('adidas.co.kr') < 1) {
			goUrl = '/Main/mainDisp.action'+ refUrlParam(preUrl);
		} 
	} else {
		if(refUrl.indexOf('reebok.co.kr') < 1) {
			goUrl = '/Main/mainDisp.action'+ refUrlParam(preUrl);
		}
	}
	
	location.href = goUrl;
}

function refUrlParam(preUrl) {
	var tmp_param = '';
	if (indexOfSub(preUrl,"?") >= 0) {
		var tmp_param = '';
		if (indexOfSub(preUrl,"?") < preUrl.length) {
			var tmp_param_str = preUrl.substring(indexOfSub(preUrl,"?")+1, preUrl.length);
			
			var arrParams= tmp_param_str.split("&");
			for ( var i = 0; i < arrParams.length; i++) {
				if ( arrParams[i] != '' ) {
					var tmpParams = arrParams[i].split("=");
					if (tmp_param != '' ) tmp_param += "&";
					if (tmpParams.length>1){
						tmp_param += tmpParams[0] + "=" + encodeURIComponent(tmpParams[1]);
					} else {
						tmp_param += tmpParams[0] + "=";
					}
				}
			}
			tmp_param = '?' + tmp_param;
		}
	}
	return retUrl = tmp_param;
}

function indexOfSub(str, searchChar ) {
	if (str == null || str.length == 0) {
		return -1;
	}
	return str.indexOf(searchChar);
}

function noPastingCheck(param) {
	var ctrlDown = false;
	var ctrlKey = 17, vKey = 86, cKey = 67;
	jQuery(document).keydown(function(e) {
		if (e.keyCode == ctrlKey) ctrlDown = true;
	}).keyup(function(e) {
		if (e.keyCode == ctrlKey) ctrlDown = false;
	});
	
	jQuery("#"+param).keydown(function(e){
		if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey)) return false;
	});
}
