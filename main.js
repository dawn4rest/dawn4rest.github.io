$(function(){
  var swiper = undefined;

  function initSwiper() {
    if ($(window).width() >= 640 && swiper == undefined) {
      swiper = new Swiper('.swiper-container', {
        speed: 500,
        direction: 'vertical',
        mousewheel: true,
        watchOverflow : true,
        on: {
          slideChange: function() {
            setTimeout(function () {
              swiper.params.touchReleaseOnEdges = false;  
              swiper.params.mousewheel.releaseOnEdges = false;
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