
// ---------   SLIDER second  ------------------------

new Swiper('.swiper', {
	// ARROWS
	navigation: {
		nextEl: '.swiper-custom-button-prev',
		prevEl: '.swiper-custom-button-next'
		// nextEl: 'swiper-button-prev',
		// prevEl: 'swiper-button-next'
	},
	//Navigation
	//Bullets, current position , progressbar
	pagination: {
		el: '.swiper-pagination',
		//      Bullets
		clickable: true,
		//     Dinamiс bullets
		dynamicBullets: true,
		//     Custom bullets
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">'
		// 		+ (index + 1) + '</span>';
		// },
		//     Fraction
		// type: 'fraction',
		// Custom out fraction
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Foto <span class="' + currentClass + '"></span>' +
		// 		' to ' +
		// 		'<span class="' + totalClass + '"></span>';
		// },
		//     Progressbar
		//  type: 'progressbar',
	},
	//-           Scroll
	// scrollbar: {
	// 	el: '.row-product__swiper-scrollbar',
		// Opurtunity move scroll
	// 	draggable: true
	// },
	
	//    Turn on / Turn off
	//    Move to PC
	simulateTouch: true,
	//   Ratio swipe
	touchRatio: 1,
	//   actuation angle
	touchAngle: 45,
	//    Grab  cursor
	grabCursor: true,
	//Switching click to slide
	slideToClickSlide: true,

	//Navigation with hash
	// hashNavigation: {
		// Track object(Отслеживать объект)
		// watchState: true,
	// },

	//Navigation with keyboard
	keyboard: {

		// Turn on/ Turn off
		enabled: true,

		// Turn on/ Turn off
		//just when slider 
		// in Viewport
		onlyInViewport: true,

		// Turn on/ Turn off
		//keys
		// pageUp, pageDown
		opageUpDown: true,

	},
	
	//Navigation with mouse
	// mousewheel: {
		//Sensitivity mouse wheel(Чувствительность колеса мыши)
		// sensitivity: 1,
		// Object class to turn on
		//scroll mouse
	// 	eventsTarget: ".image-slider"
	// },
	//Autoheight slider(Ползунок автоматической высоты)
	autoHeight: true,

	//Quantity for show(Количество для просмотра)
	slidesPerView: 'auto',
	// slidesPerView: '2',

	//Margin between objects(Отступ между слайдами)
	// spaceBetween: 1,

	//Turn off function
	//if slides less than need(Выключить функцию
	//если слайдов меньше, чем нужно)
	// watchOverflow: true,

	// Quantity moving slides(Количество движущихся слайдов)
	slidesPerGroup: 1,

	//Active slide in center(Активный слайд в центре)
	centerSlides: true,

	//Start slide(Начать слайд)
	// initialSlides: 1,
	
	//MultiColumns(Мультирядность)
	// slidesPerColumn: 2,

	//Infinity slider(Бeсконечный слайдер)
	loop: true,

	//Quintity double slides(Количество дублируемых слайдов)
	loopedSlides: 1,

	//Free Mode (Свободный режим автопрокрутка)
	// autoplay: {
	//Pause between scrolling(пауза между прокруткой)
	// delay: 1000,
	//Finish last slide (Закончить на последнем слайде)
	// stopOnSlide: true,
	//Turn off after manual switch (Отключить после 
	//ручного переключения)
	// disableOnInteraction: false,
	// },
	//Speed autoplay(Скорость свободного режима)
	speed: 800,

	//Vertical slider(Вертикальный слайдер)
	// direction: 'vertical',
	
	//Effects switchng slides
	//Change transparency(Смена прозрачности)
	// effect: 'fade',
	
	//Addition to fade(Дополнение к fade)
	// fadeEffect: {
	//Parallel(Параллельная)
	// Change transparency(Смена прозрачности)
	// crossFade: true
	// },
	
	//Effects switching slides(Эффект переключения слайдов)
	//Flip (Переворот)
	// effect: 'flip',

	//Addition to Flip (Дополнение к Flip)
	// flipEffect: {
	//Shadow(Тень)
	// slideShadows: true,
	//Show just one slide (Показ только одного слайда)
	// limitRotation: true
	// },

	//Effects switching slides(Эффект переключения слайдов)
	//Cube (3D КУБ)
	// effect: 'cube',

	//Addition to cube
	// cubeEffect: {
	//Settings menu
		// slideShadows: true,
		// shadow: true,
		// shadowOffset: 20,
		// shadowScale: 0.94
	// 	slideShadows: false,
	// 	shadow: false,
	// 	shadowOffset: 20,
	// 	shadowScale: 0.95
	// },
	
	//Effects switching slides(Эффект переключения слайдов)
	//Flow effect(Эффект потока)
	// effect: 'coverflow',

	//Addition to coverflow
	// coverFlowEffect: {
		//Corner (Угол)
		// rotate: 0,
		//Overlay (Наложение)
		// stretch: 10,
		//Shadow (Тень)
	// 	slideShadows: false,
	// },
	
	//ADAPTIVE
	// Width screen
	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1,
		},
		922: {
			slidesPerView: 1,
		},
		1020: {
			slidesPerView: 1,
		},
		1270: {
			slidesPerView: 1,
		}
		
	},

	//ADAPTIVE version swiper after 5.3.0
	//Соотношение сторон ВЫСОТА  /  ШИРИНА
	breakpoint: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	
	//Lazy Loading
	//Turn of preloading pictures
	// (Отключить предзагрузку картинок)
	// preloadImages: false,
	// Load picture (Подгрузка картинок)
	// lazy: {
	// loadOnTransitionStart: false,
	//Load prev picture(Подгрузить предыдущюю картинку)
	//Load next picture(Подгрузить следующюю картинку)
	// loadPrevNext: false,
	// },
	//Monitoring emerging slides (Слежка за видимыми слайдами)
	// watchSlidesProgress: true,
	//Adding a class to visible slides
	// (Добавление класса видимым слайдам)
	// watchSlidesVisibility: true,

	//Для подгрузки lazy режима нужно в img вставить картинку через
	// data-src="picture" , а в src вставить каку-нить картинку 1px
		// <div data-hash="slide-1" class="image-slider__swiper-slide swiper-slide">
		// 	<div class="image-slider__image">
	// 			<img data-src="images/row-product-diagnostica.jpg"" 
	//            src="images/1x1.png" class="swiper-lazy"
		// 				alt="diagnostica image">
		// И добавить класс
		// <div class="image-lazy-preloader"></div>
		// 	</div>
		// </div>
		
		// Update slider when slider elements change
		// (Обновить слайдер при изменении элементов слайдера)
		// observer: true,
		// Update slider when slider parents change
		// (Обновить слайдер при изменении родительских 
		// элементов слайдера)
		// observeParents: true,
		// Update slider when slider children change
		// (Обновить слайдер при изменении дочерних 
		// элементов слайдера)
		// observeSlideChildren: true,
		
});