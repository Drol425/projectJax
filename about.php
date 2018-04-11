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
		<article class="about-page">
			<!-- HEADER: О компании -->
			<header class="about-page-header custom-page-header">
				<div class="container table-cell">
					<div class="row">
						<div class="about-page-title">
							<h2>о компании</h2>
						</div>
					</div>
				</div>
			</header>
			<!-- SECTION: Опыт работы -->
			<section class="experience">
				<div class="container">
					<header class="text-center hid">
						<h2>Опыт работы</h2>
					</header>
					<div class="row no-gutters">
						<figure class="col-md-12 experience-block">
							<b class="ten">10</b>
							<div class="ex-circle circle-xs circle-1"></div>
							<div class="ex-circle circle-s  circle-2"></div>
							<div class="ex-circle circle-m  circle-3"></div>
							<div class="ex-circle circle-xs circle-4"></div>
							<div class="ex-circle circle-s  circle-5"></div>
							<figcaption>
								<b>лет опыта</b>
								<span class="work-years extra-advantages">Установили более 35 тысяч кондиционеров и систем вентиляции<br><b>с 2008 года</b></span>
							</figcaption>
						</figure>
					</div>
				</div>
			</section>
			<!-- SECTION: Почему мы? -->
			<section class="advantages">
				<div class="container">
					<header class="text-center">
						<h2>Почему мы?</h2>
						<p>Мы работаем в самом лучшем соотношении цена и качество</p>
					</header>
					<div class="row no-gutters">
						<!-- item #1 -->
						<figure class="col-md-3 col-xs-6">
							<figcaption>
								<b>01</b>
								<h3>самые низкие цены</h3>
							</figcaption>
						</figure>
						<!-- item #2 -->
						<figure class="col-md-3 col-xs-6">
							<figcaption>
								<b>02</b>
								<h3>высокое качество</h3>
							</figcaption>
						</figure>
						<!-- item #3 -->
						<figure class="col-md-3 col-xs-6">
							<figcaption>
								<b>03</b>
								<h3>гарантия до 5 лет</h3>
							</figcaption>
						</figure>
						<!-- item #4 -->
						<figure class="col-md-3 col-xs-6">
							<figcaption>
								<b>04</b>
								<h3>официальные дилеры</h3>
							</figcaption>
						</figure>
					</div>
				</div>
			</section>
			<!-- SECTION: Отзывы покупателей -->
			<section>
				<div class="container reviews-yandex">
					<header class="text-center">
						<div class="wrap-icon icon-heart">
							<img src="img/heart.svg" alt="">
						</div>
						<h2>отзывы покупателей</h2>
						<p>Что о нас говорят наши клиенты, читайте больше на <a href="//market.yandex.ru/shop/102682/reviews" rel="nofollow noopener noreferrer" target="_blank">yandex market</a></p>
					</header>
					<div class="row no-gutters">
						<ul class="owl-carousel owl-theme">
							<!-- review item #1 -->
							<li>
								<h3>Самойлов Илья</h3>
								<p>Без проблем купил подходящей мощности кондиционер. Устроила цена. Монтаж тоже тут заказывал. Спецы нормальные, все сделали как надо</p>
							</li>
							<!-- review item #2 -->
							<li>
								<h3>Боярский Тимур</h3>
								<p>По приемлемой цене нашел здесь кондиционер ASHG07LECA. Кроме доставки предложили и недорогую установку. В общем выгодно заглянул сюда</p>
							</li>
							<!-- review item #3 -->
							<li>
								<h3>Кулигин Роман</h3>
								<p>Не так давно приобрел на вашем сайте вентилятор AEROPAC SN. Система функционирует исправно. Удобна в использовании. Рекомендую!</p>
							</li>
							<!-- review item #4 -->
							<li>
								<h3>Серегин Александр</h3>
								<p>После подробной консультации приобрел кондиционер LG. Очень удобно, что можно его использовать и для обогрева.</p>
							</li>
							<!-- review item #5 -->
							<li>
								<h3>Егоров Виталий</h3>
								<p>Сплит-система от Гудклимата отличное вложение. В частном доме хороший микроклимат жилища очень важен для здоровья и настроения.</p>
							</li>
							<!-- review item #6 -->
							<li>
								<h3>Данилов Тёма</h3>
								<p>Заказ # 45321 оформили быстро. Кондиционер за три дня - не поверил бы, но мне привезли и установили все за меньше, чем трое суток.</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<!-- SECTION: Клиенты и партнеры -->
			<section class="partners">
				<div class="container">
					<header class="text-center">
						<h2>клиенты и партнеры</h2>
						<p>Более 70+ компаний проверенных временем и качеством, в том числе:</p>
					</header>
					<div class="row no-gutters">
						<ul class="owl-carousel owl-theme">
							<!-- item group #1 -->
							<li>
								<ul class="partners-group">
									<li><span class="flaktwoods"><img src="img/partners/01-flaktwoods.png" alt="Flaktwoods - партнер компании Гуд Климат"></span></li>
									<li><span class="pioner"><img src="img/partners/07-pioneer.png" alt="Pioner - партнер компании Гуд Климат"></span></li>
								</ul>
							</li>
							<!-- item group #2 -->
							<li>
								<ul class="partners-group">
									<li><span><img src="img/partners/02-mitsubishi.png" alt="Mitsubishi - партнер компании Гуд Климат"></span></li>
									<li><span class="siegenia"><img src="img/partners/08-siegenia.png" alt="Siegenia - партнер компании Гуд Климат"></span></li>
								</ul>
							</li>
							<!-- item group #3 -->
							<li>
								<ul class="partners-group">
									<li><span class="tion"><img src="img/partners/03-tion.png" alt="Tion - партнер компании Гуд Климат"></span></li>
									<li><span class="fujitsu"><img src="img/partners/09-fujitsu.png" alt="Fujitsu - партнер компании Гуд Климат"></span></li>
								</ul>
							</li>
							<!-- item group #4 -->
							<li>
								<ul class="partners-group">
									<li><span class="electrolux"><img src="img/partners/04-electrolux.png" alt="Electrolux - партнер компании Гуд Климат"></span></li>
									<li><span class="komfovent"><img src="img/partners/10-komfovent.png" alt="Komfovent - партнер компании Гуд Климат"></span></li>
								</ul>
							</li>
							<!-- item group #5 -->
							<li>
								<ul class="partners-group">
									<li><span class="toshiba"><img src="img/partners/05-toshiba.png" alt="Toshiba - партнер компании Гуд Климат"></span></li>
									<li><span class="daikin"><img src="img/partners/11-daikin.png" alt="Daikin - партнер компании Гуд Климат"></span></li>
								</ul>
							</li>
							<!-- item group #6 -->
							<li>
								<ul class="partners-group">
									<li><span class="general"><img src="img/partners/06-general.png" alt="General - партнер компании Гуд Климат"></span></li>
									<li><span class="marley"><img src="img/partners/12-marley.png" alt="Marley - партнер компании Гуд Климат"></span></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<!-- SECTION: Сертификаты -->
			<section>
				<div class="container certificates">
					<header class="text-center">
						<h2>сертификаты</h2>
						<p>Документы подтверждающие надежность нашей продукции</p>
					</header>
					<div class="row no-gutters">
						<ul class="owl-carousel owl-theme">
							<!-- cert item #1 -->
							<li>
								<a href="img/certificates/01-cert-mdv.jpg">
									<img src="img/certificates/min/01-cert-mdv.jpg"     width="178" height="241" title="Сертификат от компании MDV" alt="Сертификат Гуд Климат. Подтверждает, что компании уполномочено осуществлять продажи, установку и сервисное обслуживание кондиционеров торговой марки MDV">
								</a>
							</li>
							<!-- cert item #2 -->
							<li>
								<a href="img/certificates/02-cert-lessar.jpg">
									<img src="img/certificates/min/02-cert-lessar.jpg"  width="178" height="241" title="Сертификат от компании Lessar" alt="Сертификат Гуд Климат. Подтверждает, что компания является официальной торгующей организацией по оборудованию LESSAR на территории Российской Федерации">
								</a>
							</li>
							<!-- cert item #3 -->
							<li>
								<a href="img/certificates/03-cert-vakio.jpg">
									<img src="img/certificates/min/03-cert-vakio.jpg"   width="178" height="241" title="Сертификат от компании Vakio" alt="Сертификат Гуд Климат. Подтверждает, что компания является официальным дилером продукции Vakio на территории Ленинградской области">
								</a>
							</li>
							<!-- cert item #4 -->
							<li>
								<a href="img/certificates/04-cert-tion.jpg">
									<img src="img/certificates/min/04-cert-tion.jpg"    width="178" height="241" title="Сертификат от компании Tion" alt="Сертификат Гуд Климат. Удостоверяет, что компания прошла обучение и является сертифицированным специалистом по монтажу компактной приточной вентиляционной системы Бризер Тион O2 и Бризер Тион 3S">
								</a>
							</li>
							<!-- cert item #5 -->
							<li>
								<a href="img/certificates/05-cert-fujitsu.jpg">
									<img src="img/certificates/min/05-cert-fujitsu.jpg" width="178" height="241" title="Сертификат от компании Fujitsu" alt="Сертификат Гуд Климат. Подтверждает, что компании присвоен статус авторизованного дилера торговой марки Fujitsu">
								</a>
							</li>
							<!-- cert item #6 -->
							<li>
								<a href="img/certificates/06-cert-general.jpg">
									<img src="img/certificates/min/06-cert-general.jpg" width="178" height="241" title="Сертификат от компании General" alt="Сертификат Гуд Климат. Подтверждает, что компания является официальным дилером и имеет право продавать, осуществлять монтаж и сервисное обслуживание климатического оборудования марки GENERAL на территории Российской Федерации">
								</a>
							</li>
							<!-- cert item #7 -->
							<li>
								<a href="img/certificates/07-cert-tosot.jpg">
									<img src="img/certificates/min/07-cert-tosot.jpg"   width="178" height="241" title="Сертификат от компании Tosot" alt="Сертификат Гуд Климат. Подтверждает, что компания является официальным поставщиком оборудования для систем кондиционеривания Tosot на территории Российской Федерации">
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<!-- SECTION: История компании -->
			<section class="company-history">
				<div class="container">
					<header class="text-center">
						<h2>история компании</h2>
						<p>Как мы появились и наши дальнейшие планы</p>
					</header>
					<div class="row no-gutters">
						<p class="history-text">Компания <strong>"Гуд Климат"</strong> основана в 2008 году в рамках программы развития малого бизнеса в <strong>Санкт-Петербурге.</strong> <br>Наша цель - обеспечить каждого гражданина качественной техникой для создания индивидуального комфортного климата в помещениях.</p>
						<p class="history-text"><strong>"Гуд Климат"</strong> сотрудничает с официальными дистрибьюторами производителей оборудования, каталог представляет надежную технику по низким ценам. В каталоге представлено исключительно безопасное для окружающей среды оборудование. Климатическое оборудование и экология теперь рядом!</p>
						<p class="history-text">Живете Вы в квартире или в доме, работаете в офисе или в магазине, мы сделаем Вашу жизнь и работу комфортной! 100%! <br><strong>"Гуд Климат".</strong></p>
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