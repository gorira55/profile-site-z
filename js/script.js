$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.activity-item').eq(clickedIndex).addClass('active');
  });

  $('.header-right a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    }, 500);
  });

  $(window).scroll(function() {
    if($(window).scrollTop() > 200) {
      $('#back-to-top').fadeIn(200);
    } else{
      $('#back-to-top').fadeOut(200);
    }
  });

  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop:0}, 800);
    return false;
  });

});
