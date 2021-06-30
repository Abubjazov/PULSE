// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 500,
//         slidesToShow: 1,
//         prevArrow: '<button type="button" class="slick-prev"><img src= "icons/chevron_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src= "icons/chevron_right.png"></button>'
//     });
// });
  const slider = tns({
      container: '.carousel__inner',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      controls: false,
      nav: false
    });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });
