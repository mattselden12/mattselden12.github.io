
// NIVO LIGHTBOX
$('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });

// ISOTOPE FILTER
jQuery(document).ready(function($){

	if ( $('.iso-box-wrapper').length > 0 ) { 

	    var $container 	= $('.iso-box-wrapper'), 
	    	$imgs 		= $('.iso-box img');



	    $container.imagesLoaded(function () {

	    	$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
	    	});

	    	$imgs.load(function(){
	    		$container.isotope('reLayout');
	    	})

	    });

	    //filter items on button click

	    $('.filter-wrapper li a').click(function(){

	        var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({ 
				filter: filterValue,
				animationOptions: { 
				    duration: 750, 
				    easing: 'linear', 
				    queue: false, 
				}              	 
			});	            

			// don't proceed if already selected 

			if ( $this.hasClass('selected') ) { 
				return false; 
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

	      return false;
	    }); 

	}

});


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


// SCROLLTO THE TOP
$(document).ready(function() {
	// Show or hide the sticky footer button
		$(window).scroll(function() {
			if ($(this).scrollTop() > 200) {
				$('.go-top').fadeIn(200);
					} else {
						// $('.go-top').fadeOut(200);
					}
				});		
				// Animate the scroll to top
				$('.go-top').click(function(event) {
					event.preventDefault();
				
					$('html, body').animate({scrollTop: 0}, 300);
				})
			});


//SCROLLS
$('.go-home').click(function (event) {
	event.preventDefault();

	$('html, body').animate({ scrollTop: 100 }, 300);
})
$('.go-about').click(function (event) {
	event.preventDefault();

	$('html, body').animate({ scrollTop: 600 }, 300);
})
$('.go-portfolio').click(function (event) {
	event.preventDefault();

	$('html, body').animate({ scrollTop: 1350 }, 300);
})
$('.go-contact').click(function (event) {
	event.preventDefault();

	$('html, body').animate({ scrollTop: 2500 }, 300);
})

// SEND EMAIL
$('#myemail').click(function(){
	window.location.href='mailto: matthewtedselden@gmail.com';
});

//NAV BAR FUNCTION