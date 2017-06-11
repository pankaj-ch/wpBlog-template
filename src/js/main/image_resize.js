function imageResize(t) {
  var a = t.width() / t.height();
  var b = t.parent().width() / t.parent().height();
  (a > b) ? t.attr('style', 'height:100%'): t.attr('style', 'width:100%');
}