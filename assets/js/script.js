document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "0.5rem 0";
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
      navbar.style.padding = "1rem 0";
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
  });
  for (const anchor of document.querySelectorAll('a[href^="#"]')) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  }
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;
      const inputs = this.querySelectorAll("input, textarea, select");

      for (const input of inputs) {
        if (input.hasAttribute("required") && !input.value.trim()) {
          valid = false;
          input.classList.add("is-invalid");
        } else {
          input.classList.remove("is-invalid");
        }
      }
      if (valid) {
        const formContainer = this.parentElement;
        formContainer.innerHTML = `
                    <div class="alert alert-success text-center p-5" role="alert">
                        <h4 class="alert-heading mb-3">¡Mensaje Enviado!</h4>
                        <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
                    </div>
                `;
      }
    });
  }
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    card.addEventListener("mouseenter", function () {
      this.style.background = "linear-gradient(-45deg, #000, #222, #333, #111)";
      this.style.backgroundSize = "400% 400%";
      this.style.animation = "gradient 15s ease infinite";
      this.style.color = "white";
    });

    card.addEventListener("mouseleave", function () {
      this.style.background = "white";
      this.style.animation = "none";
      this.style.color = "black";
    });
  }
});
