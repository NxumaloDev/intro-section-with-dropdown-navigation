# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](<images/Screenshot 2023-09-21 213224.png>)
![Screenshot](<images/Screenshot 2023-09-21 213240.png>)
![Screenshot](<images/Screenshot 2023-09-21 213304.png>)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
          drop.classList.remove("active");
      }
      });
      btn.setAttribute(
        "aria-expanded",
        btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
        );
```

### Continued development

- Use of aria-labels (Semantic HTML) is one of those things i must get familiar with, considering web accessibility and simply better code.
- In JavaScript, DOM properties like getAttribute(), datasets[] and loop iteration, specifically forEach()

### Useful resources

- [freeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-responsive-navigation-bar-with-dropdown-menu-using-javascript/) - This helped me with the implementation of the dropdown. Provided a cleaner alternative regarding the JavaScript part.

## Author

- Frontend Mentor - [@NxumaloDev](https://www.frontendmentor.io/profile/NxumaloDev)
- Instagram - [@sarcasm_emoji](https://www.instagram.com/sarcasm_emoji)

## Acknowledgments

- FrontEnd Mentor
- freeCodeCamp
