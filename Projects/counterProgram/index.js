const value = document.getElementById("value");
const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");
let count = 0;
btnDecrease.onclick = function () {
    count--;
    value.textContent = count;
}
btnReset.onclick = function () {
    count = 0;
    value.textContent = count;
}
btnIncrease.onclick = function () {
    count++;
    value.textContent = count;
}