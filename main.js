$(function(){
  var mySwiper = undefined;

  function initSwiper() {
    if ($(window).width() >= 640 && mySwiper == undefined) {
      mySwiper = new Swiper(".swiper-container", {
        speed: 500,
        direction: 'vertical',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        watchOverflow : true,
        on: {
          slideChange: function() {
            setTimeout(function () {
              mySwiper.params.touchReleaseOnEdges = false;  
              mySwiper.params.mousewheel.releaseOnEdges = false;
            });
          },
        }
      });
    } 
  }

  initSwiper();

  $(window).on('resize', function () {
    setTimeout(function(){
      initSwiper();
      },15);
  });
});