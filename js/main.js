// AOS.init();

// var $grid = $('.grid').isotope({
//   // options
// });

// var elem = document.querySelector('.grid');
// var iso = new Isotope( elem, {
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });

// Tools slider

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// Header writting

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2200;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ffffff }";
  document.body.appendChild(css);
};

// Modal project

const carteButtons = document.querySelectorAll('.carte');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
let body = document.body;

function handleCarteButtonClick(event) {
  const button = event.currentTarget;
  const carte = button.closest('.carte');
  // Grab the image src
  const imgSrc = carte.querySelector('img').src;
  const desc = carte.dataset.description;
  const name = carte.querySelector('h2').textContent;
  const link = carte.dataset.link
  // populate the modal with the new info
  modalInner.innerHTML = `<h1>${name}</h1>
    <img width="300" height="300" src="${imgSrc.replace(
      '200',
      '600'
    )}" alt="${name}"/>
    <p>${desc}</p>
    <input type="button" onclick="location.href='${link}';" value="See more" />
  `;
  // show the modal
  modalOuter.classList.add('open');
  body.classList.add('open')
}

carteButtons.forEach((button) =>
  button.addEventListener('click', handleCarteButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
  body.classList.remove('open')
}

modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// Portfolio


// (function($) {
//     "use strict";

//     // manual carousel controls
//     $('.next').click(function(){ $('.carousel').carousel('next');return false; });
//     $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

// })(jQuery);