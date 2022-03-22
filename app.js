// Quantity Increse Deecres Function
function quantity(documentId, priceId,price,isAdding) {
    const inputValueTxt = document.getElementById(documentId)
    const inputValueString = inputValueTxt.value
    const inputValueNumber = parseInt(inputValueString)

    const priceField = document.getElementById(priceId)
    // const priceTxt = priceField.innerText
   

    if (isAdding  ==true && inputValueNumber >=0) {
        const newPlusInputValue = inputValueNumber + 1;
        return newPlusInputValue;
        // inputValueTxt.value = newPlusInputValue;
        // const newPrice = price * newPlusInputValue
        // priceField.innerText = newPrice  ;
    }
    else if (isAdding== false && inputValueNumber >0) {
        const newMinusInputValue = inputValueNumber - 1;
        return newMinusInputValue;
        // inputValueTxt.value = newMinusInputValue;
        // const dcresNewPrice = price * newMinusInputValue
        // priceField.innerText = dcresNewPrice;
    }
        inputValueTxt.value = newPlusInputValue;
        const newPrice = price * newMinusInputValue
        priceField.innerText = newPrice  ;
}

// update

document.getElementById("mobile-plus-btn").addEventListener("click", function () {
    // const inputValueTxt = document.getElementById("mobile-input-number")
    // const inputValueString = inputValueTxt.value
    // const inputValueNumber = parseInt(inputValueString)
    // const newInputValue = inputValueNumber + 1;
    // inputValueTxt.value = newInputValue;
   
    const mobileIncrese = quantity("mobile-input-number", "mobilePrice",1219,true)
})

document.getElementById("mobile-minus-btn").addEventListener("click", function () {
    
    const mobileIncrese = quantity("mobile-input-number", "mobilePrice",1219, false)

})