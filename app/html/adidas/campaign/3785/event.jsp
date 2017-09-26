<%@page pageEncoding="UTF-8" language="java" contentType="text/html; charset=UTF-8" %>
<%@page import="com.adidas.mobile.common.util.StringUtil"%>
<%@page import="com.adidas.omp.common.util.CookieManager"%>
<%@page import="java.util.*"%>
<%@page import="java.math.BigDecimal"%>
<%@page import="common.util.DateUtil"%>
<%@page import="com.adidas.mobile.common.util.CUtil"%>

<%
// 이벤트 정보
String EVENT_ID = "3705";

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
<div class="modal-popup-wrapper"
	 data-modalpop=""
	 data-modalpop-name="popup_name1"
>
	<div class="overlay"></div>
	<div class="popup">
		<div class="popup-header">
			<h2>Double S.K.A.T.E.</h2>
			<a href="javascript:void(0)" class="close_x_btn"></a>
		</div>
		<div class="popup-contents">
			<h4>당신의 친구와 함께 팀을 만들어 Skate game 의 승자가 되세요.<br />2 vs 2 방식의 Skate game.</h4>
			<p class="desc">* 2 vs 2 방식의 스케이트게임이기 때문에 혼자는 참여가 불가능합니다.<br />
							* 신청자에게는 회원정보의 문자로 함께 참여할 동료 정보를 묻는 문자가 전송됩니다.</p>
			<p class="pop_cont">
				2V2 GAME OF S.K.A.T.E JUST LIKE PICK-UP GAMES ON THE COURT. <br />
				BOTH PLAYERS ON DEFENSE TRY THE OPPOSING TEAM’S TRICK AND ONLY
				ONE PERSON HAS TO LAND TO MOVE ON. <br />
				A TOURNAMENT BRACKET WILL DECIDE THE VICTOR.<br />
				YOU MUST JOIN THE GAME WITH 1 FRIEND, WE WILL ASK FOR THE<br />
				FRIEND INFORMATION SEPERATELY.
			</p>
			<div class="button_area no_pdg">
				<div><a href="javascript:void(0)" onclick="jQuery('.modal-popup-wrapper').removeClass('open')">확인</a></div>
			</div>
		</div>
	</div>
</div>

<div class="modal-popup-wrapper"
	 data-modalpop=""
	 data-modalpop-name="popup_name2"
>
	<div class="overlay"></div>
	<div class="popup">
		<div class="popup-header">
			<h2>SUICIDES</h2>
			<a href="javascript:void(0)" class="close_x_btn"></a>
		</div>
		<div class="popup-contents">
			<h4>경기장안에서 당신이 스타일이 묻어나는 최고의 라인을 보여주세요.</h4>

			<p class="pop_cont">
				BASED ON THE SPORTS TRAINING EXERCISE, SKATERS WILL HAVE TO<br />
				COMPLETE A LINE USING EVERY OBSTACLE IN A SPECIFIC ORDER. <br />
				IF THEY FALL THEY HAVE TO GO BACK TO THE START. <br />
				BEST LINE IN A SET TIME WINS.
			</p>
			<div class="button_area no_pdg">
				<div><a href="javascript:void(0)" onclick="jQuery('.modal-popup-wrapper').removeClass('open')">확인</a></div>
			</div>
		</div>
	</div>
</div>

<div class="modal-popup-wrapper"
	 data-modalpop=""
	 data-modalpop-name="popup_name3"
>
	<div class="overlay"></div>
	<div class="popup">
		<div class="popup-header">
			<h2>BLACKBIRD FEATURE BEST TRICK</h2>
			<a href="javascript:void(0)" class="close_x_btn"></a>
		</div>
		<div class="popup-contents">
			<h4>DAEWON SONG 이 디자인한 여러 가지 기술이 가능한 기물에서<br />당신의 베스트 트릭을 보여주세요.</h4>

			<p class="pop_cont">
				THIS FEATURE WILL BE THE GRAND FINALLY BEST TRICK CONTEST TO END<br />THE DAY.<br />
				JAM FORMAT, NO SIGN UPS, NO ORDER. PROS PICK THE WINNER.
			</p>
			<div class="button_area no_pdg">
				<div><a href="javascript:void(0)" onclick="jQuery('.modal-popup-wrapper').removeClass('open')">확인</a></div>
			</div>
		</div>
	</div>
