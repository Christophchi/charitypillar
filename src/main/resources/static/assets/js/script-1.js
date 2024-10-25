(function ($) {
  "use strict";

  var wind = $(window);
/* =============================================================================
    --------------------------------  Navbar Menu   --------------------------------
    ============================================================================= */

    $('.navbar .dropdown').hover(function () {
      $(this).find('.dropdown-menu').addClass('nav-show');
  }, function () {
      $(this).find('.dropdown-menu').removeClass('nav-show')
  });

  $('.navbar .dropdown-item').hover(function () {
      $(this).find('.dropdown-side').addClass('nav-show');
  }, function () {
      $(this).find('.dropdown-side').removeClass('nav-show')
  });

  $(".navbar .search-form").on("click", ".search-icon", function () {

      $(".navbar .search-form").toggleClass("open");

      if ($(".navbar .search-form").hasClass('open')) {

          $(".search-form .close-search").slideDown();

      } else {

          $(".search-form .close-search").slideUp();
      }
  });

  $(".navbar").on("click", ".navbar-toggler", function () {

      $(".navbar .navbar-collapse").toggleClass("nav-show");
  });

  wind.on("scroll", function () {

      var bodyScroll = wind.scrollTop(),
          navbar = $(".navbar"),
          logo = $(".navbar.change .logo> img");

      if (bodyScroll > 300) {

          navbar.addClass("nav-scroll");
          logo.attr('src', 'assets/imgs/logo-dark.png');

      } else {

          navbar.removeClass("nav-scroll");
          logo.attr('src', 'assets/imgs/logo-light.png');
      }
  });

  function noScroll() {
      window.scrollTo(0, 0);
  }

  $('.navbar .menu-icon').on('click', function () {

      $('.hamenu').addClass("open");

      $('.hamenu').animate({ left: 0 });

  });

  $('.hamenu .close-menu, .one-scroll .menu-links .main-menu > li').on('click', function () {

      $('.hamenu').removeClass("open").delay(300).animate({ left: "-100%" });
      $('.hamenu .menu-links .main-menu .dmenu, .hamenu .menu-links .main-menu .sub-dmenu').removeClass("dopen");
      $('.hamenu .menu-links .main-menu .sub-menu, .hamenu .menu-links .main-menu .sub-menu2').slideUp();

  });

  $('.hamenu .menu-links .main-menu > li').on('mouseenter', function () {
      $(this).removeClass('hoverd').siblings().addClass('hoverd');
  });

  $('.hamenu .menu-links .main-menu > li').on('mouseleave', function () {
      $(this).removeClass('hoverd').siblings().removeClass('hoverd');
  });


  $('.main-menu > li .dmenu').on('click', function () {
      $(this).parent().parent().find(".sub-menu").toggleClass("sub-open").slideToggle();
      $(this).toggleClass("dopen");
  });

  $('.sub-menu > ul > li .sub-dmenu').on('click', function () {
      $(this).parent().parent().find(".sub-menu2").toggleClass("sub-open").slideToggle();
      $(this).toggleClass("dopen");
  });

/* Wow Js Init */
new WOW().init();

  // 4.Countdown
  if ($(".odometer").length) {
	$('.odometer').appear();
	$(document.body).on('appear', '.odometer', function (e) {
	  var odo = $(".odometer");
	  odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	  });
	  window.xboOptions = {
		format: 'd',
	  };
	});
  }


	// Counter 
	const counter = document.querySelectorAll('.counter');
		// covert to array
		const array = Array.from(counter);
		// select array element
		array.map((item) => {
			// data layer
			let counterInnerText = item.textContent;
	
			let count = 1;
			let speed = item.dataset.speed / counterInnerText
			function counterUp() {
				item.textContent = count++
				if (counterInnerText < count) {
					clearInterval(stop);
				}
			}
			const stop = setInterval(() => {
				counterUp();
			}, speed);
		});
	
	
		// Slick slider
		$('.dn--hm2-slider-items').slick({
			slidesToShow: 1,
			dots: true,
			infinite: false,
			responsive: [
			  {
				breakpoint: 1300,
				settings: {
				  arrows: false,
				  slidesToShow: 1
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  arrows: false,
				  slidesToShow: 1
				}
			  },
			  {
				breakpoint: 380,
				settings: {
				  arrows: false,
				  slidesToShow: 1
				}
			  }
			]
		  });

	

	
		//   Mobile Dropdown menubar

		  $("#jquery-accordion-menu").jqueryAccordionMenu();
		  $(".colors a").click(function(){
			if($(this).attr("class") != "default"){
			  $("#jquery-accordion-menu").removeClass();
			  $("#jquery-accordion-menu").addClass("jquery-accordion-menu").addClass($(this).attr("class"));
			}
			else{
			  $("#jquery-accordion-menu").removeClass();
			  $("#jquery-accordion-menu").addClass("jquery-accordion-menu");
			}
		  });




