// ドロワーメニュー
$("#js-menu").on("click", function () {
  $("#js-drawer").slideToggle();
});

// スクロールしたら、フェードイン・フェードアウト
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $("#page_top").fadeIn(300);
  } else {
    $("#page_top").fadeOut(300);
  }
});

// クリックしたらページトップ
$("#page_top").click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 500);
});
