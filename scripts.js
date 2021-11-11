const expandIcon = document.querySelector(".expand-icon");
const hiddenText = document.querySelector(".president-component-expand-portion-hidden-text");

expandIcon.addEventListener('click', event => {
    hiddenText.classList.toggle("president-component-expand-portion-hidden-text");
    // expandIcon.innerText = "X";
});