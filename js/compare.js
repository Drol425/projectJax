function initCompare(){

	var
			comparePopup     = $("#compare-popup"),
			removeLink       = comparePopup.find(".remove-from-compare"),
			radioCompareMode = comparePopup.find("input[type=radio]");


	//Обновить счетчик товаров в сравнении
	updateAllCountCompare();



	//Событие Удалить колонку товара
	removeLink.on("click",function(){

		removeProductCompare($(this));

	});

	//Событие Переключение инпута радио, Скрыть/Показать параметры товаров
	radioCompareMode.on("change",function(){

		var currentTable = $(this).closest("table");
		var countCompare = getCountCompare(currentTable);

		//Если есть хотябы 2 товара, выполняем код для поиска одинаковых параметров
		if(countCompare > 1){

			var compareMode  = $(this).val(),
					currentTable = $(this).closest("table");

			//Если нажато показать все параметры
			if(compareMode == "show"){
				//Удаляем размытие
				currentTable.find("tbody tr.blur-same").removeClass("blur-same");
			}
			//Если нажато скрыть все параметры
			if(compareMode == "hide"){
				//Сравниваем одинаковый текст
				compareText(currentTable);
				//Сравниваем одинаковые опции (галочки у товаров)
				compareOption(currentTable);
			}

		}

		//Если товар 1 или нету, а размытие висит, тогда удаляем
		if(countCompare <= 1){

			var
					$blurTr  = comparePopup.find("table tbody tr.blur-same"),
					isBlurTr = $blurTr.length;

			if(isBlurTr){
				$blurTr.removeClass("blur-same");
			}
		}


	});


	function compareText(currentTable){
		//Берем все строки tr
		var compareRows = currentTable.find("tbody tr");
		//Исключаем ссылку удалить из сравнения
		var isRmLink = false;

		$.map(compareRows,function(tr){

			var
					$rowParams     = $(tr).find("td:not(:empty)"),
					rowParamsCount = $rowParams.length,
					uniqueNames    = [];

			//Для каждой итерации проверяем td, если текст в них одинаковый - скрываем tr
			$.map($rowParams, function(td){

				var
						tdText       = $(td).text(),
						tdTextFormat = tdText.toLowerCase().trim(); //Форматируем текст

					//Проверка уникальности текста из всех td в строке
					if($.inArray(tdTextFormat, uniqueNames) === -1){
						uniqueNames.push(tdTextFormat);
					}

				//Исключаем ссылку удалить из сравнения
				isRmLink = $(td).find(".remove-from-compare").length;


			});

			//Количество уникальных значений в массиве
			var uniqueNamesLen = uniqueNames.length;



			//Если меньше или ровно, значит все параметры в строке повторяются, и нужно скрывать строку tr
			if(uniqueNamesLen <= 1 && !isRmLink){
				var parentRow  = $rowParams.closest('tr').addClass("blur-same")
				// var parentRow  = $rowParams.closest('tr').hide()
			}




		});
	}



	function compareOption(currentTable){
		//Берем все строки tr
		var compareRows = currentTable.find("tbody tr");

		$.map(compareRows,function(tr){

			var
					$rowParams     = $(tr).find("td[class^=option-]"),
					rowParamsCount = $rowParams.length,
					uniqueNames    = [];

			//Для каждой итерации проверяем td, если класс одинаковый - скрываем tr
			$.map($rowParams, function(td){

				var
						tdText       = $(td).attr("class"),
						tdTextFormat = tdText.toLowerCase().trim(); //Форматируем имя класса

					//Проверка уникальности классов из всех td в строке
					if($.inArray(tdTextFormat, uniqueNames) === -1){
						uniqueNames.push(tdTextFormat);
					}



			});

			//Количество уникальных значений в массиве
			var uniqueNamesLen = uniqueNames.length;


			//Если меньше или ровно, значит все параметры в строке повторяются, и нужно скрывать строку tr
			if(uniqueNamesLen <= 1){
				var parentRow  = $rowParams.closest('tr').addClass("blur-same")
			}




		});
	}




	//Удаление всей колонки товара в сравнение
	function removeProductCompare($that){

		var
				colNumber    = $that.closest("td").index(),
				colNumberInc = $that.closest("td").index()+1,
				currentTable = $that.closest("table"),
				countCompare = getCountCompare(currentTable);


		//Если количество товаров == 1. Меняем индексы для удаления нужной ячейки tfoot таблицы
		if(countCompare == 1){
			colNumberInc = colNumber;
		}


		var
				currentColFull      = [];
				currentTable        = $that.closest("table"),
				currentColHead      = currentTable.find("thead tr > td:nth-of-type("+colNumber+")"),
				currentColBody      = currentTable.find("tbody tr > td:nth-of-type("+colNumber+")"),
				currentColFootFirst = currentTable.find("tfoot tr:first-of-type > td:nth-of-type("+colNumber+")"),
				currentColFootLast  = currentTable.find("tfoot tr:last-of-type > td:nth-of-type("+colNumberInc+")");

		currentColFull.push(currentColHead,currentColBody,currentColFootFirst,currentColFootLast);


		//Процесс удаления Колонок товара
		$.map(currentColHead,function(td){
			td.remove();
		});
		$.map(currentColBody,function(td){
			td.remove();
		});
		$.map(currentColFootFirst,function(td){
			td.remove();
		});
		$.map(currentColFootLast,function(td){
			td.remove();
		});


		//Обновляем счетчик товаров
		updateAllCountCompare();

	}

	//Считаем кол-во товаров в текущей таблице
	function getCountCompare(currentTable){

		//empty это пустая клетка, которая нужна для оформления, поэтому исключаем
		var $countCompare = currentTable.find("thead > tr td:not(:empty)"),
				isTovars      = $countCompare.length;

		if(isTovars){
			return isTovars; //Отправляем количество
		}else{
			return false;
		}
	}

	//Считаем и обновляем кол-во товаров во всем compare, в каждой таблице
	function updateAllCountCompare(){

		var $tabsTable = comparePopup.find(".tab-pane table");

		$.map($tabsTable,function(table){
			//empty это пустая клетка, которая нужна для оформления, поэтому исключаем
			var $countCompare   = $(table).find("thead > tr td:not(:empty)"),
					getCountCompare = $countCompare.length;
					console.log("getCountCompare", getCountCompare);

			var $tabParent  = $(table).closest(".tab-pane");
			var tabParentID = "#"+$tabParent.attr("id");

			$(".compare-switch-category a[href='"+tabParentID+"']").attr("data-count-compare",getCountCompare);
		});

		console.log("update");

	}





	function test(){
		// del Col Number
		// comparePopup.find("table tr > td:nth-child("+colNumber+")").remove();

		var currentDataTovar = comparePopup.find("table tr > td:nth-child("+colNumber+")").clone();
		$.each(currentDataTovar,function(k,v){
			// console.log(v.closest("tr"));


			// var cloneTd = v;
			// v.closest("tr").prepend(cloneTd);
			v.after(v);
			// в конец родителям нам нужно вставлять данные


			// comparePopup.find("table tr:nth-child("+k+")").after(v);
		});


	}














	// https://stackoverflow.com/questions/36209798/clone-each-and-append-to-each


	// check advantages
	// сравнить галочки просто

	var advantagesOption = comparePopup.find("table tr > td[class^=option-]");
	$.each(advantagesOption,function(k,v){
		var advantagesParent = v.closest("tr");

		// console.log("advantagesParent", advantagesParent);


		// проблема дубликатов т.к option на одной строке несколько
		// необходимо исклють вообще option none затем необходимо проверять какое кол-во у нас неактивных опций. если их больше чем 0, и активных больше чем 0, тогда всем активным нужно добавить класс green подсветки

	});




}

