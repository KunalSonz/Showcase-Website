console.log("hello World");
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:140,
  nav:false,
  dots:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:2
      },
      1020:{
          items:2
      },
      1030:{
          items:3
      },
  }
})

