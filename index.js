// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

// tabs

// grabbing all the tabs li
const tabs = document.querySelectorAll(".tabs li");
// grabbing all the divs that are the direct children of tab=content
const tabContentBoxes = document.querySelectorAll("#tab-content > div");

// for each tab add an event listener for click
// if clicked it will remove the is-active from the other tabs and add it to itself
// will show the div that matches the target id
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.target;
    tabContentBoxes.forEach((box) => {
      box.getAttribute("id") === target
        ? box.classList.remove("is-hidden")
        : box.classList.add("is-hidden");
    });
  });
});

// modal
// sign up button to turn on is-active
const signupButton = document.querySelector("#signup");
// to close the modal by taking off is-active
const modalBG = document.querySelector(".modal-background");
// need to add the is-active class to this div
const modal = document.querySelector(".modal");

signupButton.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBG.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
