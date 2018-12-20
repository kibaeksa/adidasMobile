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
	.sprite_event{}
	.sprite_event>.box{position: relative;}
	.sprite_event>.box>img{width: 100%;}
	.sprite_event>.box>a>img{width: 100%;}
	.sprite_event>.box .link{
		display: block;
		position: absolute;
		text-indent: -9999px;
	}

	.sprite_event>.box2{position: relative;
					    background: url('http://imagem.adidas.co.kr/upload/campaign/adidas/3605/img02.jpg?v=20170626')no-repeat;
					    padding-top: 275.6%;
					    background-size: 100%;
						}
	.sprite_event>.box2>img{width: 100%;}
	.sprite_event>.box2>a>img{width: 100%;}
	.sprite_event>.box2 .link{
		display: block;
		position: absolute;
		text-indent: -9999px;
	}
	.sprite_event>.box2 p{
		position: absolute;
	    bottom: 25.9%;
	    left: 47%;
	    font: 1.1rem/1rem 'adihaus-bold';
	    color: #014165;
	    letter-spacing: 0px;
		z-index: 1;
		display: block;
	}

</style>

<div style="position:relative" class="sprite_event">
	<div class="box">
		<img src="<%= request.getParameter("imgUrl") %>img01.jpg?v=20170626" alt="" />
	</div>
	<div class="box2">
		<p>10689642046171</p>
		<%-- <img src="<%= request.getParameter("imgUrl") %>img02.jpg?v=20170626" alt="" /> --%>
			<a class="link" style="height: 3.3%;left: 49.7%;top: 39%;width: 25%;" href="#" ></a><%--응모하기--%>
			<a class="link" style="height: 3.7%;left: 4.3%;bottom: 18.7%;width: 47%;" href="http://m.adidas.co.kr/MO/Product/eachCatPrdListData.action?ctgr_cd=01007&strPage=1&term=1&viewType=A&sMinPrice=&sMaxPrice=&sColor=&sSize1=&sSize2=&sSize3=&STEP_YN=N" ></a>
			<a class="link" style="height: 3.7%;left: 4.3%;bottom: 14.1%;width: 41.8%;" href="http://m.adidas.co.kr/MO/Event/evtNotice.action?pn=miGuide" ></a>

	</div>

</div>
