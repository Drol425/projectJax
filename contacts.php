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
		<article class="contacts-page" itemscope itemtype="https://schema.org/Organization">
			<!-- HEADER: Контакты -->
			<header class="contacts-page-header custom-page-header">
				<div class="container table-cell">
					<div class="row">
						<div class="contacts-page-title">
							<h2>контакты</h2>
						</div>
					</div>
				</div>
			</header>
			<!-- SECTION: Контактные реквизиты -->
			<section>
				<div class="container">
					<header class="text-center hid">
						<h2>Контактные реквизиты</h2>
					</header>
					<div class="row no-gutters">
						<!-- col #1 -->
						<figure class="col-md-4">
							<div class="icon-wrap icon-email">
								<img src="img/email.svg" alt="">
							</div>
							<figcaption>
								<h3>email</h3>
								<p>info@gudklimat.ru<br> Напишите нам, мы ответим</p>
								<b>Время ответа 24ч</b>
							</figcaption>
						</figure>
						<!-- col #2 -->
						<figure class="col-md-4">
							<div class="icon-wrap icon-phone">
								<img src="img/phone.svg" alt="">
							</div>
							<figcaption>
								<h3>телефон</h3>
								<p><span itemprop="telephone">+7-812-34-000-36</span> <br><span itemprop="telephone">+7-800-700-83-35</span> (бесплатно)</p>
								<b>с 9:00 — 22:00 Пн-Вс</b>
							</figcaption>
						</figure>
						<!-- col #3 -->
						<figure class="col-md-4">
							<div class="icon-wrap icon-map-mark">
								<img src="img/map-mark.svg" alt="">
							</div>
							<figcaption>
								<h3>Адрес офиса</h3>
								<p>Санкт-Петербург <br>Серпуховская улица, дом 34</p>
								<b>с 10:00 — 18:00 Пн-Пт</b>
							</figcaption>
						</figure>
					</div>
				</div>
			</section>
			<!-- SECTION: Мы на карте -->
			<section class="fluid-map">
				<header class="text-center hid">
					<h2>Мы на карте</h2>
				</header>
				<div id="yamap-spb">&nbsp;</div>
			</section>
			<!-- SECTION: Отправте нам сообщение -->
			<section class="contact-form-area">
				<div class="container">
					<header class="text-center">
						<h2>отправте нам сообщение</h2>
					</header>
					<div class="dot-pattern"></div>
					<div class="row no-gutters">
						<form name="contact_form" action="#" method="POST" class="contact-form">
							<div class="form-group">
								<div class="wrap-select">
									<select>
										<option selected>В тех.поддержку</option>
									</select>
								</div>
								<input type="text"     name="client-name" placeholder="Ваше имя" title="Как вас зовут?" maxlength="40">
								<div class="phone">
									<input type="text"   name="client-phone-country-code" placeholder="+7" class="phone-group" value="+7">
									<div class="phone-code-wrapper">
										<input type="text" name="client-phone-code" class="phone-group">
									</div>
									<input class="phone-number phone-group" type="text" name="client-phone-number">
								</div>
							</div>
							<div class="form-group">
								<textarea name="client-message" placeholder="Ваше сообщение" maxlength="400"></textarea>
							</div>
							<!-- button send form -->
							<div class="contact-form-submit-area">
								<button type="submit">отправить</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<!-- SECTION: Юридическая информация -->
			<section class="legal">
				<div class="container">
					<header class="text-center hid">
						<h2>Юридическая информация</h2>
					</header>
					<div class="row no-gutters">
						<p class="legal-text" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"><b>Юридическая информация о магазине:</b> <br>ООО "В заказе" 197732, <span itemprop="addressLocality">Санкт-Петербург</span>,  ул. <span itemprop="streetAddress">Ситцевая, дом 5, корпус 2</span>, офис 1-Н ОГРН 1089847323609</p>
						<meta itemprop="name" content="Гуд Климат">
					</div>
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