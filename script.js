const screens = [
  {
    src: "assets/screen-map.png",
    alt: "Ekran mapy Łowio"
  },
  {
    src: "assets/screen-map-type.png",
    alt: "Panel wyboru typu mapy w aplikacji Łowio"
  },
  {
    src: "assets/screen-filters.png",
    alt: "Panel filtrów wód i dostępu w aplikacji Łowio"
  },
  {
    src: "assets/screen-marker.png",
    alt: "Formularz ustawiania znacznika w aplikacji Łowio"
  },
  {
    src: "assets/screen-add-catch.png",
    alt: "Formularz zapisu połowu w aplikacji Łowio"
  },
  {
    src: "assets/screen-records.png",
    alt: "Lista rekordów połowów w aplikacji Łowio"
  }
];

const preview = document.querySelector("#screen-preview");
const tabs = document.querySelectorAll(".screen-tab");
const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const nextScreen = screens[Number(tab.dataset.screen)];

    tabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    preview.src = nextScreen.src;
    preview.alt = nextScreen.alt;
  });
});

toggle.addEventListener("click", () => {
  const willOpen = mobileNav.hasAttribute("hidden");
  mobileNav.toggleAttribute("hidden", !willOpen);
  toggle.setAttribute("aria-expanded", String(willOpen));
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mobileNav.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", "false");
  }
});
