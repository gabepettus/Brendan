/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    let target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	let sections = $("section");
	let navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   let active_section;

			active_section = $(this);
         if (active_section.attr("id") === "home") { 
            console.log("here in home");
            $('#home ul#nav li.current a').addClass('header-home-color').fadeIn('fast');
         } else {
            $('#home ul#nav li.current a').removeClass('header-home-color').fadeIn('fast');
         }

         if (direction === "up") active_section = active_section.prev();

			let active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
         console.log("active_section", active_section.attr("id"));

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		},
		offset: '35%'
	});


/*----------------------------------------------------*/
/*	Make sure that #section height is
/* equal to the browser height on load.
------------------------------------------------------ */

   $('section').css({ 'min-height': $(window).height() });
   $(window).on('resize', function() {

      $('section').css({ 'min-height': $(window).height() });
      $('body').css({ 'width': $(window).width() })
   });

// set header section to also me the height of window
   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

      $('header').css({ 'height': $(window).height() });
      $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		let h = $('header').height();
		let y = $(window).scrollTop();
      let nav = $('#nav-wrap');
      let home = $('#home ul#nav li.current a');
            home.addClass('header-home-color').fadeIn('fast');

// fade out header over "Branden text"
	if ( (y > h*.20) && (y <= h-1) && ($(window).outerWidth() > 740 ) ) {
      nav.fadeOut('fast');
      // console.log("here",h,y,$(window).outerWidth());
      // TODO home color fix here
      // $('#home ul#nav li.current a').css({'color': '#000;'});
      // $('li.current a').css({'color': 'green !important;'});
   } 
   else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
            home.addClass('header-home-color').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
            home.removeClass('header-home-color').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      let contactName = $('#contactForm #contactName').val();
      let contactEmail = $('#contactForm #contactEmail').val();
      let contactSubject = $('#contactForm #contactSubject').val();
      let contactMessage = $('#contactForm #contactMessage').val();

      let data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


});








