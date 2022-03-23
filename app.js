// Quantity Increse Deecres Function
function quantity(documentId, priceId, price, isAdding) {
    const inputValueTxt = document.getElementById(documentId)
    const inputValueString = inputValueTxt.value
    const inputValueNumber = parseInt(inputValueString)

    const priceField = document.getElementById(priceId)

    let newInputValue = 0;

    if (isAdding == true && inputValueNumber >= 0) {
        newInputValue = inputValueNumber + 1;

    }
    else if (isAdding == false && inputValueNumber > 0) {
        newInputValue = inputValueNumber - 1;

    }
    inputValueTxt.value = newInputValue;
    const newPrice = price * newInputValue
    priceField.innerText = newPrice;

       subTotal()

}

function subTotal() {

    // SubTotal Section
    const subTotalField = document.getElementById("subTotalId");
    const mobilePriceString = document.getElementById("mobilePrice")
    const casePriceString = document.getElementById("casePrice")
    const casePrice = parseFloat(casePriceString.innerText)
    const mobilePrice = parseFloat(mobilePriceString.innerText)
    const subtotal = casePrice + mobilePrice;
    subTotalField.innerText = subtotal;


// Tax Section
    const taxAmountTxt = document.getElementById("taxId")
    
    const taxAmount = Math.ceil((subtotal / 100) * 5);
    taxAmountTxt.innerText = taxAmount;

    // Total Amount
    const totalField = document.getElementById("totalId")
    totalField.innerText = taxAmount + subtotal;

}

document.getElementById("checkOutId").addEventListener("click",function () {
    // const modal = document.getElementById("modal")
    document.getElementById("paymentDiv").style.display ="block";
    console.log("ok")
   
})

// update Quantity

document.getElementById("mobile-plus-btn").addEventListener("click", function () {
    quantity("mobile-input-number", "mobilePrice", 1219, true)
})

document.getElementById("mobile-minus-btn").addEventListener("click", function () {
    quantity("mobile-input-number", "mobilePrice", 1219, false)

})
document.getElementById("case-plus-btn").addEventListener("click", function () {
    quantity("case-input-number", "casePrice", 59, true)
})

document.getElementById("case-minus-btn").addEventListener("click", function () {
    quantity("case-input-number", "casePrice", 59, false)
})
