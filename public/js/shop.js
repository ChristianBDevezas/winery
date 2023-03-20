// const itemValue = document.querySelector(".product__price__item");
const itemValue = document.querySelector(".product__price__item").innerText;
const itemQuantity = document.querySelector(".cart__buttons__quantity");
const totalValue = document.querySelector(".cart__price_total");
const subtractBtn = document.querySelector(".cart__buttons__subtract");
const addBtn = document.querySelector(".cart__buttons__add");
const removeBtn = document.querySelector(".cart__buttons__remove");
const container = document.querySelector(".cart__description");

let counter = 1;
let removedContainer = false;
let change = Number(itemValue.replace(',', '.'));

const calculate = () => {
    itemQuantity.textContent = counter;
    // let total = itemValue.textContent * itemQuantity.textContent;
    // total = Number(total);
    // totalValue.textContent = total.toFixed(2);

    // let mult = change * itemQuantity.textContent;
    let mult = change * counter;
    let totalField = mult.toFixed(2).toString().replace('.', ',');
    totalValue.textContent = totalField;
}

subtractBtn.addEventListener("click", () => {
    if(counter < 1) counter = 0;
    if(counter > 0) counter --;    
    calculate();
});

addBtn.addEventListener("click", () => {
    if(removedContainer == false) counter ++;
    if(removedContainer == true) counter = 0;
    calculate();
});

removeBtn.addEventListener("click", () => {
    container.remove();
    removedContainer = true;
    counter = 0;
    itemQuantity.textContent = 0;
});