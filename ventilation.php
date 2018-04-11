<?php
	// Подключаем head
	require "blocks/head.html";
?>

<?php
	// Подключаем шапку site-header
	require "blocks/site-header.html";
?>


	<!-- CENTER CONTAINER -->
	<div class="container">

	<?php
		// Подключаем filter
		require "blocks/filter/vent-filter.html";
	?>

		<!-- MAIN -->
		<div class="row no-gutters">
			<main class="col-md-12">
				<div class="wrap-tovars">

					<!-- SEARCH -->
					<div class="search-area row no-gutters">
						<div class="col-xl-8 col-lg-7 col-md-7">
							<!-- search field -->
							<div class="search">
								<input type="search" maxlength="52" spellcheck="false" placeholder='Поиск вентиляциии. Например "Vents ВК 250"'>
								<div class="search-mobile-filter">
									<button>Фильтр</button>
								</div>
								<button class="search-reset" title="Очистить поле поиска"></button>
							</div>
						</div>
						<div class="search-option col-xl-4 col-lg-5 col-md-5">
							<!-- sorting -->
							<div class="sort-menu">
								<span>Сортировать:</span>
								<div class="sort-menu-by">
									<select name="sort-menu-by">
										<option value="popular">популярные</option>
										<option value="cheap">дешевле</option>
										<option value="expensive">дороже</option>
										<option value="stock">по акции</option>
									</select>
								</div>
							</div>
							<!-- view mode -->
							<div class="view-mode">
								<span>Вид</span>
								<a href="?view=grid" class="switch-view"></a>
							</div>

						</div>
					</div>

					<div class="search-extra">
						<!-- search result -->
						<div class="search-result"><span class="search-title">Всего</span> <span class="count-search">667</span> <span class="search-title-tovars">товаров</span>.</div>
						<!-- tovars on page -->
						<div class="view-quantity-tovars">
							<a href="?show=20" class="active-view-quantity" title="Показать 20 товаров на странице">20</a>
							<a href="?show=40" title="Показать 40 товаров на странице">40</a>
							<a href="?show=80" title="Показать 80 товаров на странице">80</a>
							<a href="?show=100" title="Показать 100 товаров на странице">100</a>
						</div>
						<!-- search tags -->
						<div class="filter-tags">
							<a href="" class="reset-all">Сбросить все</a>
							<a href="">35000 - 40000</a>
						</div>
					</div>


				<!-- TOVARS -->
				<div class="tovars tovars-grid row no-gutters">

					<!-- tovar #1 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #2 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">новинка</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #3 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">акция</div>
							<div class="availability preorder">под заказ</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button class="fast-preorder-btn">предзаказ в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #4 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #5 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #6 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #7 -->
					<article class="tovar sold">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">новинка</div>
							<div class="availability outofstock">нет в продаже</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button class="fast-buy-btn" disabled>нет в продаже</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #8 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #9-->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #10 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #11 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #12 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #13 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #14 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #15 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #16 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #17 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #18 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #19 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

					<!-- tovar #20 -->
					<article class="tovar">
						<div class="price rub">
							<ins>37400</ins>
							<del>50500</del>
						</div>
						<div class="status">
							<div class="stock">хит-продаж</div>
							<div class="availability instock">в наличии</div>
						</div>
						<a href="product" class="tovar-photo">
							<img class="lazy" data-original="//content2.onliner.by/catalog/device/header/a103fb58e5d34151b50cec9a87b9edd8.jpeg" width="172" height="56" alt="Vents ВК 250 Купить недорого в интернет-магазине Гуд Климат. Телефон +7-800-700-83-35" title="Vents ВК 250">
						</a>
						<div class="tovar-info-area">
							<h2 class="tovar-name"><a href="product">Komatsu KSW-07H5</a></h2>
							<p class="tovar-short-charact">сплит-система, настенный блок, мощность охлаждения 2.21 кВт, мощность обогрева 2.35 кВт, шум 27-37 дБ</p>
						</div>
						<div class="tovar-buttons-area">
							<button type="button" class="fast-view-btn">быстрый просмотр</button>
							<button type="button" class="fast-buy-btn">купить в 1 клик</button>
						</div>
						<div class="extra-options">
							<button type="button" class="cart-btn"><span>добавить в корзину</span></button>
							<button type="button" class="compare-btn"><span>добавить в сравнение</span></button>
						</div>
					</article>

				</div>

				<!-- show more button -->
				<div class="text-center">
					<button class="show-more-tovars">Показать еще товары</button>
				</div>

				<!-- PAGINATION -->
				<div class="row">
					<ul class="pagination">
						<!-- left arrow -->
						<li class="pagination-left"></li>
						<!-- items list -->
						<li class="pagination-list">
							<ul>
								<li><a href="">1</a></li>
								<li><a href="">2</a></li>
								<li><a href="">3</a></li>
								<li class="active"><a href="">4</a></li>
								<li><a href="">5</a></li>
								<li><a href="">6</a></li>
								<li><a href="">7</a></li>
							</ul>
						</li>
						<!-- right arrow -->
						<li class="pagination-right"></li>
					</ul>
				</div>

				</div>
			</main>



		</div>
	</div>


<?php
	// Подключаем подвал
	require "blocks/footer.html";

	// Подключаем скрипты перед </body> и закрывающие теги
	require "blocks/scripts.html";
?>