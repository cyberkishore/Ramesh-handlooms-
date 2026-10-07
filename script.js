/* =========================================
   RAMESH HANDLOOMS
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE MENU
  ========================================= */

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

      navMenu.classList.toggle("show");

      if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
      } else {
        menuBtn.textContent = "☰";
      }

    });

  }


  /* =========================================
     CLOSE MOBILE MENU WHEN LINK IS CLICKED
  ========================================= */

  document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

      if (navMenu) {
        navMenu.classList.remove("show");
      }

      if (menuBtn) {
        menuBtn.textContent = "☰";
      }

    });

  });


  /* =========================================
     PRODUCT FILTER
  ========================================= */

  const filters = document.querySelectorAll(".filter");
  const products = document.querySelectorAll(".product-card");

  filters.forEach(filter => {

    filter.addEventListener("click", () => {

      /* Remove active state */
      filters.forEach(button => {
        button.classList.remove("active");
      });

      /* Activate selected filter */
      filter.classList.add("active");

      const selectedCategory = filter.dataset.filter;

      products.forEach(product => {

        const categories =
          product.dataset.category || "";

        if (
          selectedCategory === "all" ||
          categories.includes(selectedCategory)
        ) {

          product.style.display = "block";

          /* Small animation */
          setTimeout(() => {
            product.style.opacity = "1";
            product.style.transform = "translateY(0)";
          }, 20);

        } else {

          product.style.opacity = "0";
          product.style.transform = "translateY(10px)";

          setTimeout(() => {
            product.style.display = "none";
          }, 200);

        }

      });

    });

  });


  /* =========================================
     CURRENT YEAR
  ========================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================================
     SCROLL REVEAL ANIMATION
  ========================================= */

  const revealElements = document.querySelectorAll(
    ".product-card, .why-card, .category, .about-content"
  );

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealElements.forEach(element => {

      element.classList.add("reveal");

      revealObserver.observe(element);

    });

  }


  /* =========================================
     WHATSAPP PRODUCT BUTTONS
  ========================================= */

  const whatsappButtons =
    document.querySelectorAll(".product-bottom a");

  whatsappButtons.forEach(button => {

    button.addEventListener("click", () => {

      console.log(
        "Opening WhatsApp enquiry for Ramesh Handlooms..."
      );

    });

  });


  /* =========================================
     NAVBAR SCROLL EFFECT
  ========================================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

      navbar.style.boxShadow =
        "0 5px 25px rgba(50, 30, 15, 0.08)";

    } else {

      navbar.style.boxShadow = "none";

    }

  });


  /* =========================================
     ACTIVE NAVIGATION LINK
  ========================================= */

  const sections =
    document.querySelectorAll("section[id]");

  const navLinks =
    document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        "#" + currentSection
      ) {

        link.classList.add("active");

      }

    });

  });


  /* =========================================
     IMAGE PLACEHOLDER HOVER
  ========================================= */

  document.querySelectorAll(".product-card")
    .forEach(card => {

      card.addEventListener("mouseenter", () => {

        const image =
          card.querySelector(".product-image");

        if (image) {
          image.style.transform = "scale(1.01)";
        }

      });

      card.addEventListener("mouseleave", () => {

        const image =
          card.querySelector(".product-image");

        if (image) {
          image.style.transform = "scale(1)";
        }

      });

    });

});

One small addition to "style.css"

Because this JavaScript adds the ".reveal" class, add this at the bottom of your CSS:

.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

Now your three files are connected:

"index.html" → structure
"style.css" → premium design
"script.js" → interactions & animations

The next big upgrade would be replacing the placeholder product boxes with your friend's actual saree photos, so the site looks like a genuine Ramesh Handlooms catalogue rather than a template.