var slider = new Swiper ('.dn--hm3-Testimonial-box-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var thumbs = new Swiper ('.dn--hm3-Testimonial-slider-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	  },
});

//slider.params.control = thumbs;
//thumbs.params.control = slider;


slider.controller.control = thumbs;
thumbs.controller.control = slider;



		// Slick slider
		$('.dn--hm3-news-blog-slider').slick({
			slidesToShow: 3,
			arrows: false,
			dots: true,
			slidesToScroll: 2,
			responsive: [
			
			  {
				breakpoint: 993,
				settings: {
				  arrows: false,
				  slidesToShow: 2,
				  slidesToScroll: 1,
				}
			  },
			  {
				breakpoint: 800,
				settings: {
				  arrows: false,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
			]
		  });

		  		

		
		//   swiper slider
		  var ourcause = new Swiper(".dn--hm-4-our-cause-box-slider", {
			slidesPerView: 1,
			spaceBetween: 24,
			freeMode: false,
			loop: true,
			navigation: {
				nextEl: ".dn-hm4-button-next",
				prevEl: ".dn-hm4-button-prev",
			},
			  breakpoints: {  
				'1200': {
				  slidesPerView: 4,
				  spaceBetween: 24,},
				'900': {
				  slidesPerView: 3,
				  spaceBetween: 24, },
				  '700': {
					slidesPerView: 2,
					spaceBetween: 24, },
			  },  
		  });

		  var PopularCause = new Swiper(".dn--hm4-Popular-Causes-slider", {
			slidesPerView: 1,
			spaceBetween: 24,
			freeMode: false,
			loop: true,
			centeredSlides: true,
			navigation: {
				nextEl: ".dn-hm4-button-next",
				prevEl: ".dn-hm4-button-prev",
			},
			  breakpoints: {  
				'1200': {
				  slidesPerView: 3,
				  spaceBetween: 24,
				  centeredSlides: true,
				},
				'900': {
				  slidesPerView: 2,
				  spaceBetween: 24, 
				  centeredSlides: false,
				}
				  ,
				  '700': {
					slidesPerView: 1,
					spaceBetween: 24, },
			  },  
		  });



			var clientthumbmySwiper = new Swiper(".dn--hm4-testimonial-gallery-thumbs", {

				spaceBetween: 10,
				slidesPerView: 1,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var nikstorereviewslider = new Swiper(".dn--hm4-testimonial-gallery-slider", {
				loop: true,
				spaceBetween: 10,
				navigation: {
					nextEl: ".dn-hm4-button-next",
					prevEl: ".dn-hm4-button-prev",
				},
				thumbs: {
					swiper: clientthumbmySwiper
				},
			});


let button = document.querySelectorAll(".dn--hm6-button-link");
let item = document.querySelectorAll(".dn--hm6-button-link .dn--hm6-button-round");

button.forEach(function (i) {

	i.addEventListener('mouseenter', function(event) {

  this.classList += " animate";

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;
  item.forEach(function (i) {
  if (buttonY < 24) {
    i.style.top = 0 + "px";
  } else if (buttonY > 30) {
    i.style.top = 55 + "px";
  }

  i.style.left = buttonX + "px";
  i.style.width = "1px";
  i.style.height = "1px";
});
});

i.addEventListener('mouseleave', function(event) {
  this.classList.remove("animate");

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;
  item.forEach(function (i) {
  if (buttonY < 24) {
    i.style.top = 0 + "px";
  } else if (buttonY > 30) {
    i.style.top = 55 + "px";
  }
  i.style.left = buttonX + "px";
});
});

});


let button2 = document.querySelectorAll(".dn--hm6-button-4");
let item2 = document.querySelectorAll(".dn--hm6-button-4 .dn--hm6-button-4-round");

button2.forEach(function (i) {

	i.addEventListener('mouseenter', function(event) {

  this.classList += " animate";

  let button2XXX = event.offsetX;
  let button2Y = event.offsetY;
  item2.forEach(function (i) {
  if (button2Y < 30) {
    i.style.top = 0 + "px";
  } else if (button2Y > 40) {
    i.style.top = 80 + "px";
  }

  i.style.left = button2XXX + "px";
  i.style.width = "2px";
  i.style.height = "2px";
});
});

i.addEventListener('mouseleave', function(event) {
  this.classList.remove("animate");

  let button2XXX = event.offsetX;
  let button2YY = event.offsetY;
  item2.forEach(function (i) {
  if (button2YY < 30) {
    i.style.top = 0 + "px";
  } else if (button2YY > 40) {
    i.style.top = 80 + "px";
  }
  i.style.left = button2XXX + "px";
});
});

});

let button3 = document.querySelectorAll(".dn--hm6-button-8");
let item3 = document.querySelectorAll(".dn--hm6-button-8 .dn--hm6-button-8-round");

button3.forEach(function (i) {

	i.addEventListener('mouseenter', function(event) {

  this.classList += " animate";

  let button2X = event.offsetX;
  let button2Y = event.offsetY;
  item3.forEach(function (i) {
  if (button2Y < 30) {
    i.style.top = 0 + "px";
  } else if (button2Y > 40) {
    i.style.top = 80 + "px";
  }

  i.style.left = button2X + "px";
  i.style.width = "2px";
  i.style.height = "2px";
});
});

i.addEventListener('mouseleave', function(event) {
  this.classList.remove("animate");

  let button2X = event.offsetX;
  let button2Y = event.offsetY;
  item3.forEach(function (i) {
  if (button2Y < 30) {
    i.style.top = 0 + "px";
  } else if (button2Y > 40) {
    i.style.top = 80 + "px";
  }
  i.style.left = button2X + "px";
});
});

});


var swiper = new Swiper(".dn--hm6-testimonial-slider", {
	slidesPerView: 1,
	loop: true,
	
	navigation: {
	  nextEl: ".dn-hm4-button-next",
	  prevEl: ".dn-hm4-button-prev",
	},
  }); 



      //===================== Testimonials slider code start=====================
      $('.dn--hm1--main-testoBox').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1401,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
            }
          },
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
            }
          },
          {
            breakpoint: 500,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 5000,
            }
          }
        ]
      });
      // ================ Testimonials slider code end ========================



      //===================== Donate to Us section slider code start=====================
      $('.dn--hm1--DonateUs--rightBox').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              arrows: true,
              dots: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1201,
            settings: {
              arrows: true,
              dots: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              dots: false,
              centerMode: true,
              centerPadding: '150px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              dots: false,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 500,
            settings: {
              fade: true,
              arrows: false,
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          }
        ]
      });
      // ================ Donate to Us section slider code end ========================


      var ab3swiper1 = new Swiper(".dn--ab3-our-team-slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
          nextEl: ".dn--ab3-swiper-button-next",
          prevEl: ".dn--ab3-swiper-button-prev",
        },
        breakpoints: {
          450: {
              slidesPerView: 2,
          },
      },
      });




      var ab3swiper2 = new Swiper(".dn--ab3-brand-alider", {
        spaceBetween: 69,
        slidesPerView: 1,
        loop: true,
        centeredSlides: false,
        freeMode: true,
        autoplay: {
          delay: 1800,
          disableOnInteraction: false,
        },
        breakpoints: {
          400: {
            slidesPerView: 2,
          },
          567: {
            slidesPerView: 2,
          },
          767: {
              slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },

          1400: {
            slidesPerView: 6,
          },
        },
      });
 

      var ab3swiper3 = new Swiper(".dn--ab3-about-us-slider", {
        slidesPerView: 1,
        loop: true,
        slideToClickedSlide: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

 if (typeof $.fn.masonry !== 'undefined') {
    $('.grid').masonry({
      itemSelector: '.grid-item',    
      horizontalOrder: true,
      gutter: 24
    });

    $('.grid-2').masonry({
      itemSelector: '.grid-item-2',    
      horizontalOrder: true,
      percentPosition: true
    });
  }


      var swiper7 = new Swiper (".dn--ab4-popular-causes-slider-box", {
        loop: true,
        freeMode: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
        navigation: {
          nextEl: ".dn--ab4-swiper-button-next",
          prevEl: ".dn--ab4-swiper-button-prev",
        },
        breakpoints: {
          1200: {
            slidesPerView: 2,
            centeredSlides: true,
            freeMode: true,
          },
          995: {
            slidesPerView: 3,
            centeredSlides: true,
            freeMode: true,
          },
          576: {
            slidesPerView: 2,
            centeredSlides: true,
            freeMode: true,
          },
        },
      });

      var swiperab4 = new Swiper(".dn--ab4-Testimonials-slider", {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".dn-hm4-button-next",
          prevEl: ".dn-hm4-button-prev",
        },
      });


      
   

      // progress bar 
      $(document).ready(function() {
        var Animation = function(animationBar, percentage) {
      
          this.animationBar = animationBar;
          this.percentage = percentage;
          this.animationArray = null;
          this.animationOffset = null;
          this.labelArray = null;
          this.percentageArray = null;
          this.index = 0;
      
          this.initialize();
      
        };  
      
        Animation.prototype.initialize = function() {
      
          this.animationArray = document.getElementsByClassName(this.percentage);
      
          if (this.animationOffset === null)
            this.animationOffset = [];
      
          if (this.labelArray === null)
            this.labelArray = [];
      
          if (this.percentageArray === null)
            this.percentageArray = [];
      
          this.setUpElements();
      
        };
      
        Animation.prototype.setUpElements = function() {
      
          for (var i = 0; i < this.animationArray.length; i++) {
            var elem = this.animationArray[i],
              offset = elem.offsetTop + document.getElementsByClassName(this.percentage)[0].clientHeight,
              percentage = $(this.animationArray[i]).data(this.percentage);
      
            this.animationOffset.push(offset);
            this.percentageArray.push(percentage);
      
            $(this.animationArray[i]).find('.label').html('Percentage: ' + percentage + '%');
          }
      
          this.attachListeners();
        }
      
        Animation.prototype.attachListeners = function() {
      
          $(window).on('scroll', this.onWindowScroll.bind(this));
        };
      
        Animation.prototype.onWindowScroll = function() {
      
          for (var i = 0; i < this.animationArray.length; i++) {
            if (window.pageYOffset >= this.animationOffset[this.index] - window.innerHeight) {
              this.showElement();
              this.index++;
            } else
              return;
          }
        };
      
        Animation.prototype.showElement = function() {
          var element = document.getElementsByClassName(this.percentage)[this.index];
          element.className += ' show';
          this.animateBar(element, this.percentageArray[this.index]);
        }
      
        Animation.prototype.animateBar = function(element, width) {
      
          var $element = $(element),
            className = ' p' + width;
      
          $element.find(this.animationBar).addClass(className);
        }
      
        new Animation('.animation-bar', 'percentage');
      
      });


      var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 16); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}




