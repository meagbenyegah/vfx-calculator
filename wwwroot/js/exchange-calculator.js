// Currency data
const CURRENCIES = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'GHS', name: 'Ghanaian Cedi' },
    { code: 'NGN', name: 'Nigerian Naira' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'INR', name: 'Indian Rupee' }
];

// Default values
const DEFAULT_VALUES = {
    amount: 100,
    fromCurrency: 'USD',
    toCurrency: 'GHS',
    transactionDate: new Date().toLocaleDateString('en-US'),
    bankFee: 2
};

// Form elements
let form, amountInput, fromCurrencySelect, toCurrencySelect;
let swapBtn, editDateAndFeeBtn, saveDateAndFeeBtn, calculateBtn, resetBtn;
let dateAndFeeDisplay, dateAndFeeEdit, resultsSection;
let displayDate, displayFee, transactionDateInput, bankFeeInput;

// Initialize the form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    populateCurrencySelects();
    setDefaultValues();
    bindEventHandlers();
});

function initializeElements() {
    form = document.getElementById('fxCalculatorForm');
    amountInput = document.getElementById('amount');
    fromCurrencySelect = document.getElementById('fromCurrency');
    toCurrencySelect = document.getElementById('toCurrency');

    swapBtn = document.getElementById('swapCurrencies');
    editDateAndFeeBtn = document.getElementById('editDateAndFee');
    saveDateAndFeeBtn = document.getElementById('saveDateAndFee');
    calculateBtn = document.getElementById('calculateBtn');
    resetBtn = document.getElementById('resetBtn');

    dateAndFeeDisplay = document.getElementById('dateAndFeeDisplay');
    dateAndFeeEdit = document.getElementById('dateAndFeeEdit');
    resultsSection = document.getElementById('resultsSection');

    displayDate = document.getElementById('displayDate');
    displayFee = document.getElementById('displayFee');
    transactionDateInput = document.getElementById('transactionDate');
    bankFeeInput = document.getElementById('bankFee');
}

function populateCurrencySelects() {
    // Clear existing options except the first placeholder
    fromCurrencySelect.innerHTML = '<option value="">From</option>';
    toCurrencySelect.innerHTML = '<option value="">To</option>';

    // Add currency options
    CURRENCIES.forEach(currency => {
        const option1 = new Option(`${currency.code} - ${currency.name}`, currency.code);
        const option2 = new Option(`${currency.code} - ${currency.name}`, currency.code);
        fromCurrencySelect.appendChild(option1);
        toCurrencySelect.appendChild(option2);
    });
}

function setDefaultValues() {
    amountInput.value = DEFAULT_VALUES.amount;
    fromCurrencySelect.value = DEFAULT_VALUES.fromCurrency;
    toCurrencySelect.value = DEFAULT_VALUES.toCurrency;
    transactionDateInput.value = DEFAULT_VALUES.transactionDate;
    bankFeeInput.value = DEFAULT_VALUES.bankFee;

    updateDisplayValues();
}

function updateDisplayValues() {
    displayDate.textContent = transactionDateInput.value;
    displayFee.textContent = bankFeeInput.value;
}

function bindEventHandlers() {
    swapBtn.addEventListener('click', swapCurrencies);
    editDateAndFeeBtn.addEventListener('click', editDateAndFee);
    saveDateAndFeeBtn.addEventListener('click', saveDateAndFee);
    form.addEventListener('submit', handleFormSubmit);
    resetBtn.addEventListener('click', resetForm);

    // Info popovers
    document.querySelectorAll('.fx-info-popover').forEach(popover => {
        popover.addEventListener('click', showInfoPopover);
    });
}

function swapCurrencies() {
    const fromValue = fromCurrencySelect.value;
    const toValue = toCurrencySelect.value;

    fromCurrencySelect.value = toValue;
    toCurrencySelect.value = fromValue;

    clearErrors();
}

function editDateAndFee() {
    dateAndFeeDisplay.style.display = 'none';
    dateAndFeeEdit.style.display = 'block';
}

function saveDateAndFee() {
    updateDisplayValues();
    dateAndFeeDisplay.style.display = 'flex';
    dateAndFeeEdit.style.display = 'none';
}

async function handleFormSubmit(e) {
    e.preventDefault();

    clearErrors();

    const formData = {
        amount: parseFloat(amountInput.value),
        fromCurrency: fromCurrencySelect.value,
        toCurrency: toCurrencySelect.value,
        transactionDate: transactionDateInput.value,
        bankFee: parseFloat(bankFeeInput.value)
    };

    // Validate form
    if (!validateForm(formData)) {
        return;
    }

    // Show calculating state
    setCalculatingState(true);

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const result = calculateExchangeRate(formData);
        displayResults(result);
    } catch (error) {
        console.error('Calculation error:', error);
        showError('An error occurred during calculation. Please try again.');
    } finally {
        setCalculatingState(false);
    }
}

