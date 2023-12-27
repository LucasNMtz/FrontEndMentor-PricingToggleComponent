const toggleButton = document.getElementById("toggle-button");
const toggleButtonDisc = document.querySelector(".toggle-button-disc");
const prices = document.querySelectorAll(".price-span");

setTimeout(()=>{
    price.classList.toggle("price-span-toggle");
}, 3)

toggleButton.addEventListener("click", ()=>{
    toggleButtonDisc.classList.toggle("toggle-button-disc-monthly");

    if(toggleButtonDisc.classList.contains("toggle-button-disc-monthly")) togglePrices("$19.99", "$24.99", "$39.99");
    else togglePrices("$199.99", "$249.99", "$399.99");

    prices.forEach((price)=>{
        price.classList.toggle("price-span-toggle");
        
        setTimeout(()=>{
            price.classList.toggle("price-span-toggle");
        }, 3)
    })
})

function togglePrices(basicPrice, professionalPrice, masterPrice){
    prices[0].textContent = basicPrice;
    prices[1].textContent = professionalPrice;
    prices[2].textContent = masterPrice;
}