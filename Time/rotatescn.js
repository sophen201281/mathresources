
var angle = 0;
var scale = 1;
var $img = $('#image');

$img.on('transform', function() {
  $img.css('transform', `rotate(${angle}deg) scale(${scale})`);
});

$('.js2-rotate-right').on('click', function() {
  angle += 6;
  $img.trigger('transform');
});

$('.js2-rotate-left').on('click', function() {
  angle -= 6;
  $img.trigger('transform');
});
