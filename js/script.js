const themeToggle = document.getElementById("switch");
var length = document.getElementsByClassName('box').length;
var lengthAmount = document.getElementsByClassName('amount').length;
var lengthNumber = document.querySelectorAll('.top-section .box>div>p:first-child').length;

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.getElementsByTagName('h1')[0].classList.toggle('dark');
    document.getElementById('header').classList.toggle('dark');
    document.getElementsByTagName('h2')[0].classList.toggle('dark');
    document.getElementById('darkToggle').classList.toggle('dark');
    for (let i=0; i<length; i++) {
        document.getElementsByClassName('box')[i].classList.toggle('dark');
    }
    for (let j=0; j<lengthAmount; j++) {
        document.querySelectorAll(".amount")[j].classList.toggle('dark');
    }
    for (let k=0; k<lengthNumber; k++) {
        document.querySelectorAll(".section .box>div>p:first-child")[k].classList.toggle('dark');
    }
});