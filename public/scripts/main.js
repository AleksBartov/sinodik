const preloaderText = document.querySelector('.preloader-text');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');



setTimeout(()=>{preloaderText.style.opacity = 1;},0);


setTimeout(()=>{

btn.style.opacity = 1;

btn.style.transform = 'translateX(-50%) scale(1)';

},3000);


btn.addEventListener('click', shineAndGone, true);


function shineAndGone(e) {

  e.preventDefault();

  btn.style.boxShadow = '0 0 10px #ffffff';

  toHidePreloader();

}


function toHidePreloader(){

  setTimeout(()=>{

preloader.style.opacity = 0;

preloader.style.transform = 'scale(1.5)';

},1500);

  setTimeout(()=>{

preloader.hidden = true;

container.style.opacity = 1;

},3000);

}



nameInput.addEventListener('focus', (e)=>{

  e.preventDefault();

}, true);
