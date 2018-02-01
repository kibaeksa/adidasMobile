<%@page pageEncoding="UTF-8" language="java" contentType="text/html; charset=UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@include file="/Common/agentCheck.jsp"%>


<script type="text/javascript">

function fnCampaignView(pn){
	location.href = '/brand/campaign/view.action?pn='+pn;
}
</script>
<script type="text/javascript" src="http://imagem.reebok.co.kr/MO/reebok/js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="http://imagem.reebok.co.kr/js/owl.carousel.js"></script>

<!-- contents -->
<section id="contents">
	<style type="text/css">
		#newyear_201801{
			width: 100%;
			position: relative;
		}

		#newyear_201801 .box{
			position: relative;
		}

		#newyear_201801 .box>img{
			width: 100%;
		}

		#newyear_201801 .box .link{
			display: block;
			position: absolute;
			text-indent: -9999px;
		}

	</style>

	<div id="newyear_201801">		
		<div class="box">
			<img src="http://imagem.reebok.co.kr/images/reebok/event/holiday/201801/1802_r_newyear_MO.jpg" alt="">
			<a href="http://m.reebok.co.kr/MO/MyPage/mypageCoupSel.action" class="link" style="width: 65%;height: 2.4%;top: 25.3%;left: 17%;" alt="쿠폰 확인하기">쿠폰 확인하기</a>
			<a href="http://m.reebok.co.kr/MO/Product/bestPrdList.action?ctgr_cd=02002" class="link" style="width: 66%;height: 2.1%;top: 48%;left: 17%;" alt="여성 베스트 제품보기">여성 베스트 제품보기</a>
			<a href="http://m.reebok.co.kr/MO/Product/bestPrdList.action?ctgr_cd=02001" class="link" style="width: 66%;height: 2.1%;top: 71.5%;left: 17%;" alt="남성 베스트 제품보기">남성 베스트 제품보기</a>					
			<a href="http://m.reebok.co.kr/upload/storelist/index.html?newyear_storelist_2018" class="link" style="width: 39.3%;height: 1.4%;top: 93.5%;left: 9.5%;">쿠폰사용 가능 매장 보기</a>
		</div>
	</div>
	<!-- //newyear_201801 -->
</section>
<!-- //contents -->