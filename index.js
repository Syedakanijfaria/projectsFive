// update total
function updateTotal() {
    //console.log(memoryPrice.innerText, storagePrice.innerText, shippingPrice.innerText);
    const shipping = Number(shippingPrice.innerText);
    const storage = Number(storagePrice.innerText);
    const memory = Number(memoryPrice.innerText);
    const grandTotal = 1299 + memory + storage + shipping;
    document.getElementById("totalPrice").innerText = grandTotal;
    document.getElementById("discountPrice").innerText = grandTotal;
    // apply promo button
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.addEventListener("click", function () {
        const discount = document.getElementById("discount").value;
        const TotalPrice = document.getElementById("totalPrice").innerText;
        const TotalPriceNumber = parseFloat(TotalPrice);
        if (discount == "stevekaku") {
            const discountPromo = (TotalPriceNumber * 20) / 100;
            const discountPrice = TotalPriceNumber - discountPromo;
            document.getElementById("discountPrice").innerText = discountPrice;
            document.getElementById("discount").value = "";
            //discount.disable = true;
        }
    });
}

// button click for memory----------------------------------
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
// button click for storage------------------------------------
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
// button click for shipping or delivery charge-----------------------------
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