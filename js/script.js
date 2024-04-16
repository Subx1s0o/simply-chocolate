function scrollToSection(event, id) {
  event.preventDefault();
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
}

(() => {
  const mobileMenu = document.querySelector(".burger-overlay ");
  const openMenuBtn = document.querySelector(".burger");
  const closeMenuBtn = document.querySelector(".close-burger");
  const closeMenuLink = document.querySelectorAll(".nav-li-burg");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };
  closeMenuLink.forEach((item) => item.addEventListener("click", toggleMenu));
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
