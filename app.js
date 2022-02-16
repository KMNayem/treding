const depositBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth');

const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');


// function get value from input box
function getInputValue(boxId) {
    let inputBox = document.getElementById(boxId);
    let inputAmmount = parseFloat(inputBox.value);
    if (isNaN(inputAmmount) || inputAmmount < 0) {
        inputBox.value = '';
        return alert('please inter valid number')
    }
    inputBox.value = '';
    return inputAmmount;
}


// update balance

depositBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let avaiableAmount = parseFloat(balanceField.innerText)
    let inputAmmount = getInputValue('deposit-box')
    if (inputAmmount > 0) {
        balanceField.innerText = inputAmmount + avaiableAmount;
    }
})

// let depositBox = document.getElementById('deposit-box');
// let avaiableBalance = parseFloat(balanceField.innerText)
// let inputAmmount = parseFloat(depositBox.value)

// if (isNaN(inputAmmount) || inputAmmount < 0) {
//     depositBox.value = '';
//     return alert('please inter valid number')
// }


// buy coin
buyBtc.addEventListener('click', function () {
    updateProtfolio('buy-btc')
})

buyEth.addEventListener('click', function () {
    updateProtfolio('buy-eth')
})


// update protfolio

function updateProtfolio(boxId) {
    let avaiableAmount = parseFloat(balanceField.innerText)
    let cointAmount = getInputValue(boxId)

    if (cointAmount > 0) {
        let totalExpense
        if (boxId == 'btc-box') {
            totalExpense = 10 * cointAmount;
            if (totalExpense > avaiableAmount) {
                return alert(' Not enough balance')
            }
            btcField.innerText = cointAmount
        }
        else if (boxId == 'eth-box') {
            totalExpense = 5 * cointAmount;
            if (totalExpense > avaiableAmount) {
                return alert(' Not enough balance');
            }
            ethField.innerText = cointAmount;
        }
        balanceField.innerText = avaiableAmount - totalExpense;
    }
}