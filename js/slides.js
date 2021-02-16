"use strict";

const slides= document.querySelectorAll('#slideDeck section');
let currentSlide = 0;

function setSlide(slide_number) {
  let current = document.querySelector('#slideDeck section.current');
  if(current){
    current.classList.remove('current');
  }
  let mySlide = slides.item(slide_number);
  if(mySlide) {
    mySlide.classList.add('current');
  }
  test.textContent =`${slide_number + 1} of ${slides.length}`;
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide(ev) {
  currentSlide--;
  if(currentSlide < 0){
    currentSlide += slides.length - 1;
  }
  setSlide(currentSlide);
}

function nextSlide(ev) {
  currentSlide++;
  if(currentSlide >= slides.length) {
    currentSlide = 0;
  }
  setSlide(currentSlide);
}

setSlide(currentSlide);
