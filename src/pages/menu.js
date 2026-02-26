function menu() {
  const menuSec = document.createElement("section");
  menuSec.id = "menu";
  menuSec.classList.add("menu");

  menuSec.innerHTML = `<div class="container">
          <h3>Today's Specials</h3>
          <div class="menu-grid">
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Margherita pizza"
              />
              <div class="menu-item-content">
                <h4>Margherita Pizza</h4>
                <p class="desc">
                  San Marzano tomatoes, fresh mozzarella, basil, extra virgin
                  olive oil
                </p>
                <span class="price">$16</span>
              </div>
            </div>
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Spaghetti Carbonara"
              />
              <div class="menu-item-content">
                <h4>Spaghetti Carbonara</h4>
                <p class="desc">
                  Eggs, pecorino cheese, guanciale, black pepper
                </p>
                <span class="price">$18</span>
              </div>
            </div>
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Lasagna"
              />
              <div class="menu-item-content">
                <h4>Classic Lasagna</h4>
                <p class="desc">
                  Layers of pasta, beef ragu, béchamel, and Parmigiano
                </p>
                <span class="price">$20</span>
              </div>
            </div>
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tiramisu"
              />
              <div class="menu-item-content">
                <h4>Tiramisu</h4>
                <p class="desc">
                  Mascarpone cream, espresso-soaked ladyfingers, cocoa
                </p>
                <span class="price">$9</span>
              </div>
            </div>
          </div>
        </div>`;

  return menuSec;
}

export default menu;
