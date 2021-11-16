document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const mHeaderBtn = document.querySelector(".header-container__showList");
  const headerListItem = document.querySelectorAll(
    ".header-container__list > li"
  );

  let openNav = false;

  mHeaderBtn.addEventListener("click", () => {
    header.classList.add("open-nav");
    openNav = true;
  });

  window.addEventListener("resize", () => {
    if (openNav) {
      openNav = false;
      header.classList.remove("open-nav");
    }
  });

  body.addEventListener("click", (e) => {
    if (openNav && e.target.tagName === "HEADER") {
      openNav = false;
      header.classList.remove("open-nav");
    }
  });
  console.log(headerListItem);
  headerListItem.forEach((dom) => {
    dom.addEventListener("focusin", (e) => {
      if (e.target.nextElementSibling)
        e.target.nextElementSibling.style.opacity = 1;
    });

    dom.addEventListener("blur", (e) => {
      if (e.target.nextElementSibling)
        e.target.nextElementSibling.style.opacity = 0;
    });
  });
});
