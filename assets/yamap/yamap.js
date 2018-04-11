$(document).ready(function(){

	// Проверяем есть ли карта на странице
	if($("#yamap-spb").length){



		ymaps.ready(function(){

				var

				// Map positions. Vertical | Horizontal
				mapMyPos  = [59.9122,30.3256],
				// mapMyPos  = [59.91279202985909,30.32528244742946],
				mapCenter = [59.91369202985909,30.32528244742946],
				officeSPB = [59.91369202985909,30.32528244742946],

				// zoomControl position
				zoomControl = new ymaps.control.ZoomControl({
					options: {
						position: {
							top:167,
							// top:147,
							right:10
						},
					}
				}),
				map = new ymaps.Map('yamap-spb',{
				center: mapMyPos,
				zoom: 15,
				options: {
					position: {
						right:0
					},
				},
				controls:[
							// 'typeSelector'
						],
				behaviors:[
							// 'default',
							// 'scrollZoom',
							'drag',
							'rightMouseButtonMagnifier'
							]
			}),

			// Set marker layout
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="yamarker">$[properties.iconContent]</div>'
			),

			// Set Balloon layout (infobox)
			MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="infobox">' +
					'<div class="preview-contacts">'+
						'<strong>Наш Офис</strong>'+
						'<p>Серпуховская улица, дом 34</p>'+
						'<button>...</button>'+
					'</div>'+
					'<div class="full-contacts">'+
						'<ol>'+
							'<li class="office-worktime">'+
								'<p title="Время работы офиса">С 10:00 - 18:00 (ПН - ПТ)</p>'+
									'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.16 97.16"><g><path d="M48.58 0C21.793 0 0 21.793 0 48.58s21.793 48.58 48.58 48.58 48.58-21.793 48.58-48.58S75.367 0 48.58 0zm0 86.823c-21.087 0-38.244-17.155-38.244-38.243S27.493 10.337 48.58 10.337 86.824 27.492 86.824 48.58 69.667 86.823 48.58 86.823z"/><path d="M73.898 47.08H52.066V20.83a4 4 0 0 0-8 0v30.25a4 4 0 0 0 4 4h25.832a4 4 0 0 0 0-8z"/></g></svg>'+
							'</li>'+
							'<li class="phone">'+
								'<a href="tel:+78123400036" title="Звоните с 09:00 до 22:00 (без выходных)">'+
									'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.077 348.077"><path d="M340.273 275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076a792.327 792.327 0 0 1-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826.721-39.521L73.39 8.194c-10.682-10.68-28.421-10.356-39.518.744l-15.15 15.237.414.411c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.941-6 127.785 20.89 181.564 93.866 254.541c100.875 100.868 182.167 93.248 185.674 92.876 7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l.331.294 15.348-15.029c11.074-11.098 11.393-28.83.716-39.542z"/></svg>'+
									'<span>7 (812) 34-000-36</span>'+
								'</a>'+
							'</li>'+
							'<li class="phone">'+
								'<a href="tel:+78007008335" title="Звонок бесплатный. Звоните с 09:00 до 22:00 (без выходных)">'+
									'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.077 348.077"><path d="M340.273 275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076a792.327 792.327 0 0 1-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826.721-39.521L73.39 8.194c-10.682-10.68-28.421-10.356-39.518.744l-15.15 15.237.414.411c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.941-6 127.785 20.89 181.564 93.866 254.541c100.875 100.868 182.167 93.248 185.674 92.876 7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l.331.294 15.348-15.029c11.074-11.098 11.393-28.83.716-39.542z"/></svg>'+
									'<span>7 (800) 700-83-35</span>'+
								'</a>'+
							'</li>'+
							'<li class="office-pickup"><i>самовывоз бесплатный</i></li>'+
						'</ol>'+
						'<div class="office-door" title="Вход. Фиолетовая дверь под треугольным навесом">'+
							'<img src="data:image/jpeg;base64,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" alt="" width="91" height="140">'+
						'</div>'+
					'</div>'+
				'</div>'
			,{
				/**
				 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
				 * @function
				 * @name build
				 */
				build: function(){
					this.constructor.superclass.build.call(this);

					this._$infobox = $('.infobox');

					// Центрируем
					this.centerInfobox();

					// Показать еще
					$('.infobox button').on('click',function(){
						$('.infobox  .full-contacts').toggle();
					});

					// Закрыть балун (infoBox)
					map.events.add('click', function(e){
						map.balloon.close();
					});
				},

				// Центрируем
				centerInfobox: function(){
					this._$infobox.css({
						left: -(this._$infobox[0].offsetWidth / 2)+6, //12-6 ширина маркера
					});
				},

			}),

			// Create marker
			marker = new ymaps.Placemark(officeSPB,{
				iconContent: 'Гуд Климат',
			},{
				// Опции.

				// Необходимо указать данный тип макета.
				iconLayout: 'default#imageWithContent',
				// Своё изображение иконки метки.
				iconImageHref: '',
				// Размеры метки.
				iconImageSize: [80, 12],
				// Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
				iconImageOffset: [0, 0],
				// Смещение слоя с содержимым относительно слоя с картинкой.
				iconContentOffset: [0, 0],
				// Макет содержимого.
				iconContentLayout: MyIconContentLayout,

				// Балун (infobox)
				balloonShadow: false,
				balloonLayout: MyBalloonLayout,
				balloonPanelMaxMapArea: 0,

				//Не скрывать маркер при открытии балуна
				hideIconOnBalloonOpen:false,

			});

			// console.log("marker.infobox", marker.infobox);
			// Zoom map event
			// map.events.add("mouseleave", function () {
			// 	map.behaviors.disable('scrollZoom');
			// });
			map.events.add("click", function () {
				map.behaviors.enable('scrollZoom');
			});
			marker.events.add("click", function () {
				map.behaviors.enable('scrollZoom');
			});



		// Добавить зум бар
		map.controls.add(zoomControl);

		// Добавить маркер
		map.geoObjects.add(marker);

		// Показать балун
		marker.balloon.open();

		});



	}

});