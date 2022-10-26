
   
//Nav Shadow with scrool


const navfix = document.getElementById("nav");


function navfixed()
{
  if (document.documentElement.scrollTop > 20) {
    navfix.className = "nav-containerfix";
    const number=window.scrollY;
console.log(number);
    
  } else {
    navfix.className = "nav-container";
  }
}

window.addEventListener('scroll', navfixed);


// Hamburger Button

const hamburgerbutton= document.getElementById('hamburgerbtn');

const shownav= document.getElementById('showsidenav');
const closebtn= document.getElementById('close');

function showifram()
{
  shownav.style.display=("block");
  closebtn.style.display=("block");
  hamburgerbutton.style.display=("none");
  
}
function close()
{
  
  shownav.style.display=("none");
  closebtn.style.display=("none");

  if(hamburgerbutton= window.matchMedia("(max-width: 990px)"))
  {
  hamburgerbutton.style.display=("block")
}
else 
{

}
  
  
}


hamburgerbutton.addEventListener('click', showifram);
closebtn.addEventListener('click', close);

// Animation of Cutting Edge

const upanimation = document.getElementById("animate");

function animationup()
{
  if (document.documentElement.scrollTop > 100) {

    /* text animation */
  upanimation.classList.add("animated", "animatedFadeInUp", "fadeInUp")

  /* Groups Animation*/
const groupanimation = document.getElementById("group-1");
const groupanimation2 = document.getElementById("group-2");
const groupanimation3 = document.getElementById("group-3");

  groupanimation.classList.add("animatedgroup1", "animatedFadeInUp", "fadeInUp")
  groupanimation2.classList.add("animatedgroup2", "animatedFadeInUp", "fadeInUp")
  groupanimation3.classList.add("animatedgroup3", "animatedFadeInUp", "fadeInUp")
}
else
{

}
}
window.addEventListener('scroll', animationup);
/* Beautiful, hand-crafted designs text animation */
const upanimation2 = document.getElementById("animate2");

function animationup2()
{
  if (document.documentElement.scrollTop > 800) {
  upanimation2.classList.add("animated", "animatedFadeInUp", "fadeInUp")
}
else
{

}
}

window.addEventListener('scroll', animationup2);







/* Practical tools make it easier to manage your
site. text animation */

const upanimation3 = document.getElementById("animate3");

function animationup3()
{
  if (document.documentElement.scrollTop > 2630) {
  upanimation3.classList.add("animated", "animatedFadeInUp", "fadeInUp")
}
else
{

}
}

window.addEventListener('scroll', animationup3);

/* */

const upanimation4 = document.getElementById("animate4");

function animationup4()
{
  if (document.documentElement.scrollTop > 4643) {
  upanimation4.classList.add("animated", "animatedFadeInUp", "fadeInUp")
}
else
{

}
}

window.addEventListener('scroll', animationup4);



 function rotate(x)
 {
   x.style.height = "auto";
 x.style.width = "290px";

 x.style.opacity= 0.5;
 x.style.transition= "0.5s" ;
 x.style.transform= "rotate(-10deg)";


 }

 function rerotate(x)
 {
   x.style.height = "auto";
 x.style.width = "290px";
 x.style.opacity= 1;
 x.style.transform= "rotate(0deg)";

 }

 // Hamburger animation

 function hamburgerover(hamburger)
 {
  
  hamburger.style.cursor="pointer";
  


 }

 function hamburgerout(hamburger)
 {
  hamburger.style.fill ="black";
 }
// Animation Of The Tool Cards 

 function mouseOver(demos) {
   demos.style.width = "45px";
   demos.style.paddingLeft="10px";
   demos.style.transition="0.5s";
   demos.style.cursor="pointer";
   
 }

 function mouseout(demos) {
  demos.style.width = "50px";
  demos.style.padding="0px"
}



/* feature animation */
/* feature animation1 */



function featurea1()
{
  if (document.documentElement.scrollTop > 3000) {
    const featuregroup1 = document.getElementById("feature-1");
    const featuregroup2 = document.getElementById("feature-2");
    const featuregroup3 = document.getElementById("feature-3");
    const featuregroup4 = document.getElementById("feature-4");
    const featuregroup5 = document.getElementById("feature-5");
    const featuregroup6 = document.getElementById("feature-6");
    const featuregroup7 = document.getElementById("feature-7");
    const featuregroup8 = document.getElementById("feature-8");
    const featuregroup9 = document.getElementById("feature-9");
    const featuregroup10 = document.getElementById("feature-10");
    const featuregroup11 = document.getElementById("feature-11");
    const featuregroup12 = document.getElementById("feature-12");
    
      featuregroup1.classList.add("animatedgroup1", "animatedFadeInUp", "fadeInUp")
      featuregroup2.classList.add("animatedgroup2", "animatedFadeInUp", "fadeInUp")
      featuregroup3.classList.add("animatedgroup3", "animatedFadeInUp", "fadeInUp")
      featuregroup6.classList.add("animatedgroup1", "animatedFadeInUp", "fadeInUp")
      featuregroup5.classList.add("animatedgroup2", "animatedFadeInUp", "fadeInUp")
      featuregroup4.classList.add("animatedgroup3", "animatedFadeInUp", "fadeInUp")
      featuregroup7.classList.add("animatedgroup1", "animatedFadeInUp", "fadeInUp")
      featuregroup8.classList.add("animatedgroup2", "animatedFadeInUp", "fadeInUp")
      featuregroup9.classList.add("animatedgroup3", "animatedFadeInUp", "fadeInUp")
      featuregroup12.classList.add("animatedgroup1", "animatedFadeInUp", "fadeInUp")
      featuregroup11.classList.add("animatedgroup2", "animatedFadeInUp", "fadeInUp")
      featuregroup10.classList.add("animatedgroup3", "animatedFadeInUp", "fadeInUp")
}
else
{

}
}

window.addEventListener('scroll', featurea1);



  




/* Number Counter */

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
   if (!startTimestamp) startTimestamp = timestamp;
   const progress = Math.min((timestamp - startTimestamp) / duration, 1);
   target.innerText = Math.floor(progress * (end - start) + start);
   if (progress < 1) {
    window.requestAnimationFrame(step);
   }
  };
  window.requestAnimationFrame(step);
 };
 //#endregion - end of - number counter animation
 
 document.addEventListener("DOMContentLoaded", () => {
  counterAnim("#count1", 10, 6000, 1000);
  counterAnim("#count2", 0, 90, 1500);
  counterAnim("#count3", 500, 10, 2000);
  counterAnim("#count4", 500, 100, 2500);
 });




 const slider = document.querySelector('.slider-inner');


let sliderGrabbed = false;



slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider.parentElement.scrollLeft -= e.movementX;
    }
})



function getScrollPercentage(){
   return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
}