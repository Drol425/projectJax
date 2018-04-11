/*
===================================================================================
	Функция для получения GET параметров
===================================================================================
*/

	function $_GET(key){
		var s = window.location.search;
		s = s.match(new RegExp(key + '=([^&=]+)'));
		return s ? s[1] : false;
	}

/*
===================================================================================
	Функция анимации добавления товара в корзину.
===================================================================================
*/

function flyToElement(flyer,flyingTo){

	var divider        = 9,
			cordDivider    = 2,
			setOpacity     = 0.4,

			flyer          = $(flyer),
			flyerClone     = $(flyer.clone()),
			flyerWidth     = flyer.width(),
			flyerHeight    = flyer.height(),
			flyerTop       = flyer.offset().top,
			flyerLeft      = flyer.offset().left,

			flyingTo       = $(flyingTo),
			flyingToWidth  = flyingTo.width(),
			flyingToHeight = flyingTo.height(),
			flyingToTop    = flyingTo.offset().top,
			flyingToLeft   = flyingTo.offset().left,

			gotoX          = flyingToLeft + (flyingToWidth  / cordDivider) - (flyerWidth/divider) /cordDivider,
			gotoY          = flyingToTop  + (flyingToHeight / cordDivider) - (flyerHeight/divider)/cordDivider;

	// Fallback. Задаем ширину и высоту летающей картинки.
	flyerClone.attr({"width":flyerWidth,"height":flyerHeight});

	flyerClone.addClass("fly-img")
						.css({top: flyerTop  + "px",
								 left: flyerLeft + "px"
						});

	$('body').after(flyerClone);


	flyerClone.animate({
			opacity: setOpacity,
			left   : gotoX,
			top    : gotoY,
			width  : flyerWidth/divider,
			height : flyerHeight/divider
	},700,function(){
		flyerClone.fadeOut('fast',function(){
				flyerClone.remove();
		});
	});
}

/*
===================================================================================
	Функция toggleText
===================================================================================
*/

$.fn.extend({
	toggleText: function (a, b){
			var that = this;
					if (that.text() != a && that.text() != b){
							that.text(a);
					}
					else
					if (that.text() == a){
							that.text(b);
					}
					else
					if (that.text() == b){
							that.text(a);
					}
			return this;
	}
});

/*
===================================================================================
	Функция animate.css
===================================================================================
*/

$.fn.extend({
		animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
						$(this).removeClass('animated ' + animationName);
				});
		}
});

/*
===================================================================================
	Функция для создания отступов у чисел (чтобы удобнее было читать) Пр-р 399 000
===================================================================================
*/

// С пробелом
function numberWithSpaces(number){
	var parts = number.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	return parts.join(".");
}
// С точкой
function numberWithDots(number){
	var parts = number.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return parts.join(".");
}