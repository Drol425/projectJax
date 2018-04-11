$(function(){

	"use strict";

/*
===================================================================================
	Делаем фиксированный топбар. PLUGIN headhesive
===================================================================================
*/

var options = {
								offset: 500
							};

var header = new Headhesive('.topbar', options);

/*
===================================================================================
	Топбар
===================================================================================
*/

//Выбор города
$(".change-city").on("click",function(){
	$(this).next(".change-city-list").slideToggle(200);
});

/*
===================================================================================
	Фильтр. Меню. Сворачивание, разворачивание разделов.
===================================================================================
*/

	$(".filter-menu > li > a").on("click",function(){
		var currentScroll = $(window).scrollTop();


		$(this).closest("li").toggleClass("folded-menu");
		// .find("ul").slideToggle(200);

		var currentScrollToggle = $(window).scrollTop();
		// Делаем скролл неизменным при клике на меню.
		if(currentScroll != currentScrollToggle){
			window.scroll(0,currentScroll);
		}


		return false;
	});


/*
===================================================================================
	Фильтр. Иконка Помощь. Описание параметров
===================================================================================
*/

$(".help-filter").on("click",function(){
	var helptList = $(this).next(".help-filter-list");

	if(helptList.is(":hidden")){
		$(".help-filter-list").hide();
		helptList.show();

		// overlay
		$('.context-objects-overlay').show();
	}else{
		helptList.hide();
		// overlay
		$('.context-objects-overlay').hide();
	}
});

// Закрытие по внешнему клику, Окно Подсказка в фильтре
$(document).click(function(e){
		if(!$(e.target).closest('.help-filter-list').length && !$(e.target).closest('.help-filter').length){

				if($('.help-filter-list').is(":visible")){

					// close overlay
					$('.context-objects-overlay').hide();

					// закрыть подсказку
					$('.help-filter-list').hide();
				}

		}
});


/*
===================================================================================
	Поиск
===================================================================================
*/

	//Показать иконку крестика, для очистки поиска
	var search = $(".search-area .search > input");
	search.on("input", function(){
		var countLetters = $(this).val().length;

		if(countLetters >= 1){
			$(".search-reset").show();

			// Тут должен быть AJAX
			var searchBlock = $(this).parent();

			$(searchBlock).addClass("search-loading");

			// Обновляем показатели
			$(".search-title").text("Найдено");
			$(".count-search").text("77");

			setTimeout(function(){
				$(searchBlock).removeClass("search-loading");
			},1000);



		}else{
			$(".search-reset").hide();

			// Обновляем показатели
			$(".search-title").text("Всего");
			$(".count-search").text("667");
		}



	});

	//Очищаем поиск
	$(".search-reset").on("click",function(){
			// search.empty();
			search.val("");

			// Скрываем кнопку очистки(крестик)
			$(this).hide();

			// Обновляем показатели
			$(".search-title").text("Всего");
			$(".count-search").text("667");
	});


/*
===================================================================================
	Теги для поиска. Из фильтра.
===================================================================================
*/

//Удаляем параметры поиска на кнопку сбросить все
$(".filter-tags .reset-all").on("click",function(){
	var parent = $(this).parent();
	parent.find("a").remove();
	return false;

});

//Удаляем параметры поиска обычного тега
$(".filter-tags a:not(.reset-all)").on("click",function(){
	$(this).remove();
	return false;

});

/*
===================================================================================
	Оформляем скролл. PLUGIN mCustomScrollbar
===================================================================================
*/

$(window).on("load",function(){

	// left sidebar filter-list
	$(".filter-list-scroll li:nth-child(2)").mCustomScrollbar({
			theme:"minimal",
			scrollInertia: 500
		});
	// left sidebar filter help
	$(".help-filter-text").mCustomScrollbar(
		{
			theme:"minimal",
			autoHideScrollbar:false,
		});
	// popup, выбор даты
	$(".choose-date-extra .jq-selectbox__dropdown > ul").mCustomScrollbar(
		{
			theme:"minimal",
			autoHideScrollbar:false,
		});
	// popup выбор времени
	$(".choose-time-extra .jq-selectbox__dropdown > ul").mCustomScrollbar(
		{
			theme:"minimal",
			autoHideScrollbar:false,
		});


	// select
	$(".sort-menu-by .jq-selectbox__dropdown > ul").mCustomScrollbar(
		{
			theme:"minimal",
			autoHideScrollbar:false,
		});

});


/*
===================================================================================
	Оформляем чекбоксы,радио,селекты. PLUGIN jQueryFormStyler
===================================================================================
*/

$('input[type=checkbox], input[type=radio]').styler();
setTimeout(function(){
	$('input[type=checkbox], input[type=radio]').styler();
}, 100);

$('.sort-menu-by select').styler();

$('.change-city-area select').styler();

$('select.choose-date-extra').styler();
$('select.choose-time-extra').styler();


/*
===================================================================================
	Вид товаров, переключатель видов (На главной) сетка | список
===================================================================================
*/

function updateViewPage(element,pageDefault,urlGetParams,viewValue){
	element.attr("href",viewValue);

	if(urlGetParams != ""){
		window.history.pushState(null,null,pageDefault+urlGetParams+"&view="+viewValue);
	}else{
		window.history.pushState(null,null,pageDefault+"?view="+viewValue);
	}
}


// Переключить вид товаров на главной (без перезагрузки)
$(".switch-view").on("click",function(){

	var linkHref     = $(this).attr("href"),
			list         = "list",
			grid         = "grid",

			domain       = location.origin,
			path         = location.pathname,
			pageDefault  = domain+path,
			urlGetParams = location.search,

			pattern      = /view=([\w]*)/g,
			newUrlParams = urlGetParams.replace(pattern,"view="+grid),
			newPage      = pageDefault+newUrlParams;

//Меняем вид товаров через класс
$(".tovars").toggleClass("tovars-list tovars-grid");

//Проверяем есть ли GET параметр
if($_GET("view")){

	if(linkHref == list){
		$(this).attr("href",grid);
	}else{
		$(this).attr("href",list);
		var newUrlParams = urlGetParams.replace(pattern,"view="+list),
				newPage      = pageDefault+newUrlParams;
	}

	//Меняем параметр вида в url
	window.history.pushState(null,null,newPage);

}else{
	//Добавляем в GET параметр вида
	if(linkHref == list){
		updateViewPage($(this),pageDefault,urlGetParams,grid);
	}else{
		updateViewPage($(this),pageDefault,urlGetParams,list);
	}
}

//Отменяем дефолтные действия.
return false;

});


/*
===================================================================================
	Анимация добавления товара в корзину.
===================================================================================
*/

	//Запуск
	flyCartBtn();


	function flyCartBtn(){
		// Количество товаров в корзине.
		var getQuantityCart = 0,
					 btnCartAnimating = false;

		$('.cart-btn').on('click',function(){

				//Разрешаем использовать анимацию на всех товарах одновременно
				var isAdded = $(this).hasClass("is-added");
				if(!isAdded){
					btnCartAnimating = false;
				}

				if(!btnCartAnimating){ //Если не запущена анимация, выполняем код ниже

					// console.log("cart click");


					var itemImg       = $(this).parents(".tovar").find('img').eq(0),
							isStickHeader = $(".topbar").hasClass("headhesive--stick");

							// попап корзины
							if(!itemImg.length){
								itemImg = $(this).parents("td").find(".tovar-photo img").eq(0);
							}
							// страница товара
							if(!itemImg.length){
								itemImg = $(this).parents(".product-card").find(".product-photo img").eq(0);
							}

					if(isStickHeader){
						flyToElement($(itemImg), $('.topbar.headhesive--stick  .cart'));
					}else{
						flyToElement($(itemImg), $('.site-header .topbar .cart'));

					}

					// Увеличиваем счетчик корзины
					getQuantityCart++;
					$(".cart-counter").text(getQuantityCart);


					// Анимамируем
					btnCartAnimating = true;

					$(this).addClass('is-added');

					//Действия по окончанию анимации
					$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) {
						$(this).removeClass('is-added');
						btnCartAnimating = false;
					});


				}


		});
	}

