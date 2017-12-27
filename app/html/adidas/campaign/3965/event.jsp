<%@page pageEncoding="UTF-8" language="java" contentType="text/html; charset=UTF-8" %>
<%@page import="com.adidas.mobile.common.util.StringUtil"%>
<%@page import="com.adidas.omp.common.util.CookieManager"%>
<%@page import="common.util.DateUtil"%>
<%@page import="java.util.*"%>
<%@page import="com.adidas.mobile.common.util.CUtil"%>
<%

// 이벤트 정보
String EVENT_ID = "3845";

// 로그인 정보
CookieManager cookieMgr = new CookieManager(request, response);
String strId = StringUtil.nvl(cookieMgr.getCookie("SAVE_ID"), "").replace("\"","");
String strPwd = StringUtil.nvl(cookieMgr.getCookie("SAVE_PWD"), "").replace("\"","");

Map<String, Object> resultMap = (Map<String, Object>) request.getAttribute("resultMap");
Integer REMAIN_CNT = 0;
if (resultMap!=null) {
	REMAIN_CNT   = CUtil.convertToInt(resultMap.get("REMAIN_CNT"),0);
}
%>

<style type="text/css">
	.onthemove_event{}
	.onthemove_event>.box{position: relative;}
	.onthemove_event>.box>img{width: 100%;}
	.onthemove_event>.box>a>img{width: 100%;}
	.onthemove_event>.box .link{
		display: block;
		position: absolute;
		text-indent: -9999px;
	}

</style>

<div style="position:relative" class="onthemove_event">
	<div class="box">
		<img src="<%= request.getParameter("imgUrl") %>img01.jpg" alt="" />
			<a class="link" style="height: 3.2%; left: 24.6%; top: 70%; width: 50%;" href="#" >이모티콘 신청하기</a>
			<a class="link" style="height: 2.5%; left: 31.7%; top: 83.5%; width: 37%;" href="#" >핸드폰 번호 확인하기</a>
	</div>

</div>
