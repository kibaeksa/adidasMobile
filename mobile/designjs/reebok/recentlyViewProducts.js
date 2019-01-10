(function($) {

	// 브라우져 쿠키 가져오기
	var arrayProdCd = new Array;
	var arrayCkPrd = decodeURIComponent(fn_getCookie("ree_today_prd"));
	if (arrayCkPrd == 'false' || arrayCkPrd == '') {
		$(".viewed-items.recentlyViewProducts").hide();
	} else {
		var prds = arrayCkPrd.split("[!AND!]");
		for (var i = 0; i < prds.length; i++) {
			var prdCkInfo = prds[i].split(":^:");
			arrayProdCd.push("'" + prdCkInfo[0] + "'");
		}
	}

	// 쿠키에서 가져온 상품번호로 상품 조회
	fn_recentlyViewProducts = function() {
		if (arrayProdCd.length > 0) {
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: '/MO/Product/selectRecenViewProdAjax.action',
				data: {
					todayProd: arrayProdCd.join(',')
				},
				async: true,
				success: function(req) {
					if (req) {
						if (!req.error && !req.msg) {
							// 최근 본상품 html 작성
							fn_recentlyViewProductsHtml(req.todayList.list);
						}
					}
				},
				error: function() {
					alert('상품 정보를 조회할 수 없습니다.');
				}
			});
		}
	}

	// 최근 본상품 html 작성
	function fn_recentlyViewProductsHtml(oProd) {

		var imageRoot = (typeof _REEBOK_IMG_PATH == 'string' && _REEBOK_IMG_PATH != '' ? _REEBOK_IMG_PATH : 'http://image.reebok.co.kr');
		var listHtml = new StringBuilder();

		listHtml.append("<h4 class='tit'>최근 본 상품</h4>");
		listHtml.append("	<div class='products owlcarousel-products-wrapper' id='product-viewed-list'>");

		for (var i = 0; i < oProd.length; i++) {
			var oData = oProd[i];
			var prodCd = (oData['PROD_CD'] || '');
			var spstId = (oData['SPST_ID'] || '');
			var prodNm = (oData['TRK_PROD_NM'] || '').replaceAll("'", "&#39;");

			listHtml.append("		<div class='prod_box'>");
			listHtml.append("			<a href=\"javascript:goProductDetail('" + prodCd + "', '" + spstId + "');\">");
			listHtml.append("				<div class='img'>");
			listHtml.append("					<img src='" + imageRoot + oData['IMG_NM_500'] + "' alt='" + prodNm + "' />");
			listHtml.append("				</div>");
			listHtml.append("				<p class='ctgr'>" + oData['NM_KOR_PREFIX'] + "</p>");
			listHtml.append("				<p class='tit'>" + oData['NM_KOR_BASIC'] + "</p>");
			listHtml.append("				<div class='price'>");
			if (oData['SALE_YN'] == 'Y') {
				listHtml.append("					<div class='line'>" + oData['NORML_PRICE'] + "<span>원</span></div>");
				listHtml.append("					<div class='sale'>" + oData['SALES_PRICE'] + "<span>원</span></div>");
			} else {
				listHtml.append("					<div>" + oData['NORML_PRICE'] + "<span>원</span></span></div>");
			}
			listHtml.append("				</div>");
			listHtml.append("			</a>");
			listHtml.append("		</div>");
		}
		listHtml.append("	</div>");
		listHtml.append("</div>");

		$(".viewed-items.recentlyViewProducts").empty().html(listHtml.toString());

		// 슬라이드 페이징
		$("#product-viewed-list").owlCarousel({
			stagePadding: 20,
			margin: 3,
			items: 2,
			merge: true,
			dots: true,
			inactiveDots: true
		}).on('changed.owl.carousel', function(event) {
			var index = Math.floor(event.item.index / 2);
			if (event.item.count % 2 !== 0 && event.item.index == event.item.count - 2) {
				$(event.target).find('.owl-controls .owl-dot').removeClass('active').last().addClass('active');
			}
		});
	}
})(jQuery);