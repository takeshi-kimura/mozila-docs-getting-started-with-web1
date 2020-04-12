let input = document.querySelector("input");
let element = document.querySelector("p");
let button = document.querySelector("button")

button.addEventListener("click",() => {
    element.innerText = input.value;
})
