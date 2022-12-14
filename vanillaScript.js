const initialPrice = document.querySelector("#Buy-price");
const currentPrice = document.querySelector("#Sell-price");
const stockQuantity = document.querySelector("#quantity");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function profitOrLoss(initial, quantity, current){
    if(initial < current){
        var profit = (current - initial) * quantity;
        var profitPercent = (profit/initial) * 100;

        shoMmessage(`Heyyy, the profit is ${profit} and the profit-percent is ${profitPercent}%`, 1);
    }
    else if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercent = (loss/initial) * 100;

        shoMmessage(`Heyyy, the loss is ${loss} and the loss-percent is ${lossPercent}%`, -1);
    }
    else{
        shoMmessage("No pain No gain, No gain No pain", 0);
    }
}

function calProfitOrLoss(){
    var initial = Number(initialPrice.value);
    var current = Number(currentPrice.value);
    var quantity = Number(stockQuantity.value);

    profitOrLoss(initial, quantity, current);
}

function shoMmessage(message, status){
    switch (status) {
        case -1:
            output.innerText = message;
            output.style.color = "#FFFF00"
            break;

        case 1:
            output.innerText = message;
            output.style.color = "#FFFF00"
            break;
    
        default:
            output.innerText = message;
            output.style.color = "#f1f5f9"
            break;
    }
}
checkBtn.addEventListener("click", calProfitOrLoss);