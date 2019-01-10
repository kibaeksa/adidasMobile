//검색된 키워드로 다시 검색
function doTcKeywordSearch(keyword) {

	var formNm = document.frmSrch;
	formNm.S_PROD_NM.value = keyword;

	if("" == keyword.trim() || -1 != keyword.indexOf("검색어")){
		alert("검색어를 입력해주세요.");
		formNm.S_PROD_NM.focus();
		return;
	}//end if


	if(keyword.length > 80){
		alert("검색어가 너무 깁니다.");
		formNm.S_PROD_NM.select();
		return;
	}
	if(!fn_checkStringSearch(keyword)) {
		formNm.S_PROD_NM.select();
		return;
	}

	formNm.action = _COMM_HTTP_CONTEXT_URL + "/Search/searchIR.action";
	formNm.query.value = keyword;

	formNm.submit();
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
			return decodeURIComponent(cookie.substring(startIndex + 1, endIndex)).replace("\\+", " ");
		}else {
			// 쿠키 내에 해당 쿠키가 존재하지 않을 경우
			return false;
		}
	}else {
		// 쿠키 자체가 없을 경우
		return false;
	}
}

function fnDeletePopSearchWord(name){
	//event.returnValue = false;
	//event.cancelBubble = true;
	var arrWords = getCookie('REC_SE_WORDS');

	if(arrWords.indexOf(name+'#&#') > -1){
		arrWords = arrWords.replace(name+'#&#', '');
	}else if(arrWords.indexOf('#&#'+name) > -1){
		arrWords = arrWords.replace('#&#'+name, '');
	}else if(arrWords.indexOf(name) > -1){
		arrWords = '';
	}

	var expdate = new Date();
	expdate.setTime(expdate.getTime() + 24*60*60*1000); // 1day

	var html = '';
	var rows = arrWords.split('#&#');

	if(arrWords == ''){
		rows = '';
	}

	if(rows.length > 0){
		for(i=rows.length - 1 ; i >= 0 ; i--){
			html += '<li><a href="javascript:doTcKeywordSearch(\''+rows[i]+'\');">'+rows[i]+'</a><a href="javascript:fnDeletePopSearchWord(\''+rows[i]+'\');" class="close icons" data-icon=""></a></li>';
		}
	}else{
		html += '<li class="no_data">최근 검색하신 내역이 없습니다.</li>';
	}

	jQuery('#keyword_recent').html(html);

	setCookie("REC_SE_WORDS", arrWords, expdate);
}

function setCookie (name, value, expires) {
	document.cookie = name + "=" + encodeURI(value) + "; path=/; domain=.reebok.co.kr; expires=" + expires.toGMTString() + ";";
}


//상품평작성
function fn_goEvalWrite(pVal, pProdCd, pPageGb) {
	// 상품평 작성가능 여부
	if(pVal != "Y") {
		alert("상품평 작성은 상품의 구매 및 배송 완료 이후 1회만 작성 가능합니다. \n\n\r※ 상품평을  이미 작성한 내역이 있는지 확인 하여 주십시오.");
		return;
	}

	var param = "?prodCD="+pProdCd;
	if(typeof(pPageGb) != "undefined" && pPageGb != '') {
		param += "&pageGb="+pPageGb;
	}

	location.href = _COMM_HTTP_CONTEXT_URL + "/Product/prdEvalWrite.action"+param;
}

//상품평수정
function fn_goEvalModify(prodCd, prodrewId) {
	var param = "?prodCd="+prodCd+"&prodrewId="+prodrewId+"&pageGb=3";
	location.href = _COMM_HTTP_CONTEXT_URL + "/Product/prdEvalModify.action"+param;
}

//스태프 상품평작성
function fn_goEvalStaffWrite(pProdCd, pPageGb) {
	var param = "?prodCD="+pProdCd;
	if(typeof(pPageGb) != "undefined" && pPageGb != '') {
		param += "&pageGb="+pPageGb;
	}

	location.href = _COMM_HTTP_CONTEXT_URL + "/Product/prdEvalStaffWrite.action"+param;
}

//스태프 상품평수정
function fn_evalStaffMdf(pEvalStaffId, pProdCd, pPageGb) {
	var param = "?prodrewId="+pEvalStaffId;
	param += "&prodCd="+pProdCd;
	if(typeof(pPageGb) != "undefined" && pPageGb != '') {
		param += "&pageGb="+pPageGb;
	}

	location.href = _COMM_HTTP_CONTEXT_URL + "/Product/prdEvalStaffMdf.action"+param;
}

//장바구니 수정
function fnSetMarketBtn(cnt){
	if(cnt > 0){
		jQuery('#hd_cart_cnt').addClass("active");
		jQuery('#hd_cart_cnt').html('<span class="sprite-image"></span><strong>'+cnt+'</strong>');
	}else{
		jQuery('#hd_cart_cnt').removeClass("active");
		jQuery('#hd_cart_cnt').html('');
	}
}

/* 회원가입 */
function goMemJoin(){
	if( checkBrower("회원가입은") ) return;
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/Member/memJoin.action";
}

/* SNS간편가입 추가 */
function goSnsJoin(state){
	if( checkBrower("카카오 회원가입은") ) return;

	location.href = _KAKAO_SNS_LOGIN_URL+'&state='+state;
}

/* 내가 작성한 상품평 */
function goEvalList(){
	location.href = _COMM_HTTP_CONTEXT_URL + "/MyPage/mypageEvalList.action";
}

/** 2018-04-23 추가부분 **/
/* MY SNS */
function goSns(){
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/MyPage/mypageSns.action";
}

/* 배송지 관리 */
function goDlvInfo(){
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/MyPage/mypageDlvInfoList.action";
}

/* 주문/배송 조회 */
function goOrdDeliSelState(state, term){
	var param = "?state="+state+"&term="+term;
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/MyPage/mypageOrdDeliSel.action" + param;
}

/* FAQ 팝업 */
function fnSearchDiviPop(divi){

	var url = _COMM_HTTP_CONTEXT_URL + "/Faq/faqList.action";
	var param = '?FAQ_DIVI=' + divi;

	window.open(url + param);
}