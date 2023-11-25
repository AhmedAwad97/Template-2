let toggle = document.querySelectorAll("header .toggle-menu");
toggle.forEach((element) =>
  element.addEventListener("click", function () {
    document.querySelector("header ul").classList.toggle("visible");
  })
);
