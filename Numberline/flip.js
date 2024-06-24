var boxs = document.querySelectorAll('.box');

[...boxs].forEach((box)=>{
  box.addEventListener( 'click', function() {
    box.classList.toggle('is-flipped');
  });
});