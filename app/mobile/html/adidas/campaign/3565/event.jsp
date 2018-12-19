<%@page pageEncoding="UTF-8" language="java" contentType="text/html; charset=UTF-8" %>
<%@page import="com.adidas.mobile.common.util.StringUtil"%>
<%@page import="com.adidas.omp.common.util.CookieManager"%>
<%@page import="common.util.DateUtil"%>
<%@page import="java.util.*"%>
<%@page import="com.adidas.mobile.common.util.CUtil"%>
<%

// 이벤트 정보
String EVENT_ID = "3525";

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
			<img src="<%= request.getParameter("imgUrl") %>img01.jpg?v=20170605" alt="" />
				<a class="link" style="height: 4.5%;left:15%;top: 81.7%;width: 70%;" href="" >이벤트 참여신청</a>
		</div>
		<div class="box">			
			<img src="<%= request.getParameter("imgUrl") %>img02.jpg?v=20170605" alt="" />
				<a class="link" style="height: 89.7%;left: 0%;top: 7.1%;width: 100%;" href="http://m.adidas.co.kr/MO/Promotion/landingPage.action?pageNo=304" >와프 니트 행사 제품 전체보기</a>
		</div>

	</div>