var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

  $(".dn--dp1-donate-amount-button-item-box li").click(function () {
      $(this).toggleClass('dn--dp1-donate-amount-button-box-active').siblings().removeClass('dn--dp1-donate-amount-button-box-active');
  });


 // Count pricing
  $(document).ready(function(){
    let price_right_parent = $('.dn_priceListing');
    let dn_default_amount = $('.dn_default_amount').val();
        price_right_parent.find('.dn_total_donation_amount').text('$'+ dn_default_amount);

        $(document).on('click','.dn--dp1-donate-amount-button-item-box li',function(){
            let el = '$' + $(this).data('amount');
            price_right_parent.find('.dn_total_donation_amount').text(el);
            $('.dn_default_amount').val($(this).data('amount'))
        });

    $(document).on('keyup','.dn_default_amount ',function(){
        let el = $(this).val();
        price_right_parent.find('.dn_total_donation_amount').text('$'+ el);
    });

  });
  
  
$(document).ready(function() {
  if ($.fn.niceSelect) {
    $('.dn--hm6-donation-Select-box select').niceSelect();
  }
});

$(document).ready(function() {
  "use strict";
  
  var progressWrap = document.querySelector('.back-to-top-progress-wrap');
  
  if (progressWrap) {
    var progressPath = progressWrap.querySelector('path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);	
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.back-to-top-progress-wrap').addClass('active-progress');
      } else {
        jQuery('.back-to-top-progress-wrap').removeClass('active-progress');
      }
    });				
    jQuery('.back-to-top-progress-wrap').on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    });
  }
});

	
$(document).ready(function() {
  "use strict";
  
  // Sticky header code
  var $header = $('.dn--header-sticky-ebl');
  
  if ($header.length) {
    var lastScrollTop = 0;
    
    $(window).on('scroll', function() {
      var st = $(this).scrollTop();
      
      if (st > lastScrollTop && st > $header.outerHeight()) {
        // Scroll down and header is not at the top
        $header.removeClass('dn--sticky--header').addClass('hide');
      } else if (st < lastScrollTop && st > $header.outerHeight()) {
        // Scroll up and header is not at the top
        $header.removeClass('hide').addClass('dn--sticky--header');
      } else if (st <= $header.outerHeight()) {
        // At the top
        $header.removeClass('dn--sticky--header hide');
      }
      
      lastScrollTop = st;
    });
  }
});



})(jQuery);



