// script.js

// Function to show a cute greeting when the page loads
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    alert("✨ Welcome to GlowUp Cosmetics! ✨\nWhere beauty meets confidence 💄💋");
  }, 500);
});

// Optional: Change card background on hover
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#fff3e6"; // Light orange background
  });
  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "#ffffff"; // Reset to white
  });
});

// Optional: Make hearts bounce (if you add like buttons later!)
/*
const hearts = document.querySelectorAll(".heart");
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
  });
});
*/
