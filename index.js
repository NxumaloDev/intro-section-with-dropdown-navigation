// navigation menu
const openMenu = document.querySelectorAll('.menu img')[0]
const closeMenu = document.querySelectorAll('.menu img')[1]
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav-list')

closeMenu.style.opacity = '0'

menu.addEventListener('click', ()=> {
  if (nav.style.opacity === '0'){
    closeMenu.style.opacity = '1'
    openMenu.style.opacity = '0'
    
    nav.style.pointerEvents = 'fill'
    nav.style.opacity = '1'
    nav.style.zindex = '1'
  }
  else {
    closeMenu.style.opacity = '0'
    openMenu.style.opacity = '1'
    
        nav.style.pointerEvents = 'none'
        nav.style.opacity = '0'
        nav.style.zindex = '-1'
    }
})


const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}
  
function closeDropdownMenu() {
  dropdown.forEach((drop) => {
      drop.classList.remove("active");
      drop.addEventListener("click", (e) => e.stopPropagation());
  });
}
  
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);
  
    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
          drop.classList.remove("active");
      }
      });
      e.stopPropagation();
      btn.setAttribute(
        "aria-expanded",
        btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
        );
      });
  });
  
const icons = document.querySelectorAll('.icon')

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    icons[0].style.rotate = '0deg'
    icons[1].style.rotate = '0deg'
    })
);

// close dropdown when the escape key is pressed
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDropdownMenu();
    setAriaExpandedFalse();
    icons[0].style.rotate = '0deg'
    icons[1].style.rotate = '0deg'
  }
});



// rotate dropdown image on click
icons[0].style.rotate = '0deg'
icons[1].style.rotate = '0deg'

dropdownBtn[0].addEventListener('click', ()=> {
  icons[1].style.rotate = '0deg'
  if (icons[0].style.rotate === '0deg') {
    icons[0].style.rotate = '180deg'
  }
  else {
    icons[0].style.rotate = '0deg'
  }
});

dropdownBtn[1].addEventListener('click', ()=> {
  icons[0].style.rotate = '0deg'
  if (icons[1].style.rotate === '0deg') {
    icons[1].style.rotate = '180deg'
  }
  else {
    icons[1].style.rotate = '0deg'
  }
});