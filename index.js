
// update total
function updateTotal() {
    console.log(memoryPrice.innerText, storagePrice.innerText, shippingPrice.innerText);
    const shipping = Number(shippingPrice.innerText);
    const storage = Number(storagePrice.innerText);
    const memory = Number(memoryPrice.innerText);
    const grandTotal = 1299 + memory + storage + shipping;
    document.getElementById("totalPrice").innerText = grandTotal;
    document.getElementById("discountPrice").innerText = grandTotal;
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.addEventListener("click", function () {
        const discount = document.getElementById("discount");
        const discountKaku = discount.value;
        //const discountPromo = Number(discount);
        //console.log(discountPromo);
        if (discountKaku == "stevekaku") {
            //console.log(discountPromo);
            discountPromo = (grandTotal * 20) / 100;
            const discountPrice = grandTotal - discountPromo;
            document.getElementById("discountPrice").innerText = discountPrice;
            discount.value = " ";
        }
        else { console.log("incorrect") }
    });
    // const discount = (grandTotal * 20) / 100;
    // document.getElementById("discount").innerText = discount;
    // const discountPrice = grandTotal - discount;
}
// update after click promo button
// function updatedDiscount() {
//     document.getElementById("discountPrice").innerText = grandTotal;
//     discountPromo = (grandTotal * 20) / 100;
//     const discountPrice = grandTotal - discountPromo;
//     document.getElementById("discountPrice").innerText = discountPrice;
// }
// click discount button



// button click for memory
const btn1 = document.getElementById("memory1");
btn1.addEventListener("click", function () {
    memoryPrice.innerText = "0";
    updateTotal()
});
const btn2 = document.getElementById("memory2");
btn2.addEventListener("click", function () {
    memoryPrice.innerText = "180";
    updateTotal()
});
// button click for storage
const btn3 = document.getElementById("storage1");
btn3.addEventListener("click", function () {
    storagePrice.innerText = "0";
    updateTotal()
});
const btn4 = document.getElementById("storage2");
btn4.addEventListener("click", function () {
    storagePrice.innerText = "100";
    updateTotal()
});
const btn5 = document.getElementById("storage3");
btn5.addEventListener("click", function () {
    storagePrice.innerText = "180";
    updateTotal()
});
// button click for shipping or delivery charge
const btn6 = document.getElementById("shipping1");
btn6.addEventListener("click", function () {
    shippingPrice.innerText = "0";
    updateTotal()
});
const btn7 = document.getElementById("shipping2");
btn7.addEventListener("click", function () {
    shippingPrice.innerText = "20";
    updateTotal()
});
//const total = document.getElementById("totalPrice");
//const bestPrice = document.getElementById("bestPrice");
//const best = Number(bestPrice.value);/