/*
===================================================================================
	Анимация добавления товара в сравнение.
===================================================================================
*/

	// запуск
	flyCompareBtn();


	function flyCompareBtn(){
		// Количество товаров в сравнении. (Из localstorage)
		var getQuantityCompare = 0,
				btnCompareAnimating = false;

		$('.compare-btn').on('click',function(){

			//Разрешаем использовать анимацию на всех товарах одновременно
			var isAdded = $(this).hasClass("is-added");
			if(!isAdded){
				btnCompareAnimating = false;
			}

			if(!btnCompareAnimating){ //Если не запущена анимация, выполняем код ниже

			// console.log("compare click");


				var itemImg       = $(this).parents(".tovar").find('img').eq(0),
						isStickHeader = $(".topbar").hasClass("headhesive--stick");

						// попап корзины
						if(!itemImg.length){
							itemImg = $(this).parents("td").find(".tovar-photo img").eq(0);
						}
						// страница товара
						if(!itemImg.length){
							itemImg = $(this).parents(".product-card").find(".product-photo img").eq(0);
						}


				if(isStickHeader){
					flyToElement($(itemImg), $('.topbar.headhesive--stick  .compare'));
				}else{
					flyToElement($(itemImg), $('.site-header .topbar .compare'));

				}

				// Увеличиваем счетчик корзины
				getQuantityCompare++;
				$(".compare-counter").text(getQuantityCompare);


					// Анимамируем
					btnCompareAnimating = true;

					$(this).addClass('is-added');

					//Действия по окончанию анимации
					$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) {
						$(this).removeClass('is-added');
						btnCompareAnimating = false;
					});


				}
		});

	}

