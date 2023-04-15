// Load header and footer from external files
$(function(){
  $("#header").load("header.html");
});

$(function(){
  $("#footer").load("footer.html");
});


/*

// Animate text on page load
const text = document.getElementById('text');
const animationDelay = 6;
let newDom = '';

for (let i = 0; i < text.innerText.length; i++) {
  newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
}

text.innerHTML = newDom;
const length = text.children.length;

for (let i = 0; i < length; i++) {
  text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}


*/



const animateText = () => {
  const texts = document.getElementsByClassName('text');
  const animationDelay = 6;

  for (let j = 0; j < texts.length; j++) {
    let newDom = '';

    for (let i = 0; i < texts[j].innerText.length; i++) {
      newDom += '<span class="char">' + (texts[j].innerText[i] == ' ' ? '&nbsp;' : texts[j].innerText[i]) + '</span>';
    }

    texts[j].innerHTML = newDom;
    const length = texts[j].children.length;

    for (let i = 0; i < length; i++) {
      texts[j].children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
  }
}

animateText();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateText();
    }
  });
}, { threshold: 0 });

const section = document.getElementsByClassName('animation-section')[0];
observer.observe(section);


/*
// Animate text on page load
const animateText = () => {
  const text = document.getElementById('text');
  const animationDelay = 6;
  let newDom = '';

  for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
  }

  text.innerHTML = newDom;
  const length = text.children.length;

  for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  }
}

animateText();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateText();
    }
  });
}, { threshold: 0 });

const section = document.getElementById('animation-section');
observer.observe(section);


          <!--
          <div id="animation-section">
            <p class="enquire-text" id="text">Interested in working with me and want to connect? If so please fill out this form and I'll get back to you. Thanks!</p>
          </div> -->

*/




// Observe elements with the "animate" class and trigger animations when they are visible
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains('animate-played')) {
        entry.target.classList.add('animate-show');
        entry.target.classList.add('animate-played');
      }
    } else {
      entry.target.classList.remove('animate-show');
    }
  });
}, { threshold: 0 });

const elements = document.querySelectorAll('.animate');
elements.forEach(el => observer1.observe(el));

// Trigger animations again when elements with the "animate-played" class become visible again
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.classList.contains('animate-played') && !el.classList.contains('animate-show')) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add('animate-show');
      }
    }
  });
});
