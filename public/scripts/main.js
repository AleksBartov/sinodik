let sTop = document.getElementsByClassName('sandwich')[0],

      sMiddle = document.getElementsByClassName('sandwich')[1],
      
      sBottom = document.getElementsByClassName('sandwich')[2],
      
      sandwichClicked = false;
      
      
      
      
      //открытие меню
      
      function toOpenMenu() {
      
        sTop.classList.add("sandwichTopOpened");
      
          sMiddle.classList.add("sandwichMiddleOpened");
      
          sBottom.classList.add("sandwichBottomOpened");
      
      
      hiddenMenu.classList.add("openedMenu");
      
      
      startPray.classList.add("heightAuto");
      
      newSinodik.classList.add("heightAuto");
      
      newName.classList.add("heightAuto");
      
      allSinodiks.classList.add("heightAuto");
      
      
      logo.style.color = "rgba(45,45,45,1)";
      
      }
      
      //конец открытия меню
      
      
      
      
      // закрытие меню
      
      function toCloseMenu() {
      
        sTop.classList.remove("sandwichTopOpened");
      
          sMiddle.classList.remove("sandwichMiddleOpened");
      
          sBottom.classList.remove("sandwichBottomOpened");
      
      
      hiddenMenu.classList.remove("openedMenu");
      
      
      startPray.classList.remove("heightAuto");
      
      newSinodik.classList.remove("heightAuto");
      
      newName.classList.remove("heightAuto");
      
      allSinodiks.classList.remove("heightAuto");
      
      
      
      logo.style.color = "#e4e1dc";
      
      }
      
      // конец закрытия меню
      
      
      
      function myScroller(){
      
          container.style.top = `${counterFor}px`;
      
          
      
          for ( let i = 0; i < counter; i++){
      
        getNameAndShowIt (`person_${i}`);
      
      }
      
        counterFor += 1;
      
        if (container.getBoundingClientRect().top > 50) {
      
          
      
      container.scrollIntoView(false);
      
      
        pause.hidden = true;
      
        counterFor = 0;
      
        return
      
        }
      
        if (playPressed) {
      
      requestAnimationFrame(myScroller)
      
        }
      
      }
      
      
      
      
      
      sandwich.onclick = (e) => {
      
        sandwichClicked = !sandwichClicked;
      
        playPressed = false;
      
        pause.hidden = true;
      
        play.hidden = false;
      
        
      
        
      
        if(sandwichClicked) {
      
          toOpenMenu();
      
        } else {
      
          
      
      toCloseMenu();
      
      
        }
      
      }
      
      
      
      allSinodiks.addEventListener('click', (ev)=>{
      
      
      ev.preventDefault();
      
      
      startPray.classList.remove("heightAuto");
      
      newSinodik.classList.remove("heightAuto");
      
      newName.classList.remove("heightAuto");
      
      allSinodiks.classList.remove("heightAuto");
      
      
      setTimeout(()=>{
      
          toCloseMenu();
      
        }, 1500);
      
      
      setTimeout(()=>{
      
        hiddenList.classList.add("openedList");
      
      hiddenList.innerHTML = `<center>+</center><h1>о здравии</h1>${names.reverse().map(n =>n.name).join('</br>')}`
      
      }, 2000);
      
      
      }, false);
      
        
      
      
      
      
      let counter = 0;
      
      
      
      function createDivForName (name) {
      
        let div = document.createElement('div');
      
        div.id = `person_${counter}`;
      
        div.className = 'personDiv';
      
        div.innerHTML = `${name.name}</br><p class='comments-for-name'>(${name.comments})</p>`
      
        container.append(div);
      
        counter++
      
      }
      
      
      
      
      let names = [
      
        {name:"археп. Амвросия", comments: "Ермаков"},
      
        {name:"арх. Никиты", comments: "духовник"},
      
        {name:"Елисаветы", comments: "супруга"},
      
        {name:"мл. Варвары", comments: "дочь"},
      
        {name:"мл. Иоанна", comments: "сын"},
      
        {name:"мл. Бориса", comments: "сын"},
      
        {name:"мл. Любови", comments: "дочь"}
      
      ];
      
      
      names.reverse().forEach(n=>createDivForName(n));
      
      
      document.body.addEventListener('touchstart', stopAutoScroll, true);
      
      
      function stopAutoScroll (ev) {
      
       
      
        if(ev.target.className == 'personDiv') {
      
        playPressed = false;
      
        pause.hidden = true;
      
        play.hidden = false;
      
      
        }
      
      }
      
      
      
      document.body.addEventListener('touchmove', move, true);
      
      
      function move (ev) {
      
      
      
      for ( let i = 0; i < counter; i++){
      
        getNameAndShowIt (`person_${i}`);
      
      }
      
      
      }
      
      
      
      function getNameAndShowIt (ID) {
      
      
        
      
        // 1.нашел имя
      
        let firstName = document.getElementById(ID);
      
      
      
        // 2. определил растояние сверху
      
        let fromTop = firstName.getBoundingClientRect().top;
      
        //forPoints.value = fromTop;
      
      
        // 3. поставил условия
      
        if(fromTop>0 && fromTop < 260) {
      
      firstName.style.opacity = 1;
      
      // firstName.style.transform = 'translateZ(0px)';
      
        }else{
      
      firstName.style.opacity = 0;
      
      // firstName.style.transform = 'translateZ(-50px)';
      
        }
      
      
        
      
        if(fromTop>30 && fromTop < 190) {
      
      firstName.style.filter = 'blur(0px)';
      
        }else{
      
      firstName.style.filter = 'blur(8px)';
      
        }
      
        
      
      
      }
      
      
        let counterFor = 0, playPressed = false;
      
      
      play.onclick = (ev) => {
      
        ev.target.hidden = true;
      
        pause.hidden = false;
      
        playPressed = true;
      
        requestAnimationFrame(myScroller);
      
      
      }
      
      
      
      pause.onclick = (ev) => {
      
        pause.hidden = true;
      
        play.hidden = false;
      
        playPressed = false;
      
        
      
      }
      
      
      
      
      reloadList.onclick = (ev) => {
      
      
      playPressed = false;
      
      container.scrollIntoView(false);
      
      pause.hidden = true;
      
      play.hidden = false;
      
      counterFor = 0;
      
      requestAnimationFrame(myScroller);
      
      }
      
      
      
      container.scrollIntoView(false);