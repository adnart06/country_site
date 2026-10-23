
// ==========================================
// MX MAGAZINE
// SHARED JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  // ========================================
  // 1. CONTACT FORM
  // ========================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    const contactStatus = document.getElementById("contactStatus");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      contactStatus.textContent =
        "Formulario validado. El envío de mensajes aún no está configurado.";
    });
  }


  // ========================================
  // 2. NEWSLETTER FORM
  // ========================================

  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    const newsletterStatus =
      document.getElementById("newsletterStatus");

    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!newsletterForm.checkValidity()) {
        newsletterForm.reportValidity();
        return;
      }

      newsletterStatus.textContent =
        "Correo validado. La suscripción aún no está conectada a un servicio.";
    });
  }


  // ========================================
  // 3. NEWS CARD CLICK ACTION
  // ========================================

  const newsCards = document.querySelectorAll(".news-card");
  const newsDialog = document.getElementById("newsDialog");

  if (newsDialog && newsCards.length > 0) {
    const dialogTitle = document.getElementById("newsDialogTitle");
    const dialogImage = document.getElementById("newsDialogImage");
    const closeButton = newsDialog.querySelector(".news-dialog-close");

    newsCards.forEach(function (card) {
      card.addEventListener("click", function () {
        const title = card.dataset.newsTitle;
        const image = card.dataset.newsImage;

        dialogTitle.textContent = title;
        dialogImage.src = image;
        dialogImage.alt = title;

        if (typeof newsDialog.showModal === "function") {
          newsDialog.showModal();
        }
      });
    });

    closeButton.addEventListener("click", function () {
      newsDialog.close();
    });

    newsDialog.addEventListener("click", function (event) {
      if (event.target === newsDialog) {
        newsDialog.close();
      }
    });
  }

});
