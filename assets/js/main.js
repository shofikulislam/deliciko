/*

  Template Name: 
  Author: 
  Version: 1.0
  Author URI: https://themeforest.net/user/themefunction/portfolio
  Description: Build Bench Construction html template. 
   
   =====================
   table of content 
   ====================
   1.   menu toogle
   2.   banner slider
   3.   team slider
   4.   recent work
   5.   partners
   6.   fun facts
   7.   navigation
  
*/

(function ($) {
  "use strict";

     /**-------------------------------------------------
    *Fixed Header
    *----------------------------------------------------**/
   $(window).on('scroll', function () {

      /**Fixed header**/
      if ($(window).scrollTop() > 250) {
         $('.navbar-sticky').addClass('sticky fade_down_effect');
      } else {
         $('.navbar-sticky').removeClass('sticky fade_down_effect');
      }
   });


  /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
         $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });

   }

      /* ----------------------------------------------------------- */
   /*  Site search
   /* ----------------------------------------------------------- */
   //      if ($('.xs-modal-popup').length > 0) {
   //       $('.xs-modal-popup').magnificPopup({
   //           type: 'inline',
   //           fixedContentPos: false,
   //           fixedBgPos: true,
   //           overflowY: 'auto',
   //           closeBtnInside: false,
   //           callbacks: {
   //               beforeOpen: function beforeOpen() {
   //                   this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
   //               }
   //           }
   //       });
   //   }



/*==========================================================
     Resarved date and time
============================================================*/

if (/Mobi/.test(navigator.userAgent)) {
   // if mobile device, use native pickers
   $(".date input").attr("type", "date");
   $(".time input").attr("type", "time");
 } else {
   // if desktop device, use DateTimePicker
   $("#datepicker").datetimepicker({
     useCurrent: false,
     format: "LL",
     icons: {
       next: "fa fa-chevron-right",
       previous: "fa fa-chevron-left"
     }
   });
   $("#timepicker").datetimepicker({
     format: "LT",
     icons: {
       up: "fa fa-chevron-up",
       down: "fa fa-chevron-down"
     }
   });
 }
 
     
/*==========================================================
     banner slider
============================================================*/

$(".features-slider").owlCarousel({
   items: 1,
   loop: true,
   smartSpeed: 2000,
   dots: true,
   nav: false,
   navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
   // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
   autoplay: false,
   mouseDrag: true,
   responsive: {
      0: {
         nav: false,
         mouseDrag: false,
         touchDrag:false,
      },
      600: {
         nav: false,
         mouseDrag: false,
         touchDrag:false,

      },
      1000: {
         nav: true,
         mouseDrag: true,
         touchDrag:true,

      }
   }
});


/*==========================================================
     banner slider Classic
============================================================*/

$(".features-slider-classic").owlCarousel({
   items: 1,
   loop: true,
   smartSpeed: 2000,
   dots: false,
   nav: true,
   navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],
   autoplay: false,
   mouseDrag: true,
   responsive: {
      0: {
         nav: false,
         mouseDrag: false,
         touchDrag:false,
      },
      600: {
         nav: false,
         mouseDrag: false,
         touchDrag:false,

      },
      1000: {
         nav: true,
         mouseDrag: true,
         touchDrag:true,

      }
   }
});

/*==========================================================
     team slider
============================================================*/

// if ($('#ts-team-slider').length > 0) {
//    $('#ts-team-slider').owlCarousel({
//        nav: false,
//        items: 4,
//        loop: true,
//        reponsiveClass: true,
//        navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
//        dots: true,
//        responsive: {
//            // breakpoint from 0 up
//            0: {
//                items: 1,
//            },
//            // breakpoint from 480 up
//            480: {
//                items: 2,
//            },
//            // breakpoint from 768 up
//            768: {
//                items: 2,
//            },
//            // breakpoint from 768 up
//            1200: {
//                items: 4,
//            }
//        }
//    });
// }


 /*==========================================================
     featured menu slider
   ===========================================================*/
//      $('#mixcontent').mixItUp({
//       animation: {
//           effects: 'fade translateX(50%)',
//           reverseOut: true,
//           duration: 1000
//       },
//       load: {
//           filter: 'all'
//       }
//   });

  
   if ($('.feature-tab-slider').length > 0) {
      $('.feature-tab-slider').owlCarousel({
         items: 3,
         loop: true,
         autoplay: false,
         nav: true,
         dots: false,
         autoplayTimeout: 8000,
         autoplayHoverPause: true,
         mouseDrag: true,
         smartSpeed: 1100,
         margin: 30,
         navText: ['<i class="icon icon-chevron-left">', '<i class="icon icon-chevron-right">'],
         responsive: {
            0: {
               items: 1,
               nav: false,
               mouseDrag: false,

            },
            600: {
               items: 2,
               nav: false,
            },
            1000: {
               items: 3,
            }
         }
   
      });
   }
   // owl trigger
   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target // newly activated tab
      e.relatedTarget // previous active tab
      $(".owl-carousel").trigger('refresh.owl.carousel');
    });

 /*==========================================================
     testimonial carousel
   ===========================================================*/
	  $(".testimonial-carousel").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1,
         }
      }

   });

	  $(".ts-testimonial-carousel").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1,
         }
      }

   });

    /*==========================================================
     ts chef carousel
   ===========================================================*/
   
	  $(".ts-chef-carousel").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
      items: 3,
      margin: 30,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 2
         },
         1000: {
            items: 3,
         }
      }

   });
	//chef slide
	

