const PaS = document.querySelector('#PaS');

PaS.addEventListener('mouseenter', () => {
  if (!PaS.classList.contains('hover')) {
    PaS.classList.add('hover');
  }
});

PaS.addEventListener('mouseleave', () => {
  if (PaS.classList.contains('hover')) {
    PaS.classList.remove('hover');
  }
});
const CBS = document.querySelector('#CBS');

CBS.addEventListener('mouseenter', () => {
  if (!CBS.classList.contains('hover')) {
    CBS.classList.add('hover');
  }
});

CBS.addEventListener('mouseleave', () => {
  if (CBS.classList.contains('hover')) {
    CBS.classList.remove('hover');
  }
});
const Bar = document.querySelector('#Bar');

Bar.addEventListener('mouseenter', () => {
  if (!Bar.classList.contains('hover')) {
    Bar.classList.add('hover');
  }
});

Bar.addEventListener('mouseleave', () => {
  if (Bar.classList.contains('hover')) {
    Bar.classList.remove('hover');
  }
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





