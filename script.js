// 1️⃣ Dynamic Year in Footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 2️⃣ Highlight Current Navigation Link
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop().split(".")[0];
navLinks.forEach(link => {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
  }
});

// 3️⃣ Console log to confirm it's working
console.log("script.js is loaded successfully!");

//4
// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', function() {
//   const filter = this.value.toLowerCase();
//   const cards = document.querySelectorAll('.recipe-card');
//   cards.forEach(card => {
//     const title = card.querySelector('.recipe-title').textContent.toLowerCase();
//     if(title.includes(filter)) {
//       card.style.display = '';
//     } else {
//       card.style.display = 'none';
//     }
//   });
// });
// //5
// window.addEventListener('load', () => {
//   document.body.classList.add('loaded');
// });
function signIn() {
      // In real app, you would validate credentials here
      const username = document.getElementById("signin-username").value;
      alert("Welcome, " + username + "!");
      // Redirect to homepage
      window.location.href = "index.html";
      return false; // prevent default form submit
    }

 function signUp() {
      const username = document.getElementById("signup-username").value;
      alert("Account created for " + username + "!");
      window.location.href = "signin.html";
      return false;
    }    