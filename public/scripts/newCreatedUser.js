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


const btnOZdravii = document.querySelector('#oZdrBtn');

const btnOUpokoenii = document.querySelector('#oUpokBtn');


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

const btnCardToCrt = document.querySelectorAll('.btnCardToCrt');

const test = document.querySelector('.test');



let startx = 0, dist = 0, counter = 0;




function checkSlide(e) {



const slideInAt = (window.scrollY + window.innerHeight) - twoCardsHolder.scrollHeight/2;

    const pBottom = twoCardsHolder.offsetTop + twoCardsHolder.scrollHeight;

    const isHalfShown = slideInAt > twoCardsHolder.offsetTop;

    const isNotScrolledPast = window.scrollY < pBottom;


    if(isHalfShown && isNotScrolledPast) {


   oZdravii.classList.remove('hideCards');

oUpokoenii.classList.remove('hideCards');





// --- listenersForZdravii------


oZdravii.addEventListener('touchstart', function(e){


        let touchobj = e.changedTouches[0]

        startx = parseInt(touchobj.clientX);



    // e.preventDefault();

        

    }, {passive:true});


oZdravii.addEventListener('touchmove', function(e){

      

        let touchobj = e.changedTouches[0];

        dist = parseInt(touchobj.clientX) - startx;



     oZdravii.style.transform = `translateX(${(dist/5)-50}%) translateY(-50%) translateZ(${(dist/4)}px)`;



     oUpokoenii.style.transform = `translateX(${70+(dist/4)}%) translateY(-50%) translateZ(${-150 - (dist/3.5)}px)`;




e.preventDefault();


    }, {passive:false});



oZdravii.addEventListener('touchend', function(e){

       

      if(dist < -100) {


        oZdravii.style.transform = 'translateX(-170%) translateY(-50%) translateZ(-150px)';


  oZdravii.classList.add('toLeft');



oUpokoenii.style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)';


  oUpokoenii.classList.add('toCenter');

      } else {

  oZdravii.style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)';


  oZdravii.classList.remove('toLeft');


  oUpokoenii.style.transform = 'translateX(70%) translateY(-50%) translateZ(-150px)';


  oUpokoenii.classList.remove('toCenter');

  }


 e.preventDefault();

    }, {passive:false});




// --- listenersForUpokoii------



oUpokoenii.addEventListener('touchstart', function(e){

        


        let touchobj = e.changedTouches[0]

        startx = parseInt(touchobj.clientX);

        


//e.preventDefault();

    }, {passive:true});


oUpokoenii.addEventListener('touchmove', function(e){

       


        let touchobj = e.changedTouches[0];

        dist = parseInt(touchobj.clientX) - startx;


     oZdravii.style.transform = `translateX(${(dist/5)-50}%) translateY(-50%) translateZ(${(dist/4)}px)`;



     oUpokoenii.style.transform = `translateX(${70+(dist/4)}%) translateY(-50%) translateZ(${-150 - (dist/3.5)}px)`;



e.preventDefault();

    }, {passive:false});



oUpokoenii.addEventListener('touchend', function(e){

        

      if(dist < -40) {


        oZdravii.style.transform = 'translateX(-170%) translateY(-50%) translateZ(-150px)';


  oZdravii.classList.add('toLeft');



oUpokoenii.style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)';


  oUpokoenii.classList.add('toCenter');

      } else {

  oZdravii.style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)';


  oZdravii.classList.remove('toLeft');


  oUpokoenii.style.transform = 'translateX(70%) translateY(-50%) translateZ(-150px)';


  oUpokoenii.classList.remove('toCenter');

  }



e.preventDefault();

    }, {passive:false});


}


}





window.addEventListener('scroll', debounce(checkSlide), {passive:true});


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








// ---oZdraviiFullScreenStr-----


btnOZdravii.addEventListener('touchstart', (e)=>{

  document.body.style.opacity = 0;

  let div = document.createElement('div');

  div.classList.add('newCreatedSinodik');

div.addEventListener('touchmove', function(e){

e.preventDefault();

    }, {passive:false});


  div.innerHTML = `

  <div class='nameForSinodikPage'>

    <span>без названия</span>

    <span>создан: 25.04.2019</span>

    <span>имен: 0</span>

  </div>

 <div class='logoForSinodikPage'>

<svg width='40' height='40' viewBox='0 0 100 100'>

  <g fill="transparent" stroke="#00515f" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

          <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

          <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

        </g>

      </svg>

    </div>

    <div class='titleForSinodikPage myRed'>о здравии</div>

    <div class='subTitleForSinodikPage'>рабов Божиих</div>

    

`;

  

setTimeout(()=>{

   document.body.appendChild(div);

document.body.style.opacity = 1;

}, 1000);

}, {

  once: true,

  passive: true

});




// ---oZdraviiFullScreenEnd-----





// ---oUpokniiFullScreenStr-----



btnOUpokoenii.addEventListener('touchstart', (e)=>{

  document.body.style.opacity = 0;

  let div = document.createElement('div');

  div.classList.add('newCreatedSinodik');

div.addEventListener('touchmove', function(e){

e.preventDefault();

    }, {passive:false});


  div.innerHTML = `

  <div class='nameForSinodikPage'>

    <span>без названия</span>

    <span>создан: 25.04.2019</span>

    <span>имен: 0</span>

  </div>

 <div class='logoForSinodikPage'>

<svg width='40' height='40' viewBox='0 0 100 100'>

  <g fill="transparent" stroke="#00515f" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

          <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

          <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

        </g>

      </svg>

    </div>

    <div class='titleForSinodikPage myBlue'>о упокоении</div>

    <div class='subTitleForSinodikPage'>рабов Божиих</div>

`;

  

setTimeout(()=>{

   document.body.appendChild(div);

document.body.style.opacity = 1;

}, 1000);

}, {

  once: true,

  passive: true

});




// ---oUpokoiiFullScreenEnd-----

