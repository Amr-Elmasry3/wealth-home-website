// Access To Elements We Will Use

let headr= document.querySelector(".headr");
let links= document.querySelector(".links");
let btnGetStart= document.querySelector(".get-start");
let icon= document.querySelector(".icon");
let allLoves= Array.from(document.querySelectorAll(".box .love"));
let allLovesI= Array.from(document.querySelectorAll(".box .love i"));

// Part of Variables

let appere= false;
let loveArray= [];
let loveObject= {};

if (window.localStorage.getItem("class")){
  loveArray= JSON.parse(window.localStorage.getItem("class"));
}

// Main Code

appereAndDisappere();
window.onresize= function (){
  if (window.innerWidth <= 767){
    links.style.cssText= "height: 0 ; padding: 0";
    btnGetStart.style.cssText= "height: 0 ; padding: 0";
    appereAndDisappere();
  }
  else {
    links.style.cssText= "height: fit-content ; padding: 0";
    btnGetStart.style.cssText= "height: fit-content ; padding: 10px";
  }
}

allLovesI.forEach((love) => {
  for (let x=0 ; x<loveArray.length ; x++){
    if (love.dataset.number === loveArray[x].dataSet){
      if (love.classList.contains("fa-regular") && loveArray[x].class ===  "fa-regular"){
        continue;
      }
      else {
        love.classList.remove("fa-regular");
        love.classList.add("fa-solid");
        love.style.cssText= "color: red";
      }
    }
  }
})

allLoves.forEach((love) => {
  love.addEventListener("click", (eve) => {
    if (eve.currentTarget.firstChild.classList.contains("fa-regular")){
      eve.currentTarget.firstChild.classList.remove("fa-regular");
      eve.currentTarget.firstChild.classList.add("fa-solid");
      eve.currentTarget.firstChild.style.cssText= "color: red";
      loveObject= {
        dataSet: `${eve.currentTarget.firstChild.dataset.number}`,
        class: "fa-solid"
      };
      changeDatasetLove();
      loveArray.push(loveObject);
      window.localStorage.setItem("class",JSON.stringify(loveArray));
    }
    else {
      eve.currentTarget.firstChild.classList.remove("fa-solid");
      eve.currentTarget.firstChild.classList.add("fa-regular");
      eve.currentTarget.firstChild.style.cssText= "color: #18191A";
      loveObject= {
        dataSet: `${eve.currentTarget.firstChild.dataset.number}`,
        class: "fa-regular"
      };
      changeDatasetLove();
      loveArray.push(loveObject);
      window.localStorage.setItem("class",JSON.stringify(loveArray));
    }
  })
})

// Part Of Reveal Animation OnScroll

ScrollReveal().reveal(".headr",{distance: "60px",origin: "top",duration: "1200"});
ScrollReveal().reveal(".same-text-reveal", {delay: 600,easing: "ease-out",interval: 400});
ScrollReveal().reveal(".same-button",{distance: "100px",origin: "right",duration: "1200"});
ScrollReveal().reveal(".same-box-reveal",{delay: 500,easing: "ease-out",interval: 200});
ScrollReveal().reveal(".right-pic-reveal",{distance: "40px",origin: "right",duration: "1200"});
ScrollReveal().reveal(".left-pic-reveal",{distance: "40px",origin: "left",duration: "1200"});
ScrollReveal().reveal(".right-text-reveal",{distance: "40px",origin: "right",duration: "1200"});
ScrollReveal().reveal(".left-text-reveal",{distance: "40px",origin: "left",duration: "1200"});
ScrollReveal().reveal(".footer-reveal",{distance: "40px",origin: "top",duration: "1200"});

// Part Of Functions

function appereAndDisappere(){
  icon.onclick= function (){
    if (appere === false){
      links.style.cssText= "height: 255px ; padding: 10px ; transition: 0.8s";
      btnGetStart.style.cssText= "height: fit-content ; padding: 10px ; transition : 0.8s";
      icon.style.cssText= "background-color: #DADFE5 ; transition: 0.4s";
      appere= true;
    }
    else {
      links.style.cssText= "height: 0 ; padding: 0 ; transition: 0.8s";
      btnGetStart.style.cssText= "height: 0 ; padding: 0 ; transition : 0.2s";
      icon.style.cssText= "background-color: white ; transition: 0.4s";
      appere= false;
    }
  }
}

function changeDatasetLove(){
  for(let x=0 ; x<loveArray.length ; x++){
    if (loveArray[x].dataSet === loveObject.dataSet){
      loveArray.splice(x,1);
      break;
    }
  }
}