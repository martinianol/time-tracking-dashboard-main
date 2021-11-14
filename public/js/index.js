let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

const links = [daily, weekly, monthly];

//To highlight actual link
links.forEach(link => {
  if (link.getAttribute("href") == window.location.pathname) {
    link.className += ' currentLink'
  }
});