/*
===================================================================================
	Модальные окна POPUPS
===================================================================================
*/


// Маска для телефона
$("input[name=client-phone-country-code]").mask("+9",{autoclear: false});
$("input[name=client-phone-code]").mask("999",{placeholder:"код",autoclear: false});
$("input[name=client-phone-number]").mask("999-99-99",{autoclear: false});


// Создаем функцию с настройками для всех POPUP окон
function magnificSettings(ajaxUrl){
	return {
			type: 'ajax',
			//fixedContentPos: true, // Отключить Скролл страницы когда открыт попап
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: true,
			midClick: true,
			removalDelay: 0,
			// removalDelay: 100,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)', // Alt text on close button
			tLoading: 'Загрузка...',
			ajax:{
				settings:{
					// Link handler
					url:ajaxUrl,
				}
			},
			callbacks:{
				open:function(){
					// Add blur
					$('body > *:not(.mfp-bg):not(.mfp-wrap)').addClass("blur-popup");
				},
				close:function(){
					// Remove blur
					$('.blur-popup').removeClass("blur-popup");
				},
				ajaxContentAdded:function(){

					// masked phone
					$("input[name=client-phone-country-code]").mask("+9",{autoclear: false});
					$("input[name=client-phone-code]").mask("999",{placeholder:"код",autoclear: false});
					$("input[name=client-phone-number]").mask("999-99-99",{autoclear: false});


					// Validate forms
					if($("#callback-popup").length){
						var validator = $("#callback-popup form").validate();
					}
					if($("#call-expert-popup").length){
						var validator = $("#call-expert-popup form").validate();
					}
					if($("#help-choose-popup").length){
						var validator = $("#help-choose-popup form").validate();
					}
					if($("#buy-oneclick-popup").length){
						var validator = $("#buy-oneclick-popup form").validate();
					}
					if($("#preorder-popup").length){
						var validator = $("#preorder-popup form").validate();
					}
					if($("#cheap-popup").length){
						var validator = $("#cheap-popup form").validate();
					}
					if($("#basket-popup").length){
						initBasket();
						var validator = $("#basket-popup form").validate();
					}
					if($("#fastview-popup").length){
						initProductGallery();
					}


					// Стилизация radio
					if($("#compare-popup").length){
						$('input[type=checkbox], input[type=radio]').styler();
						initCompare();
					}

					// Анимация кнопки добавить в корзину FLY
					flyCartBtn();
					// Анимация кнопки добавить в сравнение FLY
					flyCompareBtn();


					fastBuyBtn();

					// Оформляем чекбоксы,радио,селекты. PLUGIN jQueryFormStyler
					$('select.choose-date-extra').styler();
					$('select.choose-time-extra').styler();

					// Переключатель даты
					$(".callback-popup .choose-date-callback > li").on("click",function(){
						$(this).parent().find("li").removeClass("active-date-callback");
						$(this).toggleClass("active-date-callback");
					});

					// Оформляем scroll
					// popup, выбор даты
					$(".choose-date-extra .jq-selectbox__dropdown > ul").mCustomScrollbar(
						{
							theme:"minimal",
							autoHideScrollbar:false,
						});
					// popup выбор времени
					$(".choose-time-extra .jq-selectbox__dropdown > ul").mCustomScrollbar(
						{
							theme:"minimal",
							autoHideScrollbar:false,
						});
				}
			}
		}
}

