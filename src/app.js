
const button = document.querySelector('button');
body = document.getElementById('body');
colorNameArea = document.getElementById('colorName');

button.addEventListener('click', event => {
    let random = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor =`#${random}`;
    colorNameArea.textContent =`Color number hex code is #${random}`;
});