const FIXED_RATE = 1.95583;

const priceInput = document.getElementById('priceEur');
const bgnInput = document.getElementById('paidBgn');
const eurInput = document.getElementById('paidEur');
const resultDisplay = document.getElementById('resultDisplay');
const clearBtn = document.getElementById('clearBtn');

function updateCalculator() {
    const priceEur = parseFloat(priceInput.value) || 0;
    const paidBgn = parseFloat(bgnInput.value) || 0;
    const paidEur = parseFloat(eurInput.value) || 0;

    if (priceEur === 0 && paidBgn === 0 && paidEur === 0) {
        resultDisplay.innerText = "Тук ще се показва твоето ресто";
        resultDisplay.style.background = "linear-gradient(135deg, #009688 0%, #004a99 100%)";
        return;
    }

    // Всичко в евро за по-лесно изчисление
    const totalPaidInEur = paidEur + (paidBgn / FIXED_RATE);
    const changeInEur = totalPaidInEur - priceEur;

    if (changeInEur < 0) {
        resultDisplay.innerText = `Недостигат: ${Math.abs(changeInEur).toFixed(2)} €`;
        resultDisplay.style.background = "#d32f2f";
    } else {
        resultDisplay.innerText = `Върни ресто: ${changeInEur.toFixed(2)} €`;
        resultDisplay.style.background = "linear-gradient(135deg, #009688 0%, #004a99 100%)";
    }
}

[priceInput, bgnInput, eurInput].forEach(input => {
    input.addEventListener('input', updateCalculator);
});

clearBtn.addEventListener('click', () => {
    priceInput.value = '';
    bgnInput.value = '';
    eurInput.value = '';
    updateCalculator();
});
