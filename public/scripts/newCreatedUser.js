// --gettingCorrentPathLength---

  /*


console.log(document.querySelectorAll('#iPhoneXSVG path')[0].getTotalLength());


*/



// greetingModal start ---------


const header = document.querySelector('header');

const aboutSinodiks = document.querySelector('.aboutSinodiks');

const greetingModal = document.querySelector('.greetingModal');

const greetingModalCross = document.querySelector('.greetingModal-cross');

const greetingModalBtn = document.querySelector('.greetingModal-btn');


setTimeout(()=>{

greetingModal.classList.add('greetingModal-opened');

header.style.filter = 'blur(3px)';

aboutSinodiks.style.filter = 'blur(3px)';

}, 0);


greetingModalCross.addEventListener('click', ()=>{

  greetingModal.classList.remove('greetingModal-opened');

header.style.filter = 'blur(0px)';

aboutSinodiks.style.filter = 'blur(0px)';

}, false);

greetingModalBtn.addEventListener('click', ()=>{

greetingModal.classList.remove('greetingModal-opened');

header.style.filter = 'blur(0px)';

aboutSinodiks.style.filter = 'blur(0px)';

}, false);




// greetingModal end ----------



// constants variables --------


const sandwich = document.querySelector('.sandwich'),

sandwichItems = document.querySelectorAll('.sandwich_item'),

hM = document.querySelector('.hiddenMenu'),

hiddenMenuLinks = document.querySelectorAll('.hiddenMenu-link');




let menuOpened = false;



// ---hiddenMenuOpenning-------




sandwich.addEventListener('click', ()=>{


menuOpened = !menuOpened;

hM.classList.toggle('openedMenu');


Array.from(sandwichItems).forEach((i, index)=>{

  i.classList.toggle(`opened_${index}`);

})

}, true);


hM.addEventListener('touchmove', (e)=>{

 e.preventDefault();

}, false);



hM.addEventListener('transitionend', ()=>{

if (menuOpened){

hiddenMenuLinks[0].classList.add('linkToView');

}else{

hiddenMenuLinks[0].classList.remove('linkToView');

}

}, true);



hiddenMenuLinks[0].addEventListener('transitionend', ()=>{

  

if (menuOpened){

hiddenMenuLinks[1].classList.add('linkToView');

}else{

hiddenMenuLinks[1].classList.remove('linkToView');

}

}, true);



hiddenMenuLinks[0].addEventListener('click', ()=>{


menuOpened = !menuOpened;

hM.classList.toggle('openedMenu');


Array.from(sandwichItems).forEach((i, index)=>{

  i.classList.toggle(`opened_${index}`);

})



}, true);



hiddenMenuLinks[1].addEventListener('click', ()=>{


menuOpened = !menuOpened;

hM.classList.toggle('openedMenu');


Array.from(sandwichItems).forEach((i, index)=>{

  i.classList.toggle(`opened_${index}`);

})


}, true);




// ---endHiddenMenuOpenning----









// ---paragfafAppierCode-------


const twoCardsHolder = document.querySelector('.twoCardsHolder');

const oZdravii = document.querySelector('.oZdravii');

const oUpokoenii = document.querySelector('.oUpokoenii');



function checkSlide(e) {



const slideInAt = (window.scrollY + window.innerHeight) - twoCardsHolder.scrollHeight/2;

    const pBottom = twoCardsHolder.offsetTop + twoCardsHolder.scrollHeight;

    const isHalfShown = slideInAt > twoCardsHolder.offsetTop;

    const isNotScrolledPast = window.scrollY < pBottom;


    if(isHalfShown && isNotScrolledPast) {


   oZdravii.classList.remove('hideCards');

oUpokoenii.classList.remove('hideCards');

}


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





// ---EndParagfafAppierCode-----
