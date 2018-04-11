	// Событие для стилизованного файла
	$(".custom-file-input input").on("change",function(){
		var fileName = $(this).val().replace(/^.*[\\/]/, '');
		!fileName.length? fileName = $(this).parent().find(".custom-file-name").attr("data-file-name") : "";
		$(this).parent().find(".custom-file-name").text(fileName);
	});

	// Запоминаем имя формы/кнопки по которой был клик
	var formName = '';

	$("a[data-form-name],button[data-form-name],input[data-form-name]").on("click",function(){
		formName = $(this).attr("data-form-name");
	});


	$(function(){

/*
===================================================================================
	simpleSubmitForm() - ajax отправка форм
===================================================================================
*/
		function simpleSubmitForm(form,...params){
			var
					siteUrl       = location.origin,
					// form action url
					formActionUrl = form.action,
					// custom url
					customUrl     = siteUrl+"/ajax/callback.php",
					// collect checkboxes
					checkedOptions = [],
					// extra params
					extraAjaxParams = {
						'siteurl'          : location.href,
						'formname'         : formName,
						//'checkedoptions'   : checkedOptions
					},
					formData = new FormData($(form).get(0));

			// Сбор Чекбоксов
			//$(form).find("input:checked").map(function(){
			//	checkedOptions.push($(this).val());
			//});

			// Добавляем параметры из объекта extraAjaxParams в formData
			$.each(extraAjaxParams,function(key,value){
				formData.append(key,value);
			});


			// Ajax отправка
			$.ajax({
				url:customUrl,
				type:"POST",
				data:formData,

				// for upload files
				contentType: false,
				processData: false,

				beforeSend:function(){
					$(validator.submitButton).length? $(validator.submitButton).addClass("spinner") : $(form).find("button[type=submit]").addClass("spinner")
				}
			}).done(function(response){

				var isResponse = response.length;

				if(isResponse){
					var response   = $.parseJSON(response),
							isStatus   = typeof response.status,
							statusForm = "";

					isStatus? statusForm = response.status : statusForm = ""


					switch(statusForm){
						case "success":
							swal({
								title: "Спасибо!<br>Ваша заявка отправлена.<br>В ближайшее время мы с Вами свяжемся!",
								type: "success",
								confirmButtonText: "Ок",
								// confirmButtonColor:"#01a2dd",
								html: true,
							});
							clearForm();
							console.log("Submit Success");
							break;

						case "invalid":
							console.warn("Submit Invalid Captcha");
							break;

						case "debug":
							swal({
								title: "Режим Отладки",
								text: response.debugContent,
								type: "warning",
								confirmButtonText: "Закрыть",
								confirmButtonColor:"",
								html: true,
							});
							console.warn("Submit Debug");
							break;

						default:
							swal({
								title: "Произошла непредвиденная ошибка",
								text: "",
								type: "error",
								confirmButtonText: "Ок",
								html:true,
							});
							console.warn("Submit Error");
							break;
					}

				}else{
					swal({
						title: "Произошла ошибка, данные отсутствуют",
						text: "",
						type: "error",
						confirmButtonText: "Ок",
						html:true,
					});
					console.warn("Submit Empty Data Error");
				}


				function clearForm(){

					// Reset form
					form.reset();
					$(form).find("*").removeClass("invalid-field success-field");

					// Reset spinner
					$(validator.submitButton).length? $(validator.submitButton).removeClass("spinner") : $(form).find("button[type=submit]").removeClass("spinner")
					// Reset custom file
					$(form).find(".custom-file-name").empty();


					// Close popups
					var isMagnificPopup  = $(form).closest(".mfp-wrap").length;

					if(isMagnificPopup){
						$.magnificPopup.close();
					}
				}

				// Reset reCaptcha
				window.grecaptcha? grecaptcha.reset() : false


			});

			return false;


		}



/*
===================================================================================
	Настройки валидации
===================================================================================
*/
		$.validator.addMethod("minmask",function(value,element,params){
				return value.replace(/\D+/g,'').length >= params;
			},"");
		$.validator.addMethod("mask",function(value,element){
				return value.replace(/\D+/g,'').length >= 1;
			},"");

		// Set Default Validate
		$.validator.setDefaults({
			debug: false,
			// onfocusout: true,

			// Wrap message
			wrapper: "div",
			validClass: "success-field",
			errorClass: "invalid-field",

			// Typing validation
			onkeyup: function(element){
							$(element).valid();
			},
			onsubmit: true,
			onclick: false, // Исключаем ошибки для checkbox
			rules:{
								// Все поля с атрибутом required обязательны
								// agree: "required",
								"client-name":{
									required: true,
									minlength: 2,
									maxlength: 40,
								},
								"client-phone-country-code":{
									mask: true,
									minmask: 1,
									require_from_group: [3, ".phone-group"],
								},
								"client-phone-code":{
									require_from_group: [3, ".phone-group"],
									mask: true,
									minmask: 3,
								},
								"client-phone-number":{
									require_from_group: [3, ".phone-group"],
									mask: true,
									minmask: 7,
								},
								"client-message":{
									required: true,
									minlength: 10,
									maxlength: 1000,
								},
								"cheap-url":{
									required: true,
											 url: true,
								},
								email:{
									// required: true,
									email: true,
								},

			},
			messages:{
									name:{
										required:  "Введите имя",
										minlength: "Короткое имя",
										maxlength: "Ваше Имя слишком длинное",
									},
									phone:{
										required:  "Введите телефон",
										minlength: "Короткий номер телефона",
										maxlength: "Слишком длинный номер",
									},

			},
			//Скрываем сообщения в дивах об ошибках
			errorPlacement: function(error,element){
				// Скрывать ошибки
				return true;

			},
			submitHandler: function(form){
							simpleSubmitForm(form);
			}

		});


/*
===================================================================================
	Запускаем Валидацию форм
===================================================================================
*/

		// страница контакты, форма обратной связи
		if($(".contact-form-area form.contact-form").length){
			var validator = $(".contact-form-area form.contact-form").validate();
		}
		// оставить отзыв
		if($(".add-review form").length){
			var validator = $(".add-review form").validate();
		}
		// ответить на комментарий
		if($(".add-reply form").length){
			var validator = $(".add-reply form").validate();
		}






	});