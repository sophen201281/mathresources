
var angle = 0;
var scale = 1;
var $img1 = $('#image1');

$img1.on('transform', function() {
  $img1.css('transform', `rotate(${angle}deg) scale(${scale})`);
});

$('.js1-rotate-right').on('click', function() {
  angle += 6;
  $img1.trigger('transform');
});

$('.js1-rotate-left').on('click', function() {
  angle -= 6;
  $img1.trigger('transform');
});