/*==========================================================
     partners
============================================================*/

   $("#partners-carousel").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: false,
      margin: -50,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 5,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 3
         },
         1000: {
            items: 5,
         }
      }

   });

   // $( "#ts-contact-form" ).submit(function( e ) {
     
    
   //    e.preventDefault();

   //    var post_url = $(this).attr("action"); //get form action url
      
	//    var request_method = $(this).attr("method"); //get form GET/POST method
	//    var form_data = $(this).serialize(); //Encode form elements for submission
	  
   //    $.ajax({
   //       url : post_url,
   //       type: request_method,
   //       data : form_data
   //    }).done(function(response){ //
   //       $("#server-results").html(response);
   //    });
   //   }); 

/*==========================================================
     funfact 
============================================================*/
     var skl = true;
     $('.ts-funfact').appear();
  
     $('.ts-funfact').on('appear', function () {
        if (skl) {
           $('.counterUp').each(function () {
              var $this = $(this);
              jQuery({
                 Counter: 0
              }).animate({
                 Counter: $this.attr('data-counter')
              }, {
                 duration: 8000,
                 easing: 'swing',
                 step: function () {
                    var num = Math.ceil(this.Counter).toString();
                    if (Number(num) > 99999) {
                       while (/(\d+)(\d{3})/.test(num)) {
                          num = num.replace(/(\d+)(\d{3})/, '');
                       }
                    }
                    $this.html(num);
                 }
              });
           });
           skl = false;
        }
     });

/*==========================================================
     navigation
============================================================*/
    if ($('.header-nav').length > 0) {
      $(".header-nav").navigation({
          effect: "fade",
          mobileBreakpoint: 992,
      });
  }

     /*=============================================================
   			gallery
   	=========================================================================*/

      $('.ts-popup').magnificPopup({
         type: 'image',
         closeOnContentClick: false,
         midClick: true,
         callbacks: {
            beforeOpen: function () {
               this.st.mainClass = this.st.el.attr('data-effect');
            }
         },
         zoom: {
            enabled: true,
            duration: 500, // don't foget to change the duration also in CSS
         },
         mainClass: 'mfp-fade',
      });
    /*=====================
    isotop grid
    ========================*/

   // if ($('.grid').length > 0) {
   //    var $portfolioGrid = $('.grid'),
   //       colWidth = function () {
   //          var w = $portfolioGrid.width(),
   //             columnNum = 1,
   //             columnWidth = 0;
   //          if (w > 1200) {
   //             columnNum = 3;
   //          } else if (w > 900) {
   //             columnNum = 3;
   //          } else if (w > 600) {
   //             columnNum = 2;
   //          } else if (w > 450) {
   //             columnNum = 2;
   //          } else if (w > 385) {
   //             columnNum = 1;
   //          }
   //          columnWidth = Math.floor(w / columnNum);
   //          $portfolioGrid.find('.grid-item').each(function () {
   //             var $item = $(this),
   //                multiplier_w = $item.attr('class').match(/grid-item-w(\d)/),
   //                multiplier_h = $item.attr('class').match(/grid-item-h(\d)/),
   //                width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
   //                height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.3;
   //             $item.css({
   //                width: width,
   //                // height: height
   //             });
   //          });
   //          return columnWidth;
   //       },

   //       isotope = function () {
   //          $portfolioGrid.isotope({
   //             resizable: true,
   //             itemSelector: '.grid-item',
   //             masonry: {
   //                columnWidth: colWidth(),
   //                gutterWidth: 3
   //             }
   //          });
   //       };
   //    isotope();
   //    $(window).resize(isotope);
   // } // End is_exists



   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
         $(".BackTo").fadeIn('slow');
      } else {
         $(".BackTo").fadeOut('slow');
      }

   });
   $("body, html").on("click", ".BackTo", function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 800);
   });


   $( "#ts-contact-form" ).submit(function( e ) {
     
    
      e.preventDefault();

      var post_url = $(this).attr("action"); //get form action url
      
	   var request_method = $(this).attr("method"); //get form GET/POST method
	   var form_data = $(this).serialize(); //Encode form elements for submission
	  
      $.ajax({
         url : post_url,
         type: request_method,
         data : form_data
      }).done(function(response){ //
         $("#server-results").html(response);
      });
     }); 

 
})

(jQuery);










