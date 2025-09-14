const modal = document.getElementById("contact-modal");
const btn = document.getElementById("contact-btn");
const closeBtn = document.querySelector(".close");

// opene modal
btn.onclick = () => {
  modal.classList.add("show");
  modal.style.display = "flex";
}

// close modal
closeBtn.onclick = () => {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300); 
}
// close
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
  }
}

// EmailJS
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_2751kmc", "template_4ljqxca", this, "lvVC0bmLBqN9GAWX-")
    .then(() => {
      alert("✅ Message sent!");
      modal.classList.remove("show");
      setTimeout(() => modal.style.display = "none", 300);
      this.reset();
    }, (error) => {
      alert("❌ Error: " + JSON.stringify(error));
    });
});

//  img 
const img = document.getElementById("profile-img");

img.addEventListener("mouseenter", () => {
  img.style.transform = "scale(1.2)";
  img.style.filter = "brightness(1.1)";
});

img.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)";
  img.style.filter = "brightness(1)";
});

img.addEventListener("click", () => {
  img.style.transform = "scale(1.3)";
  setTimeout(() => {
    img.style.transform = "scale(1)";
  }, 300);
});
