document.addEventListener("DOMContentLoaded", function() {
    const initialCurrencySelect = document.getElementById("ICurrency");
    const finalCurrencySelect = document.getElementById("FCurrency");
    const initialFlagImg = document.querySelector("#Currency1 img");
    const finalFlagImg = document.querySelector("#Currency2 img");
    const exchangeRate = 1.35;

    // Event listener to change the initial flat
    initialCurrencySelect.addEventListener("change", function() {
        const selectedCurrency = initialCurrencySelect.value;
        changeFlag(initialFlagImg, selectedCurrency);
    });

    // Event listener to change the final flat
    finalCurrencySelect.addEventListener("change", function() {
        const selectedCurrency = finalCurrencySelect.value;
        changeFlag(finalFlagImg, selectedCurrency);
    });

    // Function to change the flag according to the selection
    function changeFlag(imgElement, currency) {
        if (currency === "USD") {
            imgElement.src = "./media/img/US.png";
            imgElement.alt = "USA Flag";
        } else if (currency === "CAD") {
            imgElement.src = "./media/img/CAD.png";
            imgElement.alt = "Canada Flag";
        }
    }

    const arrowButton = document.querySelector("#Arrows button");
    arrowButton.addEventListener("click", function() {

        //Interchange the values in the inputs
        const tempamount = amountInput.value;
        amountInput.value = finalAmountInput.value;
        finalAmountInput.value = tempamount; 

        // Exchange the flags images
        const tempInitialFlag = initialFlagImg.src;
        initialFlagImg.src = finalFlagImg.src;
        finalFlagImg.src = tempInitialFlag;

        // Exchange the currencies selected
        const tempInitialCurrency = initialCurrencySelect.value;
        initialCurrencySelect.value = finalCurrencySelect.value;
        finalCurrencySelect.value = tempInitialCurrency;
    });

    const amountInput = document.getElementById("amount");
    const finalAmountInput = document.getElementById("Finalamount");
    const converterBtn = document.getElementById("Convert"); 

    finalAmountInput.disabled = true;

    // Event when the convert button is clicked
    converterBtn.addEventListener('click', function() {
        Datavalidation();
        CalculateConversion();

    });

    // function to validate the input of the data 
    function Datavalidation() {
        if (amountInput.value <0 || amountInput.value ===""){
            alert("Enter a valid Amount!");
        }
    }
    
    // function to calculate the conversion
    function CalculateConversion() {
        if(initialCurrencySelect.value === "USD" && finalCurrencySelect.value === "CAD")
        {
            finalAmountInput.value = amountInput.value*exchangeRate.toFixed(3); 
        }
        else if (initialCurrencySelect.value === "CAD" && finalCurrencySelect.value === "USD") 
        {
            finalAmountInput.value = (amountInput.value/exchangeRate).toFixed(3);
        }
        else {
            alert("Choose correct currencies!!")
        }
    }

});
