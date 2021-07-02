
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

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  $('.button_catalog').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__desc').text($('.catalog__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  const validationDataSet = {
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      email: {
        required: true,
        email:true
      }
    },
    messages: {
      name: {
        required: "Пожалуйста введите своё имя",
        minlength: jQuery.validator.format("Введите не менее {0} символов!")
      },
      phone: "Пожалуйста введите свой телефон",
      email: {
        required: "Нам необходим ваш email",
        email: "Ваш email должен быть формата name@domain.com"
      }
    }
  };

  $('#consultation-form').validate(validationDataSet);
  $('#consultation form').validate(validationDataSet);
  $('#order form').validate(validationDataSet);

  $('input[name=phone]').mask('+9 (999) 999 99 99');

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn();
      $('form').trigger('reset');
    });
    return false;
  });

  $(window).scroll(function() {
    if($(this).scrollTop( ) > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

});
