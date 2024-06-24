var angle = 0;
var scale = 1;
var $img2 = $('#image2');

$img2.on('transform', function() {
  $img2.css('transform', `rotate(${angle}deg) scale(${scale})`);
});

$('.js-rotate-right').on('click', function() {
  angle += 6;
  $img2.trigger('transform');
});

$('.js-rotate-left').on('click', function() {
  angle -= 6;
  $img2.trigger('transform');
});