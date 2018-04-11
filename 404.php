<?php
	// Подключаем head
	require "blocks/head.html";
?>

<div class="simple-node">

<?php
	// Подключаем шапку site-header
	require "blocks/site-header.html";
?>

</div>



<div class="container">
	<!-- MAIN -->
	<div class="row no-gutters">
		<main class="col-md-12">
			<section class="page-404 col-md-4 offset-md-4">
				<div class="page-404-logo">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 313.1"><g fill="#01A2DD"><text transform="translate(147.987 234.462)" font-family="'Roboto'" font-size="128" letter-spacing="-1">404</text><path d="M396.7 313.1H99.8c-55 0-99.8-44.7-99.8-99.7 0-54.2 43.5-98.5 97.5-99.7C116.7 47 177.4 1 247.3 1c57.9 0 110 31.3 137.3 82.2 4-.4 8.1-.6 12.1-.6 63.6 0 115.3 51.7 115.3 115.3 0 63.5-51.7 115.2-115.3 115.2zM101.1 129.2c-47.9 0-85.6 37.8-85.6 84.2 0 46.4 37.8 84.2 84.3 84.2h296.9c55.1 0 99.8-44.8 99.8-99.8S451.7 98 396.7 98c-4.9 0-9.8.3-14.5 1-3.5 1-7.3-.7-8.9-4-23.9-48.5-72.2-78.6-126-78.6-64.8 0-120.8 44-136.3 106.9-.9 3.5-4.3 5.8-7.7 5.9l-2-.1c-.1.1-.1.1-.2.1z"/></g></svg>
				</div>
				<div class="text-center">
					<h2 class="page-404-title">страница не найдена</h2>
					<div class="page-404-desc">Нам не удалось найти указанную страницу</div>
					<a href="/" role="button" class="btn-back">назад</a>
				</div>
			</section>
		</main>
	</div>
</div>


<?php
	// Подключаем подвал
	require "blocks/footer.html";

	// Подключаем скрипты перед </body> и закрывающие теги
	require "blocks/scripts.html";
?>