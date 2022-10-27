$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
    
  })
  let hero_img = $(".img-fluid");
    if($(window).width() > 992){
      hero_img.attr("src", "./assets/images/image-hero-desktop.png");
    } else {
      hero_img.attr("src", "./assets/images/image-hero-mobile.png");
    }
  $(window).resize(() => {
    if($(window).width() > 992){
      hero_img.attr("src", "./assets/images/image-hero-desktop.png");
    } else {
      hero_img.attr("src", "./assets/images/image-hero-mobile.png");
    }
  })
  wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  });
  wow.init();  
});
