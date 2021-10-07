window.onload = function(){
  const body = document.querySelector('body')
  const overlay = document.querySelector('.overlay')
  body.style.overflow = 'visible'
  
  setTimeout(function(){
    overlay.classList.add('overlay-hide')
  }, 1000);

}