// Ajax popup, прописываем пути для подгрузки окон.
$(".callback-btn").magnificPopup(
	magnificSettings("blocks/popups/callback.html")
);
$(".help-choose").magnificPopup(
	magnificSettings("blocks/popups/help.html")
);
$(".call-expert").magnificPopup(
	magnificSettings("blocks/popups/expert.html")
);

//Модальное купить в 1-ин клик
fastBuyBtn();
function fastBuyBtn(){
	var isMagnificPopup  = $(".mfp-wrap").length;

	if(isMagnificPopup){


		// проблема в том,что мы не можем вызвать magnificSettings внутри самой функции


		$(".popup-content .fast-buy-btn").on("click",function(){
			$(".popup-content .fast-buy-btn").magnificPopup(
				magnificSettings("blocks/popups/oneclick.html")
			);
console.log("1");

		// $(this).attr({"href":"blocks/popups/oneclick.html","data-mfp-src":"#buy-oneclick-popup"}).addClass().click();

		// альтернативное решение, это скопирывать или создать кнопку новую с данными
		// $.magnificPopup.close(); $("#test-btn").click();


			// $.magnificPopup.close();

			// setTimeout(function(){
			// 	$(".fast-buy-btn").magnificPopup(
			// 		magnificSettings("blocks/popups/oneclick.html")
			// 	);
			// },1000);
		});

	}else{
		$(".fast-buy-btn").magnificPopup(
		// $(".fast-buy-btn").magnificPopup(
			magnificSettings("blocks/popups/oneclick.html")
		);
	}


}
//Модальное предзаказ в 1-ин клик
$(".fast-preorder-btn").magnificPopup(
	magnificSettings("blocks/popups/preorder.html")
);
//Модальное быстрый просмотр
$(".fast-view-btn").magnificPopup(
	magnificSettings("blocks/popups/fastview.html")
);
//Модальное нашли дешевле?
$(".found-cheap").magnificPopup(
	magnificSettings("blocks/popups/cheap.html")
);





//Модальное окно basket
$(".cart-extra-view").magnificPopup(
	magnificSettings("blocks/popups/basket.html")
);
$(".cart-extra-view").on("click",function(){
	// скрываем overlay
	$('.context-objects-overlay').hide();
	$('.cart-extra').hide();
});

//Модальное окно compare
$(".compare-extra-view").magnificPopup(
	magnificSettings("blocks/popups/compare.html")
);
$(".compare-extra-view").on("click",function(){
	// скрываем overlay
	$('.context-objects-overlay').hide();
	$('.compare-extra').hide();

});

// Popup success кнопка ок, закрыть попап
$("#success-popup button[type=submit]").on('click',function(){
	$.magnificPopup.close();
	return false;
});