</div>

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

	.modal-popup-wrapper .button_area {margin-top: 1rem}

	.adiclub_event .input_wrap {
		background: url('http://imagem.adidas.co.kr/upload/campaign/adidas/3785/bg.jpg') top center no-repeat;
		background-size: cover;
		padding: 0 3rem;
	}

	.adiclub_event .input_wrap .input_box {
		width: 100%;
	}

	.adiclub_event .input_wrap .input_box input{
		text-align: left;

	}

	.adiclub_event .input_wrap .input_box label {
		text-align: left;
		font: 1.3rem/3rem 'adinenuPro-bold';
		letter-spacing: 0px;
		vertical-align: middle;
	}

	.adiclub_event .input_wrap .input_box a {
		float: right;
		font:500 1rem/2.8rem 'NotoSansKR';
		color:#666666;
	}

	.adiclub_event .input_wrap .input_box a em {
		font-style: normal;
		margin-left: 4px;
	}

	.popup-header h2{
		font: 2rem/2.3rem 'adinenuPro-bold' !important;
		color: #000;
		text-transform: uppercase;
		padding-right: 66px;
		padding: 1.5rem 60px 1.5rem 0;
		height: auto !important;
	}

	.popup-contents h4 {
		font:700 1.2rem/1.8rem 'NotoSansKR';
		color:#000;
	}

	.popup-contents p.desc {
		font:400 1rem/1.5rem 'NotoSansKR';
		color:#666666;
		margin-top: 1rem;
	}

	.popup-contents p.pop_cont {
		font:1.2rem/1.5rem 'adinenuPro-light';
		color:#000;
		letter-spacing: 0px;
		margin-top: 1.5rem;
	}

	.popup-contents a.pop_bt {
		margin-top: 30px;
	}

</style>

<!--
	170919
-->
<div style="position:relative" class="adiclub_event">
	<div class="box">
		<a href="#" class="link link3" style="top: 66.5%;height: 3.3%;left: 67%;width: 29.5%;" >장소</a>
		<a href="http://m.adidas.co.kr/MO/Club/clubMembership.action?div=program#noti" class="link link3" style="top: 72%;height: 3.2%;left: 64%;width: 22.5%;" >아디클럽 컬처란?</a>
		<img src="http://imagem.adidas.co.kr/upload/campaign/adidas/3785/01_20170926.jpg" alt="">
	</div>
	<div class="input_wrap">
		<div class="input_box clfix">
			<input type="checkbox" id="skate_program1">
			<label for="skate_program1">Double S.K.A.T.E</label>
			<a href="javascript:void(0)" class="modal-popup-click" data-modalpop-click="popup_name1">자세히보기<em class="icons" data-icon=""></em></a>
		</div>

		<div class="input_box clfix">
			<input type="checkbox" id="skate_program2">
			<label for="skate_program2">Suicides</label>
			<a href="javascript:void(0)" class="modal-popup-click" data-modalpop-click="popup_name2">자세히보기<em class="icons" data-icon=""></em></a>
		</div>

		<div class="input_box clfix">
			<input type="checkbox" id="skate_program3">
			<label for="skate_program3">Blackbird Feature Best Trick</label>
			<a href="javascript:void(0)" class="modal-popup-click" data-modalpop-click="popup_name3">자세히보기<em class="icons" data-icon=""></em></a>
		</div>
	</div>
	<div class="box">
		<a href="#" class="link link3" style="top: 2.1%; height: 4.6%; left: 7.3%; width: 85.6%;" >선수로 참여하기</a>
		<a href="#" class="link link3" style="top: 20%; height: 4.6%; left: 7.3%; width: 85.6%;" >관람 신청하기</a>
		<a href="http://m.adidas.co.kr/MO/Main/sportsSubMain.action?brand_cd=9" class="link link3" style="top: 90.7%;height: 3.8%;left: 27%;width: 46%;">액션 스포츠 전체보기</a>
		<img src="http://imagem.adidas.co.kr/upload/campaign/adidas/3785/02_20170926.jpg" alt="">
	</div>


</div>
