<%@page pageEncoding="UTF-8" language="java" contentType="text/html; charset=UTF-8" %>
<%@page import="com.adidas.mobile.common.util.StringUtil"%>
<%@page import="com.adidas.omp.common.util.CookieManager"%>
<%@page import="java.util.*"%>
<%@page import="java.math.BigDecimal"%>
<%@page import="common.util.DateUtil"%>

<%
	// 이벤트 정보
	String EVENT_ID = "3845";

	// 로그인 정보
	CookieManager cookieMgr = new CookieManager(request, response);
	String strId = StringUtil.nvl(cookieMgr.getCookie("SAVE_ID"), "").replace("\"","");
	String strPwd = StringUtil.nvl(cookieMgr.getCookie("SAVE_PWD"), "").replace("\"","");
	Map<String, Object> remainChkMap = (Map<String, Object>)request.getAttribute("remainChkMap");
	String ING_CHK = (String)((Map<String, Object>)request.getAttribute("resultMap")).get("ING_YN");

%>

<style type="text/css">
	.adiclub_event .box{position: relative;}
	.adiclub_event .box img{width:100%;}
	/*
		17062
		.adiclub_event .box .link 변경
	 */
	.adiclub_event .box .link{
		position: absolute;
		top: 46.034%;
		left: 0;
		width: 100%;
		height: 3rem;
		text-indent: -9999px;
	}
	.adiclub_event .box .link2{top: 69.517%;}

	.adiclub_event .button_area a{font:14px/50px 'NotosansKRBold','Nanum Gothic';}
</style>

<script type="text/javascript" language="javascript">
	var execIng = false;
	<%
	if (!"".equals(strId) && !"".equals(strPwd)) {
	%>
		var login_yn = "Y";
	<%
	} else {
	%>
		var login_yn = "N";
	<%
	}
	%>
	<%-- 이벤트 응모처리 --%>
	function fn_insert(){
		if(login_yn=="N") {
			if(confirm("로그인 후 응모 가능합니다.\n로그인 하시겠습니까?")){
				doLogins();
			}
			return;
		}

		if(execIng) {
			alert("처리중입니다.\n본 창이 반복될 시, 페이지 새로고침 후 다시 시도해주십시오.");
			return;
		}
		execIng = true;

		var param = $("frmEvt").serialize(true);
		var url = "/MO/Event/insertEntry2685.action";


		var onSuccess = function(req){
			var json = req.responseText;
		//	JsonUtil.alert(json);
			if(JsonUtil.isError(json)){
				var result = json.evalJSON().result;
				if (result == "0") { // 완료
					alert("이모티콘 신청이 완료 되었습니다!");
				} else if (result == "2") {
					alert("아디클럽 회원만 응모 가능합니다.");
				} else if (result == "-2") {
					alert("이미 신청이 완료되었습니다");
				} else if (result == "-3") {
					alert("로그인 후 신청 가능합니다.");
				} else if (result == "-4") {
					alert("진행중인 이벤트가 아닙니다.");
				} else if (result == "-5") {
					alert("이벤트 기간을 확인해 주세요.");
				} else if (result == "-6") {
					alert("아쉽게도 선착순 마감 되었습니다.\n참여해 주셔서 감사합니다.");
				} else {
					alert("error1");
				}
			} else {
				alert("error2");
			}
			execIng = false;
		};
		var onFailure = function(){
			alert("처리 중 에러가 발생했습니다.");
			execIng = false;
		};
		cfn_ajaxRequest(url, param, onSuccess, onFailure);

	}


</script>
<form id="frmEvt" name="frmEvt" method="post">
	<input type = "hidden" id="EVENT_ID" name="EVENT_ID" value="<%=EVENT_ID %>"/>
    <div style="position:relative" class="adiclub_event">
		<div class="box">
			<img src="<%= request.getParameter("imgUrl") %>img01_1.jpg" alt="">
			<a class="link" style="height: 3.5%; left: 15.6%; top: 60%; width: 68%;" onclick="javascript:fn_insert();return false;" href="#" >이모티콘 신청하기</a>
			<a class="link" style="height: 2.3%; left: 24.5%; top: 72.4%; width: 51%;" href="/MO/MyPage/mypageIndex.action" >핸드폰 번호 확인하기</a>
		</div>
	</div>
</form>