/*
===================================================================================
	Кнопка наверх to-top (backtop)
===================================================================================
*/

//Функция Скрыть кнопку наверх, которая в футере
function hide_to_top(){
	if($("body").scrollTop() <= 180){
		$(".to-top-area").fadeOut(500);
	}else{
		$(".to-top-area").fadeIn(500);
	}
}
//Скрыть кнопку наверх, которая в футере
$(window).scroll(hide_to_top);

//Клик по кнопке
$(".to-top").on("click",function(){
	$('body').animate({
			scrollTop: $("body").offset().top
	}, 150);

});


/*
===================================================================================
 Конец.
===================================================================================
*/



// Сортировать товары по критериям, переключатель (На главной)
$(".sort-menu-by").on("click",function(){
	$(this).find(" > li").toggleClass("sort-menu-by-folded");
	$(".sort-menu-by-extra",this).slideToggle(150);
});





// Показать окно корзины | сравнение товаров
$(".cart,.compare").on("click",function(){

	var $cartExtra    = $(this).next(".cart-extra");
	var $compareExtra = $(this).next(".compare-extra");
	var isCompare     = $(this).hasClass("compare");
	var isCart        = $(this).hasClass("cart");


	//Если клик по сравнению
	if(isCompare){

		// Показать окно! и вызвать Обработчик checkOpenExtraWindow чтобы проверить открытие окна, в случае успеха показать оверлей
		$compareExtra.slideToggle(150,checkOpenExtraWindow);

	}
	//Если клик по корзине
	if(isCart){

		// Показать окно! и вызвать Обработчик checkOpenExtraWindow чтобы проверить открытие окна, в случае успеха показать оверлей
		$cartExtra.slideToggle(150,checkOpenExtraWindow);

	}

});


//Функция проверки открытия окна, в случае успеха показываем оверлей
function checkOpenExtraWindow(){

	var $extraOptions = $(this).closest(".extra-options");
	var isViewCompare = $extraOptions.find(".compare-extra").is(":visible");
	var isViewCart    = $extraOptions.find(".cart-extra").is(":visible");


	if(isViewCompare || isViewCart){
		$('.context-objects-overlay').show();
	}else{
		$('.context-objects-overlay').hide();
	}
}






// Удалить из корзины
$(".cart-extra-tovar-del").on("click",function(){

	var cartExtra      = $(this).parents(".cart-extra"),
			cartExtraView  = cartExtra.find(".cart-extra-view"),
			cartExtraTotal = cartExtra.find(".cart-extra-total");

	$(this).parent(".cart-extra-tovar").remove();

	var countCartTovar = cartExtra.find(".cart-extra-tovar").length;


	if(!countCartTovar){
		cartExtraView.attr("disabled",true);
		// cartExtraView.attr("disabled","disabled");
		cartExtraView.text("Корзина пуста");
		cartExtraTotal.text("0 товаров");
	}

});


// Удалить из сравнения
$(".compare-extra-tovar-del").on("click",function(){

	var cartExtra      = $(this).parents(".compare-extra"),
			cartExtraView  = cartExtra.find(".compare-extra-view"),
			cartExtraTotal = cartExtra.find(".compare-extra-total");

	$(this).parent(".compare-extra-tovar").remove();

	var countCartTovar = cartExtra.find(".compare-extra-tovar").length;


	if(!countCartTovar){
		cartExtraView.attr("disabled",true);
		// cartExtraView.attr("disabled","disabled");
		cartExtraView.text("Нечего сравнивать");
		cartExtraTotal.text("0 товаров");
	}

});



