<?php

	$page_uri              = $_SERVER['REQUEST_URI'];

	$page_payment_delivery = "payment-delivery";
	$page_about            = "about";
	$page_contacts         = "contacts";
	$page_product          = "product";

	// Titles
	$title_main             = "Купить кондиционеры и вентиляцию с установкой — недорого в СПБ";
	$title_product          = "Купить кондиционер Komatsu KSW-07H5 (сплит-система) — в СПБ";
	$title_payment_delivery = "Оплата и доставка — Гуд Климат";
	$title_about            = "О компании — Гуд Климат";
	$title_contacts         = "Контакты — Гуд Климат";


	$is_page_payment_delivery = strpos($page_uri,$page_payment_delivery);
	$is_page_about            = strpos($page_uri,$page_about);
	$is_page_contacts         = strpos($page_uri,$page_contacts);
	$is_page_product          = strpos($page_uri,$page_product);



	if($is_page_payment_delivery){
		echo $title_payment_delivery;
	}

	if($is_page_about){
		echo $title_about;
	}

	if($is_page_contacts){
		echo $title_contacts;
	}

	if($is_page_product){
		echo $title_product;
	}

	if((($is_page_payment_delivery  <= 0) && ($is_page_about <= 0) && ($is_page_contacts  <= 0) && ($is_page_product  <= 0))){
		echo $title_main;
	}

?>