/* Load header and footer from external files
$(function(){
  $("#header").load("header.html");
});

$(function(){
  $("#footer").load("footer.html");
});
*/
/*
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
*/


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

const elements = document.querySelectorAll('.animate-content');
elements.forEach(el => observer1.observe(el));

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





window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});







/*


const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  

  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

*/




/*
const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);


document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".navigation a").forEach(otherLink => {
      otherLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});

function navHighlighter() {

  let scrollY = window.pageYOffset;


  if (scrollY === 0) {
    document.querySelector(".navigation a[href='#home-section']").classList.add("active");
    return;
  }


  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");


    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
*/


// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

// Initialize the active section to "home-section" when the page loads
let activeSection = "home-section";

// Remove the "active" class from other navigation links
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".navigation a").forEach(otherLink => {
      otherLink.classList.remove("active");
    });
    link.classList.add("active");
    activeSection = link.getAttribute("href").substring(1); // Update the active section
  });
});

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top, and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where the current section on the screen is,
    set activeSection to the ID of the current section.
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector.
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      activeSection = sectionId;
    }
  });

  // Remove the "active" class from all navigation links
  document.querySelectorAll(".navigation a").forEach(link => {
    link.classList.remove("active");
  });

  // Set the "active" class for the current active section's navigation link
  document.querySelector(".navigation a[href='#" + activeSection + "']").classList.add("active");
}
