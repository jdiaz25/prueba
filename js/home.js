$(document).ready( function(){


	$('.scrolltop').click(function(){
		$('html, body').animate({ scrollTop: 0 },1000);
	});



	$('.nav-link').on('click',function(){
		var link = $(this);

		$('html, body').stop().animate({ scrollTop: $(link.attr('href')).offset().top }, 1000);
	});



	$(window).on('scroll', function(){

		if( $(window).scrollTop() >= 800 ){
			//has esta acción
			$('.scrolltop').addClass('activo');

		}else{
			//has esta otra accion
			$('.scrolltop').removeClass('activo');

		}	

	});


	$('.galeria').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: true,
	  nextArrow: '<div class="next"><i class="fas fa-chevron-right"></i><div>',
	  prevArrow: '<div class="prev"><i class="fas fa-chevron-left"></i><div>',
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	dots: false,
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]

	});





});