function validateForm(data) {
    let isValid = true;

    // Validate amount
    if (!data.amount || data.amount < 0.01) {
        showFieldError('amount', 'Please enter a valid amount (minimum 0.01)');
        isValid = false;
    }

    // Validate currencies
    if (!data.fromCurrency) {
        showFieldError('fromCurrency', 'Please select a currency');
        isValid = false;
    }

    if (!data.toCurrency) {
        showFieldError('toCurrency', 'Please select a currency');
        isValid = false;
    }

    if (data.fromCurrency && data.toCurrency && data.fromCurrency === data.toCurrency) {
        showFieldError('toCurrency', 'From and To currencies must be different');
        isValid = false;
    }

    // Validate transaction date
    if (!data.transactionDate) {
        showFieldError('transactionDate', 'Please enter a transaction date');
        isValid = false;
    }

    // Validate bank fee
    if (data.bankFee < 0 || data.bankFee > 100) {
        showFieldError('bankFee', 'Bank fee must be between 0 and 100%');
        isValid = false;
    }

    return isValid;
}

function calculateExchangeRate(data) {
    // Mock exchange rate calculation
    const baseRate = getExchangeRate(data.fromCurrency, data.toCurrency);
    const markup = 0.025; // 2.5% markup
    const bankFeeDecimal = data.bankFee / 100;

    const finalRate = baseRate * (1 + markup);
    const convertedAmount = data.amount * finalRate;
    const feeAmount = convertedAmount * bankFeeDecimal;
    const totalAmount = convertedAmount + feeAmount;

    return {
        fromAmount: data.amount,
        fromCurrency: data.fromCurrency,
        toCurrency: data.toCurrency,
        baseRate: baseRate,
        finalRate: finalRate,
        markup: markup * 100,
        convertedAmount: convertedAmount,
        feeAmount: feeAmount,
        totalAmount: totalAmount,
        bankFee: data.bankFee
    };
}

function getExchangeRate(from, to) {
    // Mock exchange rates (in real app, this would come from an API)
    const rates = {
        'USD-GHS': 12.50,
        'USD-EUR': 0.85,
        'USD-GBP': 0.73,
        'USD-NGN': 760.00,
        'USD-CAD': 1.35,
        'USD-AUD': 1.52,
        'USD-JPY': 149.50,
        'USD-CNY': 7.25,
        'USD-INR': 83.20,
        'EUR-USD': 1.18,
        'GBP-USD': 1.37,
        // Add more rates as needed
    };

    const key = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;

    if (rates[key]) {
        return rates[key];
    } else if (rates[reverseKey]) {
        return 1 / rates[reverseKey];
    } else {
        // Default rate if not found
        return 1.0;
    }
}

function displayResults(result) {
    const exchangeRateDisplay = document.getElementById('exchangeRateDisplay');
    const markupDisplay = document.getElementById('markupDisplay');
    const rateDetail1 = document.getElementById('rateDetail1');
    const rateDetail2 = document.getElementById('rateDetail2');

    exchangeRateDisplay.textContent =
        `1 ${result.fromCurrency} = ${result.finalRate.toFixed(4)} ${result.toCurrency}`;

    markupDisplay.textContent =
        `Includes ${result.markup.toFixed(2)}% Visa markup`;

    rateDetail1.textContent =
        `${result.fromAmount} ${result.fromCurrency} = ${result.convertedAmount.toFixed(2)} ${result.toCurrency}`;

    rateDetail2.textContent =
        `Bank fee (${result.bankFee}%): ${result.feeAmount.toFixed(2)} ${result.toCurrency} | Total: ${result.totalAmount.toFixed(2)} ${result.toCurrency}`;

    resultsSection.style.display = 'block';
}

function setCalculatingState(isCalculating) {
    const calculateText = document.getElementById('calculateText');
    const calculatingText = document.getElementById('calculatingText');

    if (isCalculating) {
        calculateText.style.display = 'none';
        calculatingText.style.display = 'inline';
        calculateBtn.disabled = true;
    } else {
        calculateText.style.display = 'inline';
        calculatingText.style.display = 'none';
        calculateBtn.disabled = false;
    }
}

function resetForm() {
    form.reset();
    setDefaultValues();
    clearErrors();
    resultsSection.style.display = 'none';
    dateAndFeeDisplay.style.display = 'flex';
    dateAndFeeEdit.style.display = 'none';
}

function showFieldError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    const inputElement = document.getElementById(fieldName);

    if (errorElement) {
        errorElement.textContent = message;
    }

    if (inputElement) {
        inputElement.classList.add('error');
    }
}

function clearErrors() {
    document.querySelectorAll('.fx-error').forEach(error => {
        error.textContent = '';
    });

    document.querySelectorAll('.fx-input, .fx-select').forEach(input => {
        input.classList.remove('error');
    });
}

function showError(message) {
    alert(message); // In a real app, you'd use a better notification system
}

function showInfoPopover(e) {
    const title = e.currentTarget.dataset.title;
    const content = e.currentTarget.dataset.content;

    // Simple alert for now - in a real app you'd use a proper popover component
    alert(`${title}\n\n${content}`);
}