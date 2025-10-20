const app = Vue.createApp({
    data() {
        return {
            currencies: [],
            responseCode: "",
            responseMessage: "",
            fromCurrencyCode: "",
            toCurrencyCode: "",
            amount: "",
            fxResult: null,
            sourceAmount: "",
            sourceCurrencyName: "",
            destinationCurrencyName: "",
            fxError: "",
            loading: false // Track loading state
        };
    },
    computed: {
        fromCurrency() {
            return this.currencies.find(c => c.code === this.fromCurrencyCode) || {};
        },
        toCurrency() {
            return this.currencies.find(c => c.code === this.toCurrencyCode) || {};
        }
    },
    methods: {
        fetchCurrencies() {
            fetch('/api/visa/currencies')
                .then(response => response.json())
                .then(data => {
                    this.currencies = data.result || [];
                    this.responseCode = data.responseCode;
                    this.responseMessage = data.responseMessage;
                })
                .catch(error => {
                    this.currencies = [];
                });
        },
        switchCurrencies() {
            const temp = this.fromCurrencyCode;
            this.fromCurrencyCode = this.toCurrencyCode;
            this.toCurrencyCode = temp;
        },
        isValidConversion() {
            return (
                this.amount &&
                !isNaN(this.amount) &&
                Number(this.amount) > 0 &&
                this.fromCurrencyCode &&
                this.toCurrencyCode
            );
        },
        convertFX() {
            if (!this.isValidConversion()) {
                alert("Please enter a valid amount and select both currencies.");
                return;
            }
            this.loading = true;
            const payload = {
                destinationCurrencyCode: this.toCurrency.code,
                sourceAmount: String(this.amount),
                sourceCurrencyCode: this.fromCurrency.code
            };
            fetch('/api/visa/fx-rate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                console.log('FX Conversion Response:', data);
                this.responseCode = data.responseCode;
                this.responseMessage = data.responseMessage;
                if (this.responseCode === "00") {
                    this.sourceAmount = String(this.amount);
                    this.sourceCurrencyName = this.fromCurrency.shortName;
                    this.destinationCurrencyName = this.toCurrency.shortName;
                    this.fxResult = data.result;
                    this.fxError = "";
                } else {
                    this.fxResult = null;
                    this.fxError = this.responseMessage || "Conversion failed.";
                }
            })
            .catch(error => {
                alert("An error occurred while converting currency.");
                this.fxResult = null;
                this.fxError = "An error occurred while converting currency.";
            })
            .finally(() => {
                this.loading = false;
            });
        },
        resetForm() {
            this.amount = "";
            this.fromCurrencyCode = "";
            this.toCurrencyCode = "";
            this.fxResult = null;
            this.fxError = "";
        }
    },
    mounted() {
        this.fetchCurrencies();
    }
});

app.mount('#app');