jQuery(function(){
    jQuery('.multi-div').hide();
        jQuery('.card-multi-btns').click(function(){
              $('.card-multi-btns').css({'background-color':'transparent','color':'#83be3a'}).removeClass('btn-active');
              $(this).css({'background-color':'#83be3a','color':'#fff'});
              $(this).addClass('btn-active');  
              jQuery('.multi-div').hide();
              jQuery(`#${$(this).data('target')}`).show();

        });
     jQuery('#first-div').show();
});


 // testimonial owl-carousel

 jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
        $('#customers-testimonials').owlCarousel({
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots:true,
            autoplayTimeout: 4500,
            smartSpeed: 450,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              1170: {
                items: 3
              }
            }
        });
  });
