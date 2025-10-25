// Theme Toggle (Light / Dark)

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});


const greetingElement = document.getElementById("greeting");

let userName = localStorage.getItem("userName");

if (!userName) {
  userName = prompt("Welcome! What is your name?");
  
  if (userName) {
    localStorage.setItem("userName", userName);
  }
}

function getTimeNow() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  else if (hour < 18) return "Good afternoon";
  else return "Good evening";
}

if (userName) {
  greetingElement.textContent = `${getTimeNow()}, ${userName}! `;
} else {
  greetingElement.textContent = "Welcome to my website! ";
}


// -------------------------------
// Theme toggle (dark/light)
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Add rotation animation
  themeToggle.classList.add('rotate');

  // Remove rotation class after animation ends
  setTimeout(() => {
    themeToggle.classList.remove('rotate');
  }, 500);

  // Save preference in localStorage
  if(document.body.classList.contains('dark-theme')){
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-theme');
  }

  const sections = document.querySelectorAll('section, header');
  sections.forEach(section => {
    section.style.opacity = 1;
  });
});



