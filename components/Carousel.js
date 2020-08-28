/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let container = document.querySelector ('.carousel-container');

let carousel = document.createElement ('div');
let left = document.createElement ('div');
let img0 = document.createElement ('img');
let img1 = document.createElement ('img');
let img2 = document.createElement ('img');
let img3 = document.createElement ('img');
let right = document.createElement ('div');

carousel.classList.add ('carousel')
left.classList.add ('left-button');
right.classList.add ('right-button');

img0.src = ('https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg');
img1.src = ('https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg');
img2.src = ('https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg');
img3.src = ('https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg');

left.addEventListener('click', movePrev);
right.addEventListener('click', moveNext);

left.textContent = ('<');
right.textContent = ('>');
container.appendChild (carousel);

carousel.appendChild (img0);
carousel.appendChild (img1);
carousel.appendChild (img2);
carousel.appendChild (img3);
carousel.appendChild (left);
carousel.appendChild (right);

console.log (carousel);
console.log ('Carousel loaded');

let items = [img0, img1, img2, img3];
let totalItems = items.length;
let slide = 0;

function setInitialStyles(items) {
  items[0].style.display = 'block';
  for (let i = 1; i < items.length; i++ ) {
    items[i].style.display = 'none';
  };
};

function moveCarouselTo(slide) {
  let newPrevious = slide - 1
  let newNext = slide + 1
  let oldPrevious = slide - 2
  let oldNext = slide + 2;

  if (newPrevious <= 0) {
    oldPrevious = (totalItems - 1);
  } else if (newNext >= (totalItems - 1)){
    oldNext = 0;
  }

  if (slide === 0) {
    newPrevious = (totalItems - 1);
    oldPrevious = (totalItems - 2);
    oldNext = (slide + 1);
  } else if (slide === (totalItems -1)) {
    newPrevious = (slide - 1);
    newNext = 0;
    oldNext = 1;
  }

  items[oldPrevious].style.display = 'none';
  items[oldNext].style.display = 'none';
  items[newPrevious].style.display = 'none';
  items[newNext].style.display = 'none';

  items[slide].style.display = 'block'

  }


function moveNext() {
    if (slide === (totalItems - 1)) {
      slide = 0;
    } else {
      slide++;
    }
    moveCarouselTo(slide);

}

function movePrev() {
    if (slide === 0) {
      slide = (totalItems - 1);
    } else {
      slide--;
    }
    moveCarouselTo(slide);
}

setInitialStyles(items);