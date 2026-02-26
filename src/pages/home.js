function homepage() {
  const heroSection = document.createElement("section");
  const heroTitle = document.createElement("h2");
  const heroPar = document.createElement("p");
  const heroCta = document.createElement("a");

  heroSection.id = "hero";
  heroSection.classList.add("hero");

  heroTitle.innerText = "Authentic Italian Flavors";

  heroPar.innerText =
    "Handmade pasta, wood-fired pizza, and the taste of tradition in every bite.";

  heroCta.classList.add("btn");
  heroCta.innerText = "Explore our menu";

  heroSection.append(heroTitle, heroPar, heroCta);

  return heroSection;
}

export default homepage;
