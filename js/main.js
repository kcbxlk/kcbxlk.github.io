$(function(){
  $(".navbar").localScroll({
    queue: true,
    durion: 1000,
    hash: true
  });

  var isIPhone = /iPhone/i.test(navigator.userAgent),
    isIPad = /iPad/i.test(navigator.userAgent),
    isAndroid = /android/i.test(navigator.userAgent);
  var isMobile = isIPhone || isIPad || isAndroid;

  if (isMobile){
    $("ul#navigate").remove();
  }
});
