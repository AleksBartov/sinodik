// --gettingCorrentPathLength---

console.log(document.querySelectorAll('#iPhoneXSVG path')[0].getTotalLength());


// constants variables --------


const sandwich = document.querySelector('.sandwich'),

sandwichItems = document.querySelectorAll('.sandwich_item'),

hM = document.querySelector('.hiddenMenu'),

hiddenMenuLinks = document.querySelectorAll('.hiddenMenu-link'),

room = document.querySelector('.personRoom'),

hiddenRoom = document.querySelector('.hiddenRoom'),

hiddenEnter = document.querySelector('.hiddenEnter'),

arrowRegisterBack = document.querySelectorAll('.registerHeaderTitle svg'),

linkToRegModal = document.querySelector('.linkToRegModal'),

footerRegLink = document.querySelector('.footerRegLink'),

footerEnterLink = document.querySelector('.footerEnterLink'),

linkFromRegToEnter = document.querySelector('.linkFromRegToEnter'),

hiddenFormItems = document.querySelectorAll('.hiddenFormItem');




let menuOpened = false,

formOpened = false,

enterFormOpened = false;



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


formOpened = true;

  hiddenRoom.classList.add('openedRoom');


}, true);



hiddenMenuLinks[1].addEventListener('click', ()=>{


menuOpened = !menuOpened;

hM.classList.toggle('openedMenu');


Array.from(sandwichItems).forEach((i, index)=>{

  i.classList.toggle(`opened_${index}`);

})


enterFormOpened = true;

  hiddenEnter.classList.add('openedRoom');


}, true);




// ---endHiddenMenuOpenning----






// ----personRoomOpenning------



room.addEventListener('click', ()=>{


formOpened = true;

  hiddenRoom.classList.add('openedRoom');

}, true);



hiddenRoom.addEventListener('touchmove', (e)=>{

 e.preventDefault();

}, false);



linkToRegModal.addEventListener('click', ()=>{


formOpened = true;

  hiddenRoom.classList.add('openedRoom');

}, true);



footerRegLink.addEventListener('click', ()=>{


formOpened = true;

  hiddenRoom.classList.add('openedRoom');

}, true);



footerEnterLink.addEventListener('click', ()=>{


enterFormOpened = true;

  hiddenEnter.classList.add('openedRoom');

}, true);



linkFromRegToEnter.addEventListener('click', ()=>{


formOpened = true;

enterFormOpened = true;

  hiddenEnter.classList.add('openedRoom');

}, true);





hiddenRoom.addEventListener('transitionend', ()=>{

if (formOpened){

hiddenFormItems[0].classList.add('linkToView');

}else{

hiddenFormItems[0].classList.remove('linkToView');

}

}, true);


hiddenFormItems[0].addEventListener('transitionend', ()=>{

if (formOpened){

hiddenFormItems[1].classList.add('linkToView');

}else{

hiddenFormItems[1].classList.remove('linkToView');

}

}, true);


hiddenFormItems[1].addEventListener('transitionend', ()=>{

if (formOpened){

hiddenFormItems[2].classList.add('linkToView');

}else{

hiddenFormItems[2].classList.remove('linkToView');

}

}, true);


hiddenFormItems[2].addEventListener('transitionend', ()=>{

if (formOpened){

hiddenFormItems[3].classList.add('linkToView');

}else{

hiddenFormItems[3].classList.remove('linkToView');

}

}, true);



hiddenFormItems[3].addEventListener('transitionend', ()=>{

if (formOpened){

hiddenFormItems[4].classList.add('linkToView');

}else{

hiddenFormItems[4].classList.remove('linkToView');

}

}, true);



hiddenFormItems[4].addEventListener('transitionend', ()=>{

if (formOpened){

hiddenFormItems[5].classList.add('linkToView');

}else{

hiddenFormItems[5].classList.remove('linkToView');

}

}, true);




hiddenEnter.addEventListener('transitionend', ()=>{

if (enterFormOpened){

hiddenFormItems[6].classList.add('linkToView');

}else{

hiddenFormItems[6].classList.remove('linkToView');

}

}, true);


hiddenFormItems[6].addEventListener('transitionend', ()=>{

if (enterFormOpened){

hiddenFormItems[7].classList.add('linkToView');

}else{

hiddenFormItems[7].classList.remove('linkToView');

}

}, true);


hiddenFormItems[7].addEventListener('transitionend', ()=>{

if (enterFormOpened){

hiddenFormItems[8].classList.add('linkToView');

}else{

hiddenFormItems[8].classList.remove('linkToView');

}

}, true);


hiddenFormItems[8].addEventListener('transitionend', ()=>{

if (enterFormOpened){

hiddenFormItems[9].classList.add('linkToView');

}else{

hiddenFormItems[9].classList.remove('linkToView');

}

}, true);






arrowRegisterBack[0].addEventListener('click', ()=>{

formOpened = false;

  hiddenRoom.classList.remove('openedRoom');

}, true);


arrowRegisterBack[1].addEventListener('click', ()=>{

formOpened = false;

  hiddenRoom.classList.remove('openedRoom');

hiddenEnter.classList.remove('openedRoom');

}, true);




// ----endPersonRoomOpenning---










// ---paragfafAppierCode-------



const paragrafs = document.querySelectorAll('p');

const iphoneHolder = document.querySelector('.iphoneHolder');

const iPhonePaths = document.querySelectorAll('#iPhoneXSVG path');


function checkSlide(e) {



const slideInAt = (window.scrollY + window.innerHeight) - iphoneHolder.scrollHeight/2;

    const pBottom = iphoneHolder.offsetTop + iphoneHolder.scrollHeight;

    const isHalfShown = slideInAt > iphoneHolder.offsetTop;

    const isNotScrolledPast = window.scrollY < pBottom;


    if(isHalfShown && isNotScrolledPast) Array.from(iPhonePaths).forEach(path => {path.classList.add('iphoneShow');

});



Array.from(paragrafs).forEach(p => {


    const slideInAt = (window.scrollY + window.innerHeight) - p.scrollHeight/2;

    const pBottom = p.offsetTop + p.scrollHeight;

    const isHalfShown = slideInAt > p.offsetTop;

    const isNotScrolledPast = window.scrollY < pBottom;


  //console.log(p.height);


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





// ---EndParagfafAppierCode-----

