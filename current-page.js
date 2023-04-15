var url = window.location.href;

if (url.indexOf('home.html') !== -1) {
  var homeLink = document.getElementById('home-link');
  if (homeLink) {
    homeLink.classList.add('active');
  }
} else if (url.indexOf('about.html') !== -1) {
  var aboutLink = document.getElementById('about-link');
  if (aboutLink) {
    aboutLink.classList.add('active');
  }
} else if (url.indexOf('portfolio.html') !== -1) {
  var portfolioLink = document.getElementById('portfolio-link');
  if (portfolioLink) {
    portfolioLink.classList.add('active');
  }
} else if (url.indexOf('enquire.html') !== -1) {
  var enquireLink = document.getElementById('enquire-link');
  if (enquireLink) {
    enquireLink.classList.add('active');
  } 
}

const currentLocation = location.pathname;
const menuItems = document.querySelectorAll('.mobile-menu ul li');
menuItems.forEach(item => {
  const link = item.querySelector('a');
  const href = link.getAttribute('href');
  if (currentLocation.includes(href)) {
    item.classList.add('active');
  }
});