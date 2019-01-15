function address_removal(){
	window.addEventListener("load",function(){
		setTimeout(scrollTo,0,0,1);
	},false);
}

/* 메인 */
function goMain(){
	location.href = _COMM_HTTP_CONTEXT_URL + "/Main/mainDisp.action";
}

/* 회원가입 */
function goMemJoin(){
	if( checkBrower("회원가입은") ) return;
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/Member/memJoin.action";
}

/* 카테고리 대분류 */
function goCtgr(gubun){
	location.href = _COMM_HTTP_CONTEXT_URL + "/Product/eachCatPrdList.action?siteCd=1&gubun="+gubun;
}

/* PC 사이트 */
function goPcSite(){
	location.href = "http://shop.reebok.co.kr/reeMain.action?mobile_yn=Y";
}

/* 매장안내 */
function goStore(){
	location.href = _COMM_HTTP_CONTEXT_URL + "/Customer/customerStoreList.action";
}

/* 아이디 찾기 */
function goFindUserId(){
	if( checkBrower("아이디 찾기는") ) return;
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/Member/findUserId.action";
}

/* 비밀번호 찾기 */
function goFindUserPwd(){
	if( checkBrower("비밀번호 찾기는") ) return;
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/Member/findUserPwd.action";
}

/* 마이페이지 메인 */
function goMypageIndex(){
	if( checkBrower("마이페이지는") ) return;
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/MyPage/mypageIndex.action";
}

/* 주문/배송 조회 */
function goOrdDeliSel(start, end, term){

	var param = "";

	if( typeof(start) != "undefined" ){

		if( param != "" )
			param += "&";
		else
			param += "?";

		param += "start=" + start;
	}

	if( typeof(end) != "undefined" ){

		if( param != "" )
			param += "&";
		else
			param += "?";

		param += "end=" + end;
	}

	if( typeof(term) != "undefined" ){

		if( param != "" )
			param += "&";
		else
			param += "?";

		param += "term=" + term;
	}

	location.href = _COMM_HTTP_CONTEXT_URL + "/MyPage/mypageOrdDeliSel.action" + param;
}

/* 취소/반품 조회 */
function goClaimList(work, start, end, term){
	var param = "";

	if( typeof(work) != "undefined" ){
		if( param != "" )
			param += "&";
		else
			param += "?";

		param += "work=" + work;
	}

	if( typeof(start) != "undefined" ){
		if( param != "" )
			param += "&";
		else
			param += "?";

		param += "start=" + start;
	}

	if( typeof(end) != "undefined" ){
		if( param != "" )
			param += "&";
		else
			param += "?";

		param += "end=" + end;
	}

	if( typeof(term) != "undefined" ){
		if( param != "" )
			param += "&";
		else
			param += "?";

		param += "term=" + term;
	}

	location.href = _COMM_HTTP_CONTEXT_URL + "/MyPage/mypageClaimList.action" + param;
}

/* 취소/반품 결제대기 */
function goClaimRepayList(){
	location.href = _COMM_HTTP_CONTEXT_URL + "/MyPage/mypageClaimRepayList.action";
}

/* 교환 결제대기 */
function goExchgRepayList(){
	location.href = _COMM_HTTP_CONTEXT_URL + "/MyPage/mypageExchgRepayList.action";
}

/* 회원정보수정 */
function goMenInfoUpd(){
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/MyPage/mypageMenInfoUpd.action";
}

/* 회원정보 수정입력 페이지 이동을 위한 Action 부문 */
function goMypageMemInfoUptInpt() {
	location.href = _COMM_HTTP_CONTEXT_SSL_URL + "/MyPage/mypageMemInfoUptInpt.action";
}