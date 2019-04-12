

  console.log(document.querySelectorAll('.logoContainer path')[5].getTotalLength());





const sandwich = document.querySelector('.sandwich'),

sandwichItems = document.querySelectorAll('.sandwich_item'),

hM = document.querySelector('.hiddenMenu'),

hiddenMenuLinks = document.querySelectorAll('.hiddenMenu-link');



sandwich.addEventListener('click', ()=>{

hM.classList.toggle('openedMenu');

  Array.from(sandwichItems).forEach((i, index)=>{

  i.classList.toggle(`opened_${index}`);

})

}, true);



hM.addEventListener('transitionend', ()=>{

  

hiddenMenuLinks[0].classList.toggle('linkToView');

}, true);



hiddenMenuLinks[0].addEventListener('transitionend', ()=>{

  

hiddenMenuLinks[1].classList.add('linkToView');


}, true);


hiddenMenuLinks[1].addEventListener('transitionend', ()=>{

  

hiddenMenuLinks[2].classList.add('linkToView');


}, true);



hiddenMenuLinks[2].addEventListener('transitionend', ()=>{

  

hiddenMenuLinks[3].classList.add('linkToView');


}, true);






const paragrafs = document.querySelectorAll('p');


function checkSlide(e) {


Array.from(paragrafs).forEach(p=>{


    const slideInAt = (window.scrollY + window.innerHeight) - p.scrollHeight/2;

    const pBottom = p.offsetTop + p.scrollHeight;

    const isHalfShown = slideInAt > p.offsetTop;

    const isNotScrolledPast = window.scrollY < pBottom;


    


    if(isHalfShown && isNotScrolledPast) p.classList.add('active')

});

}


window.addEventListener('scroll', debounce(checkSlide), true);


function debounce(func, wait = 20, immediate = true) {

  var timeout;

  return function() {

    var context = this, args = arguments;

    var later = function() {

      timeout = null;

      if(!immediate) func.apply(context, args);

    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if(callNow) func.apply(context, args);

  };

};





function toHideAll() {

  document.body.style.opacity = 0;

}
