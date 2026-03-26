const container = `
<header>
  <h1 class="logo">${site_title}</h1>
  <nav>
    ${menu.map(el => `<a href="${el.link}">${el.label}</a>`).join("")
    }
  </nav>
  <button class="hamburger"><img src="${hamburger_image}"/></button>
  <div class="profile">profile</div>
</header>
`;

const Header = document.getElementById("header");
Header.innerHTML = container;

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});