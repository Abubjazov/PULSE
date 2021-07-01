
$(document).ready(function() {

  // $(document).ready(function(){
  //   $('.carousel__inner').slick({
  //     speed: 500,
  //     slidesToShow: 1,
  //     prevArrow: '<button type="button" class="slick-prev"><img src= "icons/chevron_left.png"></button>',
  //     nextArrow: '<button type="button" class="slick-next"><img src= "icons/chevron_right.png"></button>'
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
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {

    $(this)

      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');

  });

  function toggleSlide(item) {

    $(item).each(function(i) {

      $(this).on('click', function(e) {

        e.preventDefault();
        $('.catalog__main-content').eq(i).toggleClass('catalog__main-content_active');
        $('.catalog__additional-content').eq(i).toggleClass('catalog__additional-content_active');
      
      }); 
    
    });

  };

  toggleSlide('.catalog__link-next');
  toggleSlide('.catalog__link-back');

});