$(document).click(function(event){

		// Скрываем окно корзины если клик был вне
		if(!$(event.target).closest('.cart-extra').length && !$(event.target).closest('.cart').length && !$(event.target).closest('.cart-extra-tovar-del').length && !$(event.target).hasClass('compare') && !$(event.target).hasClass('compare-counter')){
				if($('.cart-extra').is(":visible")){
						// скрываем overlay
						$('.context-objects-overlay').hide();
						console.log("hide cart");

						// скрываем окно
						$('.cart-extra').hide();
				}

		}

	// Скрываем окно сравнения если клик был вне
		if(!$(event.target).closest('.compare-extra').length && !$(event.target).closest('.compare').length && !$(event.target).closest('.compare-extra-tovar-del').length && !$(event.target).hasClass('cart') && !$(event.target).hasClass('cart-counter')){
				if($('.compare-extra').is(":visible")) {
					// скрываем overlay
						$('.context-objects-overlay').hide();

					// скрываем окно
					$('.compare-extra').hide();
				}
		}
});







// Кнопка перейти к полной версии сайта
$(".go-full-site").on("click",function(){
	$("meta[name=viewport]").attr("content","width=1140");
	return false;
});








// Кнопка еще параметры (в фильтре)
$(".show-more-filter a").on("click",function(){
	var currentScroll = $(window).scrollTop();


	$(this).closest(".filter").toggleClass("semi-hide");
	$(this).toggleText("еще параметры","скрыть параметры");


	var currentScrollToggle = $(window).scrollTop();
	// Делаем скролл неизменным при клике на еще.
	if(currentScroll != currentScrollToggle){
		window.scroll(0,currentScroll);
	}


	return false;

});


// Плагин lazy load (Подгрузка картинок на главной)
$("img.lazy").lazyload({
		effect : "fadeIn"
});









/*
===================================================================================
 Cтраница admin login
===================================================================================
*/

// Переключатель пароля. Показать или скрыть.
$(".login-form-pass .view-pass-mode").on("click",function(){
	var
			inputPass     = $(this).parent().find("input"),
			inputPassAttr = inputPass.attr("type");

	if(inputPassAttr == "text"){
		inputPass.attr("type","password");
		inputPass.toggleClass("hide-pass-active");
		$(this).attr("title","Показать вводимый пароль");
	}else{
		inputPass.attr("type","text");
		inputPass.removeClass("hide-pass-active");
		$(this).attr("title","Скрыть вводимый пароль");
	}

});


/*
===================================================================================
 Cтраница about company
===================================================================================
*/

// отзывы
$(".reviews-yandex .owl-carousel").owlCarousel({
		loop:true,
		dots:true,
		// center:true,
		nav:true,
		navText:["",""],
		// autoplay:true,
		responsive:{
				0:{
						items:1,
						slideBy: 1
				},
				// 600:{
				// 		items:1,
				// 		slideBy: 1
				// },
				1000:{
						items:2,
						slideBy: 2
				}
		}
});

// партнеры
$(".partners .owl-carousel").owlCarousel({
		loop:true,
		nav:true,
		dots:true,
		navText:["",""],
		// navText:["предыдущая","следующая"],
		// autoplay:true,
		responsive:{
				0:{
						items:1,
						slideBy: 1
				},
				600:{
						items:2,
						slideBy: 2
				},
				1000:{
						items:5,
						slideBy: 5
				}
		}
});


// сертификаты
$(".certificates .owl-carousel").owlCarousel({
		loop:true,
		nav:true,
		dots:true,
		navText:["",""],
		// navText:["предыдущая","следующая"],
		// autoplay:true,
		responsive:{
				0:{
						items:1,
						slideBy:1
				},
				600:{
						items:2,
						slideBy:2
				},
				1000:{
						items:4,
						slideBy:4
				}
		}
});


// Галерея сертификатов popup magnific
	$('.certificates .owl-carousel').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1], // Will preload 0 - before current, and 1 after the current image
			tCounter: '%curr% из %total%',
			tPrev: 'Предыдущий (Левая стрелка)', // Alt text on left arrow
			tNext: 'Следующий (Правая стрелка)', // Alt text on right arrow
		},
		image: {
			tError: '<a href="%url%">Картинка #%curr%</a> не может быть загружена.',
		},
		tClose: 'Закрыть (Esc)', // Alt text on close button
		tLoading: 'Загрузка...',
		zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
	});


/*
===================================================================================
 Cтраница продукта
===================================================================================
*/


// product review
$(".show-replies").on("click",function(){
	$(this).closest(".review").find(".review-answers").slideToggle(150);
	return false;
});


$(".review-reply").on("click",function(){
	return false;
});




// Страница Продукт подсказка (там где  ГАРАНТИЯ ОПЛАТА ДОСТАВКА САМОВЫВОЗ)
var $popovers = $('[data-toggle="popover"]');


$popovers.popover({
	trigger : 'click hover focus',
	html    : true
});


//Делаем фикс, чтобы можно было видеть только один popover
$popovers.on('show.bs.popover',function(){
	$('.popover').not(this).popover("hide");
});





// Запускаем галерею картинок для товаров. (Страница товар или popup быстрый просмотр)
initProductGallery();

function initProductGallery(){
	// Товарная галерея
	navIndicator();

	// Клик по мелким фоткам
	$(".thumbnails a").on("click",function(){
		openPhoto($(this));

		navIndicator();

		return false;
	});

	// Клик по основной картинке
	$(".product-photo").on("click",function(){
		openNextPhoto();

		return false;
	});

	// Клик по стрелке next
	$(".thumb-next").on("click",function(){
		openNextPhoto();

		return false;
	});

	// Клик по стрелке prev
	$(".thumb-prev").on("click",function(){
		openPrevPhoto();

		return false;
	});


	function navIndicator(){
		var
				countThumb  = $(".thumbnails li").length,
				posActive   = $(".thumbnails li.active").index()+1,
				arrowPrevOn = false,
				arrowNextOn = false;

		// Кнопка next (добавление индикатора)
		if(countThumb > 1 && countThumb == posActive){
			$(".thumb-next").addClass("indicator");
		}else{
			$(".thumb-next").removeClass("indicator");
		}

		// Кнопка prev (добавление индикатора)
		if(countThumb > 1 && posActive == 1){
			$(".thumb-prev").addClass("indicator");
		}else{
			$(".thumb-prev").removeClass("indicator");
		}

		// Если маленькая картинка только 1 или 0
		if(countThumb <= 1){
			$(".thumbnails-nav button").addClass("indicator");
		}

	}


	function openPrevPhoto(){
		var
				countThumb = $(".thumbnails li").length,
				posActive  = $(".thumbnails li.active").index()+1;

		// Стандартное действие, открыть предыдущий
		if(countThumb > 1 && posActive != 1){
			var prevThumb = $(".thumbnails li.active").prev().find("a");
			openPhoto(prevThumb);
		}
		// Выполняется, если active у первого эл-та
		if(countThumb > 1 && posActive == 1){
			var prevThumb = $(".thumbnails li:last a");
			openPhoto(prevThumb);
		}

		navIndicator();
	}


	function openNextPhoto(){
		var
				countThumb = $(".thumbnails li").length,
				posActive  = $(".thumbnails li.active").index()+1;

		// Стандартное действие, открыть следующий
		if(countThumb > 1 && countThumb != posActive){
			var nextThumb = $(".thumbnails li.active").next().find("a");
			openPhoto(nextThumb);
		}
		// Выполняется, если active у последнего эл-та
		if(countThumb > 1 && countThumb == posActive){
			var nextThumb = $(".thumbnails li:first a");
			openPhoto(nextThumb);
		}

		navIndicator();
	}


	function openPhoto(thumbAnchor){
		// Берем url мелкой картинки
		var currentHref = thumbAnchor.attr("href");

		// Меняем src у основной картинки
		$(".product-photo img").attr("src",currentHref);

		// Навешиваем класс active
		thumbAnchor.closest("ul").find("li.active").removeClass("active");
		thumbAnchor.closest("li").addClass("active");
	}


}





