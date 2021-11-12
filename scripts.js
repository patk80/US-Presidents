const expandIcon = document.querySelector(".expand-icon");
const hiddenText = document.querySelector(".president-component-expand-portion-hidden-text");

expandIcon.addEventListener('click', event => {
    hiddenText.classList.toggle("president-component-expand-portion-hidden-text");
    // expandIcon.innerHTML= "<ion-icon name='chevron-up-outline'></ion-icon>" ;
    // expandIcon.innerText = "X";
});