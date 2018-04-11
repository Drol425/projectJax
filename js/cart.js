// Функция Запуска корзины и подсчета цен
function initBasket(){

	var basketPopup	   = $("#basket-popup"),
			maxSingleTovar = 999, // макс (кол-во) для одного товара в корзине
			minSingleTovar = 1,   // мин  (кол-во) для одного товара в корзине
			couponInput    = basketPopup.find(".coupon"); // Поле с купоном


	// Проверка купонов
	checkCoupon();

	// Считаем общую цену добавленных товаров
	calcTotalSum();


	// Событие ввода + Событие мыши прокрутка на инпуте (количество)
	$("#basket-popup .quantity-input-group input[type=number]").on("input mousewheel", function(e){
		calcBasket(e,$(this));
		// Отменяем дефолтное поведение, (обязательно для мышки)
		return false;
	});


	// Событие клика "Увеличить | Уменьшить"
	$("#basket-popup .quantity-input-group").on("click",".reduce,.increase", function(e){
		calcBasket(e,$(this));
	});


	// Событие клика. "Удалить товар из корзины"
	$(".del-from-basket").on("click",function(){
		// Удаляем товар
		$(this).closest("tr").remove();
		// Проверяем купон + Меняем общую цену
		checkCoupon();
	});


	function calcBasket(e,currentElement){

		// Если был клик
		if(e.type == "click"){
			var
				quantityTovar = currentElement.parent().find("input[type=number]"),
				isReduce   = currentElement.hasClass("reduce"),
				isIncrease = currentElement.hasClass("increase");
		}else{
			var
				quantityTovar = currentElement,
				isReduce   = false,
				isIncrease = false;
		}

		var
				quantityTovarVal      = quantityTovar.val(),
				currentTovarBasket    = currentElement.closest("tr"),
				currentTovarPriceVal  = currentTovarBasket.find(".tovar-price ins").text(),
				currentTovarPriceSum  = currentTovarBasket.find(".tovar-sum ins"),
				currentTovarCouponSum = currentTovarBasket.find(".tovar-sum del");


		// Проверка для всех событий. Запрещаем вводить кол-во больше 999
		if(quantityTovarVal > maxSingleTovar){
			quantityTovar.val(maxSingleTovar);
		}
		// Проверка для всех событий. Запрещаем вводить кол-во меньше 1
		if(quantityTovarVal < minSingleTovar){
			quantityTovar.val(minSingleTovar);
		}



		// Только для события ввода
		if(e.type == "input" && quantityTovarVal <= maxSingleTovar && quantityTovarVal >= minSingleTovar){
				// Считаем цену за товар и общую
				changePrice();
		}


		// Только для мышки или по клику.
		if(e.type == "mousewheel" || e.type == "click"){

			// Если увеличить (колесиком мыши) или кликнуть
			if(e.originalEvent.wheelDelta >= 0 || isIncrease){
				if(quantityTovarVal < maxSingleTovar){
					quantityTovarVal++;
				}
			}else{
			// Если уменьшить (колесиком мыши)
				if(quantityTovarVal > minSingleTovar){
						quantityTovarVal--;
				}
			}
			// Считаем цену за товар и общую
			changePrice();
		}


		// Функция подсчета цены
		function changePrice(){

			// Считаем кол-во
			quantityTovar.val(quantityTovarVal);

			// Считаем цену
			var newPriceCalc = currentTovarPriceVal * quantityTovarVal;

			// Меняем цену
			currentTovarPriceSum.text(newPriceCalc);


			// Считаем цену если введен валидный купон
			var isValidCoupon = basketPopup.hasClass("coupon-valid"),
					isDiscountTovar = currentTovarBasket.hasClass("cheap-category");
			if(isValidCoupon && isDiscountTovar){

				// Проверить категорию а потом посчитать
				var discountCoupon = (newPriceCalc*couponInput.attr("data-coupon-percent"))/100,
						priceWithCoupon = newPriceCalc-discountCoupon;

				currentTovarCouponSum.text(priceWithCoupon);
			}

			// Меняем общую цену
			calcTotalSum();
		}

	}


	// Функция подсчета общей цены
	function calcTotalSum(){
		var quantityTovars    = basketPopup.find("tbody tr"),
				cheapTovars       = basketPopup.find("tbody tr.cheap-category"),
				isCheapTovars     = cheapTovars.length,
				quantityTovarsVal = quantityTovars.length,
				sumTovar          = 0,
				sumCheapTovar     = 0,
				couponPercentVal  = couponInput.attr("data-coupon-percent");


		// Если корзина не пуста
		if(quantityTovarsVal){

			// Проходимся в цикле по нашим товарам в корзине
			for(var i = 1; i <= quantityTovarsVal;i++){
				sumTovar+=parseInt(basketPopup.find("tbody tr:nth-of-type("+i+") .tovar-sum ins").text());

				// Считаем общую цену если введен купон.
				if(isCheapTovars){
					var
							sumWithoutCheap = 0,
							sumWithCheap    = 0;

					if(basketPopup.find("tbody tr:nth-of-type("+i+")").hasClass("cheap-category")){
						var
								priceWithoutCalc = parseInt(basketPopup.find("tbody tr:nth-of-type("+i+") .tovar-sum ins").text()),
								calcCheap        = (priceWithoutCalc*couponPercentVal)/100;

						// Делаем дополнительный вывод цены с учетом купона
						basketPopup.find("tbody tr:nth-of-type("+i+") .tovar-sum del").text(priceWithoutCalc-calcCheap);

						sumWithCheap+=priceWithoutCalc-calcCheap;
					}else{
						sumWithoutCheap+=parseInt(basketPopup.find("tbody tr:nth-of-type("+i+") .tovar-sum ins").text());
					}

					sumCheapTovar+=sumWithoutCheap + sumWithCheap;
				}
			}

			// Меняем общую цену
			basketPopup.find("tfoot .total b").text(numberWithDots(sumTovar));

			// Меняем цену по купону
			if(isCheapTovars){
				basketPopup.find("tfoot .total-coupon b").text(numberWithDots(sumCheapTovar));
			}
		}else{
			// Меняем общую цену на ноль (на всякий пожарный)
			basketPopup.find("tfoot .total b").text(0);

			// Добавляем класс чтобы скрыть эл-ты корзины, т.к она пуста
			basketPopup.addClass("empty-basket");

			// Пишим статус корзины, Корзина пуста
			basketPopup.find(".basket-status").text("В корзине ничего нет");
		}
	}


	// Функция проверки купона
	function checkCoupon(){

		// Наши купоны из базы
		var getDbCoupons = {
					"coupons":{
								"черная пятница":{
									"coupon-status"   : true,
									"coupon-percent"  : 25,
									"coupon-category" : "кондиционеры",
									"coupon-cat-name" : "cond",
								},
								"дешевый ПОНЕДЕЛЬНИК":{
									"coupon-status"   : true,
									"coupon-percent"  : 3,
									"coupon-category" : "кондиционеры",
									"coupon-cat-name" : "cond",
								},
								"cheap monday":{
									"coupon-status"   : true,
									"coupon-percent"  : 10,
									"coupon-category" : "Вентиляция",
									"coupon-cat-name" : "vent",
								},
								"black friday":{
									"coupon-status"   : false,
									"coupon-percent"  : 1,
									"coupon-category" : "Вентиляция",
									"coupon-cat-name" : "vent",
								},
								"black friday":{
									"coupon-status"   : true,
									"coupon-percent"  : 2,
									"coupon-category" : "Прочее оборудование",
									"coupon-cat-name" : "equip",
								}
						}
				}

		// Запускаем проверку нашего купона + выводим скидку
		checkValidCoupon();


		// Запуск проверки по событию ввода.
		couponInput.on("input",function(){
			checkValidCoupon();
		});


		function checkValidCoupon(){
			var
					currInputVal    = couponInput.val(),
					currInputValStr = currInputVal.toString().toLowerCase();


			$.each(getDbCoupons.coupons,function(k,v){

				// Переводим в нижний регистр купоны из базы
				var dbValtoLow = k.toString().toLowerCase();

				// Ищем есть ли купон в базе и проверяем активный ли он
				if(currInputValStr == dbValtoLow && v["coupon-status"] == true){
					basketPopup.addClass("coupon-valid");

					// выводим информацию о скидке
					basketPopup.find(".coupon-stock-category").text(v["coupon-category"]);
					basketPopup.find(".coupon-stock-value").text(v["coupon-percent"]);
					basketPopup.find(".total-coupon span").text(v["coupon-percent"]);
					couponInput.attr("data-coupon-percent",v["coupon-percent"]);

					var stockCategories = basketPopup.find(".category-"+v["coupon-cat-name"]);

					// Очищаем скидочные товары
					basketPopup.find("tr.cheap-category").removeClass("cheap-category");
					// Добавляем скидку на товары
					stockCategories.addClass("cheap-category");

					return false;
				}else{
					basketPopup.removeClass("coupon-valid");
					// Очищаем скидочные товары
					basketPopup.find("tr.cheap-category").removeClass("cheap-category");
				}
			});

			// Проверяем есть ли товары на которые действует купон. Если нету добавляем класс
			var isCheapCategories = basketPopup.find("tr.cheap-category").length;

			if(!isCheapCategories){
				basketPopup.addClass("empty-cheap");
			}else{
				basketPopup.removeClass("empty-cheap");
			}



			// выводим число товаров в корзине
			basketPopup.find(".count-basket-tovars").text(basketPopup.find("tbody > tr").length);


			// Считаем стоимость, когда пользователь вводит купон на другую категорию товаров
			calcTotalSum();

		}
	}



}