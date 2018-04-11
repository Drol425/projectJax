<?php
	// Подключаем head
	require "blocks/head.html";
?>

<?php
	// Подключаем шапку site-header
	require "blocks/site-header.html";
?>


	<!-- MAIN -->
	<main>
		<article class="payment-delivery">
			<!-- HEADER: Оплата и доставка -->
			<header class="payment-delivery-header custom-page-header">
				<div class="container table-cell">
					<div class="row">
						<div class="payment-delivery-title">
							<h2>оплата и доставка</h2>
						</div>
					</div>
				</div>
			</header>
			<!-- SECTION: Оплата -->
			<section class="container">
				<header class="text-center hid">
					<h2>оплата</h2>
				</header>
				<div class="row no-gutters">
					<!-- col #1 -->
					<figure class="col-md-4">
						<div class="icon-wrap icon-profit">
							<img src="img/profit.svg" alt="">
						</div>
						<figcaption>
							<h3>оплата наличными</h3>
							<p>в офисе или курьеру</p>
						</figcaption>
					</figure>
					<!-- col #2 -->
					<figure class="col-md-4">
						<div class="icon-wrap icon-fusion-credit-card">
							<img src="img/fusion-credit-card.svg" alt="">
						</div>
						<figcaption>
							<h3>безналичным способом</h3>
							<p>только для юр.лиц, ип</p>
						</figcaption>
					</figure>
					<!-- col #3 -->
					<figure class="col-md-4">
						<div class="icon-wrap icon-parcel">
							<img src="img/parcel.svg" alt="">
						</div>
						<figcaption>
							<h3>наложенным платежом</h3>
							<p>в почтовом отделении</p>
						</figcaption>
					</figure>
				</div>
			</section>
			<!-- SECTION: Доставка -->
			<section class="container">
				<header class="text-center">
					<h2>доставка</h2>
				</header>
				<div class="row no-gutters">
					<!-- col #1 -->
					<figure class="col-md-4">
						<div class="icon-wrap icon-2-days">
							<img src="img/2-days.svg" alt="">
						</div>
						<figcaption>
							<h3>сроки доставки</h3>
							<p>до 2-ух рабочих дней с момента<br> заказа</p>
						</figcaption>
					</figure>
					<!-- col #2 -->
					<figure class="col-md-4">
						<div class="icon-wrap icon-shipping-cost">
							<img src="img/shipping-cost.svg" alt="">
						</div>
						<figcaption>
							<h3>цена доставки</h3>
							<p>от 0 руб, уточняйте для каждого<br> товара и услуги</p>
						</figcaption>
					</figure>
					<!-- col #3 -->
					<figure class="col-md-4">
						<div class="icon-wrap icon-truck">
							<img src="img/truck.svg" alt="">
						</div>
						<figcaption>
							<h3>доставка в регионы</h3>
							<p>курьерскими службами и термина<br>лами по их тарифам/срокам</p>
						</figcaption>
					</figure>
				</div>
			</section>
			<!-- SECTION: Самовывоз -->
			<section class="container pickup">
				<header class="text-center">
					<h2>самовывоз - бесплатно!</h2>
				</header>
				<p class="pickup-text"><strong>Самовывоз товаров</strong> осуществляется бесплатно из офиса интернет-магазина "Гуд Климат" по адресу: Санкт-Петербург, ул. Серпуховская, д.34, телефон +7-812-340-00-36<br><br>На разные товарные предложения <strong>действуют индивидуальные сроки</strong> готовности к самовывозу - уточняйте информацию по телефону</p>
				<div class="pickup-icon">
					<div><img src="img/pickup.svg" alt="Самовывоз"></div>
				</div>
			</section>

		</article>
	</main>


<?php
	// Подключаем подвал
	require "blocks/footer.html";

	// Подключаем скрипты перед </body> и закрывающие теги
	require "blocks/scripts.html";
?>