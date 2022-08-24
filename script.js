$(function() {
  jQuery('a[href^="#"]').on('click',function(){
    var header =jQuery('.header').innerHeight();
    var id =jQuery(this).attr('href');
    var position = 0;
    if ( id != "#") {
      position = jQuery(id).offset().top - header;
    }
    console.log(id);
    console.log(position);
  
    jQuery('html,body').animate({
  
    scrollTop: position
  },
  300);
  
  });

  $(document).ready(function() {
    $('.drawer').drawer();
  });

  jQuery(window).on('scroll',function(){
    if( 100 < jQuery(this).scrollTop()){
      jQuery('.tow-top').addClass('is-show');
    }
    else{
      jQuery('.tow-top').removeClass('is-show');
  
    }
  });
  
  new WOW().init();
  
})