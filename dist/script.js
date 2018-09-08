let imageArr=[
    '../images/slider.png',
    '../images/slider2.png',
    '../images/slider3.png',
    '../images/slider4.png',
    '../images/slider5.png'
];
let wrapper=document.querySelector('.wrapper-header-img');
let sliderDotsBody=document.querySelector('.header__dots-block');
let sliderDots=document.querySelectorAll('.header__dot');
let dotsArr=Array.from(sliderDots);

sliderDotsBody.firstElementChild.style.backgroundColor='white';

function slider(e){
    if(e.target.nodeName == "SPAN"){
       let indexDot = dotsArr.indexOf(e.target); //index span
        imageArr.map(el=>{
           if (imageArr.indexOf(el) == indexDot){
               wrapper.style.backgroundImage=`url(${el})`;
           }
       });
       dotsArr.map(el => {
         if (dotsArr.indexOf(el) == indexDot){
            el.style.backgroundColor = 'white';
         } else { el.style.backgroundColor = 'black';}
       })
    }
}
sliderDotsBody.addEventListener('click', slider);

/////////////////MENU///////////////////////////////////////

let menuHidden = document.querySelector('.header__menu-icon');
let menu = document.querySelector('.menu');

function toggleMenu(){
   menu.classList.toggle('menu--show');
   menuHidden.classList.toggle('header__menu-toggle-icon');
}

menuHidden.addEventListener('click', toggleMenu);


///////////////Quoters-slider///////////////////
let quoterSlides = document.querySelectorAll('.quotes__slide');
let slidesArray = Array.from(quoterSlides);

let quoterDotsBlock= document.querySelector('.slider__dots-block');
let quoterSliderDots = document.querySelectorAll('.slider__dot');

let quoterDotsArr = Array.from(quoterSliderDots);
quoterDotsBlock.firstElementChild.style.backgroundColor='gray';

function quoterSlider(e){
  if(e.target.nodeName=="SPAN"){
    let indexQuoterDot=quoterDotsArr.indexOf(e.target);
    quoterSlides.forEach(el=>{
        if(slidesArray.indexOf(el)==indexQuoterDot){
            el.style.display='block';
        }
        else{
            el.style.display='none';
        }
    })
    quoterDotsArr.map(el => {
        if (quoterDotsArr.indexOf(el) == indexQuoterDot){
           el.style.backgroundColor = 'gray';
        } else { el.style.backgroundColor = 'transparent';}
      })
  }
}
quoterDotsBlock.addEventListener('click', quoterSlider);


////////////////////// Slide Menu///////////

menu.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.nodeName=='A'){
        const href = e.target.getAttribute('href');
        const el = document.querySelector(href);
        const top = el.getBoundingClientRect().top;
        setTimeout(()=>{
            window.scrollTo({ top: top, behavior: "smooth" });
        }, 400)
    }
})
