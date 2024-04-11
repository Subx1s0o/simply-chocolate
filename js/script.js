function scrollToSection(event, id) {
  event.preventDefault();
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
}
