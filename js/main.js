$(function () {
  // 加载header
  $('header').load("header.html", "", function (response, status, request) {
    $(this).html(response);
    $('.menu-btn').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('active');
      $('header').toggleClass('active');
      $('.main').toggleClass('active')
    });

    $('.totop').click(function (e) { 
      e.preventDefault();
      $('body,html').animate({
        scrollTop: 0
      },
      500);
    });

  });


  //加载footer
  // $('footer').load("footer.html", "", function (response, status, request) {
  //   $(this).html(response);
  // });



  $(document).ready(function () {
    $("header").on("click", ".hamburger", function () {
      $(this).toggleClass("is-active");
      $('.navbar-collapse').toggleClass('active');
    });
  })

})