// Фильтр для мобильных устройств
$(".search-mobile-filter").on("click",function(){

$("#filter-popup").show();

$("body").addClass("hide-scroll");

	// $.magnificPopup.open({
	// 	fixedContentPos: true, // Отключить Скролл страницы когда открыт попап
	// 	fixedBgPos: true,
	// 	overflowY: 'auto',
	// 	mainClass: 'my-mfp-zoom-in',
	// 	midClick: true,
	// 	alignTop : true,
	// 	items: {
	// 		src: '#filter-popup'
	// 	},
	// });

		//Удаляем все классы и оставляем только фильтр. Если был класс semi то добавляем его
		// $(".filter").clone(true,true).appendTo(".mobile-filter");

		var $mobileFilter = $(".mobile-filter .filter");
		var isSemi = $mobileFilter.hasClass("semi-hide");

		$mobileFilter.attr("class","").addClass("filter");

		if(isSemi){
			$mobileFilter.addClass('semi-hide');
		}


		//Делаем фолдинг всех пунктов, чтобы было все компактно
		$mobileFilter.find("> ul > li:not(.folded-menu)").addClass("folded-menu")

	//Делаем статус active
	// $(this).toggleClass("active");
	//Показать блок фильтра
	// $(".mobile-filter").toggle();

	return false;
});


$("#filter-popup").on("click",".filter-close-btn, .search-result",function(){
	$("#filter-popup").hide();

	$("body").removeClass("hide-scroll");
});











// reviews.js

// Рейтинг
var selectStars = $(".stars-rating .star");

// Событие hover
selectStars.hover(function(){
	var isStarActive = selectStars.parent().find(".star-active").length,
			starIndex    = $(this).index();

	// Если не был клик по звезде
	if(!isStarActive){
			for(var i=0;i <= starIndex;i++){
			selectStars.eq(i).addClass("star-hover");
		}
	}else{
		var starIndex   = $(this).index(),
				activeIndex = $(".stars-rating .star-active").index()+1;

		for(var i=activeIndex;i <= starIndex;i++){
			selectStars.eq(i).addClass("star-light-hover");
		}
	}

},function(){
	selectStars.not(".star-active").removeClass("star-hover star-light-hover");
});

// Событие click
selectStars.on("click",function(){

	selectStars.removeClass("star-active star-active-hover star-hover star-light-hover");

		$(this).addClass("star-active");

		var starIndex = $(this).index();
		for(var i=0;i <= starIndex;i++){
			selectStars.eq(i).addClass("star-active-hover");
		}

});










$(".write-review").on("click",function(){
	$(this).hide();
	$(".page-product .add-review").show();
});


$(".page-product .review-cancel").on("click",function(){
	$(".write-review").show();
	$(".page-product .add-review").hide();
});





// Ответить на отзыв, разворачивание полей
$(".page-product .add-reply").on("input",function(){
	var checkNameVal = $(this).find(".col-profile input").val().length;

	if(checkNameVal > 1){
		$(this).removeClass("small");
	}else{
		$(this).addClass("small");
	}

});



$(".review-reply").on("click",function(){
	var isReviews     = $(this).closest(".review-answers").length,
			templateReply = $(".add-reply");


	// Если есть ответы, то показываем блок в конце ответа, иначе показываем после отзыва


	if(isReviews){
		var newPlace = $(this).closest(".review-answers");

		templateReply.appendTo(newPlace);
	}else{
		var newPlace = $(this).closest(".review");

		templateReply.appendTo(newPlace);
	}

	// Переместиться к блоку ответа
	goToReply($(".add-reply"));


	// Функция перемещения к блоку ответа
	function goToReply(reply){
		var
				currentScroll      = $(window).scrollTop(),
				currentScrollReply = reply.offset().top,
				// Разница чтобы выровнять по центру скролл
				diffCenter         = ($(window).height()-reply.outerHeight())/2,
				newPosition        =  currentScrollReply-diffCenter;

		// Телепортируемся
		if(currentScroll != currentScrollReply){
			$("html,body").animate({
				scrollTop:newPosition
			},1000);
		}
	}




	return false;
});













});
