const sandwich = document.querySelector('.sandwich'),

sandwichItems = document.querySelectorAll('.sandwich_item'),

hM = document.querySelector('.hiddenMenu'),

hiddenMenuLinks = document.querySelectorAll('.hiddenMenu-link');


let menuOpened = false;


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





// ---endHiddenMenuOpenning----









// ----personRoomOpenning------



const room = document.querySelector('.personRoom'),

hiddenRoom = document.querySelector('.hiddenRoom'),

arrowRegisterBack = document.querySelector('.registerHeaderTitle svg'),

hiddenFormItems = document.querySelectorAll('.hiddenFormItem');



let formOpened = false;


room.addEventListener('click', ()=>{


formOpened = true;

hiddenRoom.classList.add('openedRoom');

}, true);



hiddenRoom.addEventListener('touchmove', (e)=>{

e.preventDefault();

}, false);



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



arrowRegisterBack.addEventListener('click', ()=>{

formOpened = false;

hiddenRoom.classList.remove('openedRoom');

}, true);





// ----endPersonRoomOpenning---