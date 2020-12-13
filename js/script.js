$(function(){
  //menu
  $('.menu-button').on('click',function(){
    $('.menu-button').toggleClass('close');//closeクラスを付与
    $('.nav').fadeToggle(300);//フェードイン
    $('.nav__container').toggleClass('nav__container--show');
    $('body').toggleClass('noscroll');//スクロール固定
  });

  $('.nav__item a').on('click',function(){
      $('.nav').fadeOut(300);
      $('.menu-button').removeClass('close');
      $('.nav__container').removeClass('nav__container--show');
      $('body').removeClass('noscroll');
  });


  //header
  $(window).scroll(function () {
      if ($(this).scrollTop() > $('.top').innerHeight()) {
          $('.header').addClass('header--black');
      } else {
        $('.header').removeClass('header--black');
      }
   });

});