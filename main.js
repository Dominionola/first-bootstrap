const dropdownTrigger = document.getElementById("useCasesDropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");
const icon = dropdownTrigger.querySelector(".dropdown-icon");

dropdownTrigger.addEventListener("click", function () {
  setTimeout(() => {
    if (dropdownTrigger.getAttribute("aria-expanded") === "true") {
      icon.classList.remove("bi-chevron-down");
      icon.classList.add("bi-chevron-up");
    } else {
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");
    }
  }, 100); // slight delay to allow aria-expanded to update
});


