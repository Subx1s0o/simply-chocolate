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

let navbar = document.querySelector(".page-header");
let active_class = "navbar_scrolled";
const container = document.querySelector(".hero__container");

window.addEventListener("scroll", () => {
  if (window.innerWidth < 991) {
    if (window.scrollY > 600) {
      navbar.classList.add(active_class);
      container.style.paddingTop = "100px";
    } else {
      navbar.classList.remove(active_class);
      container.style.paddingTop = "0";
    }
  }
});

function scrollToSection(event, id) {
  event.preventDefault();

  const scrollTarget = document.querySelector(id);
  const scrollPosition =
    scrollTarget.getBoundingClientRect().top + window.scrollY;

  const adjustedScrollPosition = scrollPosition - 80;

  window.scrollTo({
    top: adjustedScrollPosition,
    behavior: "smooth",
  });
}
