<style type="text/css">
	.evt3165{}
	.evt3165>.box{position: relative;background: #242424;}
	.evt3165>.box>img{width: 100%;}
	.evt3165>.box>a>img{width: 100%;}				
	
	.evt3165>.box .code_box{
		display: none;
		padding: 15px;
		box-sizing: border-box;
		-webkit-box-sizing:border-box;
		border: 2px solid  #fce700;
	}

	.evt3165>.box .code_box>p{
		margin-bottom: 10px;
		font-size: 13px;
		text-align: center;
		color: #fce700;	
	}

	.form_box{
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
	}

	.evt3165>.box .code_box input{
		width: 100%;
		border-width:0;
		height:30px;
		line-height: 30px;
		padding-left: 5px;
		margin-right: 1px;
	}

	.evt3165>.box .code_box .form_box a{
		width: 70px;
		height: 30px;
		display: inline-block;
		text-align: center;
		color: #000;
		background: #fce700;
		font-size: 12px;
		line-height:30px;
	}

	.code_box .btn_box a{
		margin-bottom: 5px;
		display: block;
		height: 30px;
		text-align: center;
		color: #000;
		background: #fff;
		font-size: 12px;
		line-height:30px;
	}

	.code_box .btn_box a:last-child{
		background: #fce700;
		margin-bottom: 0;
	}

	
</style>				
<div style="position:relative" class="evt3165">
	<div class="box"><img src="http://imagem.adidas.co.kr<%= request.getParameter("imgUrl") %>adi_camp_160804.jpg?v=160804" alt=""></div>
	<div class="box" style="padding: 0 15px;">

		<!-- 식별번호 입력 -->
		<div class="code_box" style="display: block;">
			<p>식별번호 입력</p>
			<div class="form_box">
				<input type="text"><a href="#" class="btn">입력</a>	
			</div>
		</div>

		<!-- 식별번호 입력 완료 -->
		<div class="code_box">
			<p>식별번호 입력완료</p>
			<div class="btn_box">
				<a href="#"><span class="icons aft" data-icon="">제품보러 가기</span></a>
				<a href="#"><span class="icons aft" data-icon="">이벤트 제품 신청하기</span></a>
			</div>
		</div>

		<!-- 이벤트 신청완료 -->
		<div class="code_box">
			<p style="margin-bottom:0;font-size:17px;">이벤트가 종료되었습니다.</p>
		</div>


	</div>
	<div class="box">
		<img src="http://imagem.adidas.co.kr<%= request.getParameter("imgUrl") %>adi_camp_160804_link.jpg" alt="">
		<a style="display: block;height: 31.6%;left: 0;position: absolute;top: 2.5%;width: 49.8%;" href="#"></a>		
		<a style="display: block;height: 31.6%;right: 0;position: absolute;top: 2.5%;width:50%;" href="#"></a>		
		<a style="display: block;height: 32%;left: 0;position: absolute;top: 34%;width: 100%;" href="https://m.facebook.com/adidasfootballkr/?fref=ts" target="_blank"></a>		
	</div>
</div>