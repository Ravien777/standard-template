import "./styles.css";

import homepage from "./pages/home.js";
import about from "./pages/about.js";
import menu from "./pages/menu.js";

const content = document.getElementById("content");
const navBtns = document.querySelectorAll(".nav-btn");

console.log("webpack is running");

function loadPage(createPage) {
  content.innerHTML = "";
  const newPage = createPage();

  content.appendChild(newPage);
}

navBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    // 1. Remove .active from all buttons first
    navBtns.forEach((btn) => btn.classList.remove("active"));

    // 2. Add .active only to the clicked button
    event.currentTarget.classList.add("active");

    // 3. Your existing page loading logic
    if (event.currentTarget.classList.contains("rhome")) {
      loadPage(homepage);
    } else if (event.currentTarget.classList.contains("rabout")) {
      loadPage(about);
    } else if (event.currentTarget.classList.contains("rmenu")) {
      loadPage(menu);
    }
  });
});

loadPage(homepage);
