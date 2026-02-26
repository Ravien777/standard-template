function about() {
  const aboutSec = document.createElement("section");
  aboutSec.id = "about";
  aboutSec.classList.add("about");

  aboutSec.innerHTML = `<div class="container">
          <h3>Our Story</h3>
          <p>
            La Trattoria was born from a family recipe book and a love for
            simple, honest food. We use only the freshest ingredients, many
            sourced from local farms, to bring you the warmth of Italian home
            cooking.
          </p>
        </div>`;

  return aboutSec;
}

export default about;
