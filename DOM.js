function searchPage() {
    document.getElementById('srch').style.backgroundColor = 'yellow';
}

function changeColor() {
    document.getElementById('fname').style.backgroundColor = 'lightblue';
}
function removeColor() {
    document.getElementById('fname').style.backgroundColor = '';
}
let ccr = document.getElementById('fname');
ccr.addEventListener('focus', changeColor);
ccr.addEventListener('blur', removeColor);