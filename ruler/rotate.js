

var angle = 0;
var scale = 1;
var $img = $('#image');

$img.on('transform', function() {
  $img.css('transform', `rotate(${angle}deg) scale(${scale})`);
});

$('.js-rotate-right').on('click', function() {
  angle += 15;
  $img.trigger('transform');
});

$('.js-rotate-left').on('click', function() {
  angle -= 15;
  $img.trigger('transform');
});

$('.js-zoom-in').on('click', function() {
  scale += 0.25;
  if (scale == 2.25) {
    scale = 2;
  };
  $img.trigger('transform');
});

$('.js-zoom-out').on('click', function() {
  scale -= 0.25;
  if (scale == 0) {
    scale = 0.25;
  }
  $img.trigger('transform');
});