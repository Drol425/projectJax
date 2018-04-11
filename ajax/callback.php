<?php

// [SCRIPT: v0.24a] [SUPPORT: php 7] [AUTHOR FEEDBACK: https://vk.com/id112774136]

$hRequest          = $_SERVER['HTTP_X_REQUESTED_WITH'];
$isAjax            = isset($hRequest) && !empty($hRequest) && strtolower($hRequest) == 'xmlhttprequest';

//НАСТРОЙКИ
$isAttachFile      = true;
$isReCaptcha       = false;
$isDebug           = false;


if($isAjax){


	$isValidReCaptcha  = true;
	if($isReCaptcha){
		$secret           = "0000000000000000000000000000000000000000";
		$response         = $_POST['g-recaptcha-response'];
		$remoteip         = $_SERVER['REMOTE_ADDR'];
		$apiResponse      = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip"),true);
		$isValidReCaptcha = $apiResponse['success'];
	}

	$isValidFiles = false;
	if($isAttachFile){
		$isUploadFiles = false;
		foreach($_FILES as $v){
			if($v['error'] == 0){
				$isUploadFiles = true;
				break;
			}
		}
		if($isUploadFiles){
			$types        = array('image/gif', 'image/png', 'image/jpeg','image/jpg');
			$isValidFiles = in_array($_FILES['photo']['type'], $types);
		}
	}

	if(!$isDebug & $isValidReCaptcha){
		//ДАННЫЕ ИЗ ФОРМЫ
		$name    = trim(addslashes($_POST['client-name']));
		$phone   = trim(addslashes($_POST['client-phone-country-code']))." (".trim(addslashes($_POST['client-phone-code'])).") ".trim(addslashes($_POST['client-phone-number']));




		//ДОП ДАННЫЕ
		//$pageUrl  = trim($_POST['siteurl']);
		//$formName = trim($_POST['formname']);
		//$checkedOptions = $_POST['checkedoptions'];
		//!empty($checkedOptions)? $checkedOptions = trim(addslashes(implode(",",array($_POST['checkedoptions'])))) : $checkedOptions = 'Данные отсутствуют';



		//ДАННЫЕ САЙТА
		$date        = date("Y-m-d");
		$time        = date("H:i");
		$host        = $_SERVER['HTTP_HOST'];
		$hostName    = $host;
		$hostNameRus = ""; // Имя домена на русском (если не поддерживается IDN) Fallback

		//РУССКИЕ ДОМЕНЫ (PUNYCODE)
		$isIDN = function_exists('idn_to_utf8');
		$isIDN? $hostName = idn_to_utf8($hostName) : $hostName = $hostNameRus;


		//ПОЛУЧАТЕЛИ
		$to = array();
		//$to[] = "phptestsendmail@mail.ru";
		$to[] = "info@".$host;
		$to = implode(',',$to);


		//ОТПРАВИТЕЛЬ
		$sender = $host;


		//ТЕМА
		$subjectPrepare = "Перезвоните {$name}. Отправлена $date в $time";
		$subject = "=?utf-8?b?".base64_encode(trim($subjectPrepare))."?=";


		//СООБЩЕНИЕ
		$message  = array();
		$bodyHtml = array();

		$bodyHtml[] = "<b>Имя клиента:</b> $name";
		$bodyHtml[] = "<b>Телефон клиента:</b> $phone";
		//$bodyHtml[] = "<b>Выбранные опции клиента:</b> $checkedOptions";
		//$bodyHtml[] = "<b>Имя формы/кнопки:</b> $formName";
		//$bodyHtml[] = "<b>Адрес страницы:</b> $pageUrl";
		$bodyHtml[] = "-----------------------------------------------------------";
		$bodyHtml[] = "<b>Отправлена:</b> $date в $time";
		$bodyHtml[] = "<br>-----------------------------------------------------------";

		$bodyHtml = explode(' ',implode('<br>',$bodyHtml));

		if($isValidFiles){
			$photoFileTmp  = $_FILES['photo']['tmp_name'];
			$photoFileName = $_FILES['photo']['name'];
			$photoBase64   = chunk_split(base64_encode(file_get_contents($photoFileTmp)));

			$boundary2     = md5(uniqid(time()));
			$boundary3     = "--".md5(uniqid(time()))."--";


			$message[] = "--".$boundary2;
			$message[] = "Content-type:text/html; charset=iso-8859-1";
			$message[] = "Content-Transfer-Encoding: 7bit";
			$message[] = PHP_EOL;

			$message = array_merge($message,$bodyHtml);

			$message[] = PHP_EOL;
			$message[] =  "--".$boundary2;
			$message[] = "Content-Type: application/octet-stream; name=\"$photoFileName\"";
			$message[] = "Content-Transfer-Encoding: base64";
			$message[] = "Content-Disposition: attachment; filename=\"$photoFileName\"";
			$message[] = PHP_EOL;
			$message[] = $photoBase64;
			$message[] = PHP_EOL;
			$message[] = $boundary3;
		}else{
			$message = array_merge($message,$bodyHtml);
		}
		$message = implode(PHP_EOL,$message);

		//ЗАГОЛОВКИ
		$headers = array();
		$headers[] = "MIME-Version: 1.0";
		if($isValidFiles){
			$headers[] = "Content-type: multipart/mixed; boundary=\"$boundary2\" "; //charset=utf-8
		}else{
			$headers[] = "Content-type: text/html; charset=utf-8";
		}
		$headers[] = "X-Mailer: PHP/".phpversion();
		$headers[] = "From: Заявка с сайта $hostName <{$sender}>";
		//$headers[] = "Reply-To: $sender"; //E-mail клиента для ответа
		if($isValidFiles){
			$headers[] = PHP_EOL;
		}
		$headers = implode(PHP_EOL,$headers);



		//ФУНКЦИЯ ОТПРАВКИ
		mail($to, $subject, $message, $headers);

		//СТАТУС ОТПРАВКИ
		$status = array("status" => "success");
		echo json_encode($status);
	}


	//ОШИБКА КАПЧИ
	if(!$isDebug & !$isValidReCaptcha & $isReCaptcha){
		$status = array("status" => "invalid");
		echo json_encode($status);
	}

	//РЕЖИМ ОТЛАДКИ
	if($isDebug){
		$debug = array(
			"status"       => "debug",
			"debugContent" => "<pre>".print_r(array('$_POST' => $_POST)+array('$_GET' => $_GET)+array('$_REQUEST' => $_REQUEST)+array('$_FILES' => $_FILES),true)."</pre>",
		);
		if($isReCaptcha){
			$debug["debugContent"] .= "<pre>".print_r($apiResponse,true)."</pre>";
		}
		echo json_encode($debug);
	}


}