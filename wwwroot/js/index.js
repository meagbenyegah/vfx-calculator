const app = Vue.createApp({

    data() {
        return {
            currencies: []
        };
    },
    methods: {
        fetchCurrencies() {
            fetch('/api/visa/currencies')
                .then(response => response.json())
                .then(data => {
                    console.log('Currencies API response:', data);
                    this.currencies = data.result || data.Result || [];
                })
                .catch(error => {
                    console.error('Error fetching currencies:', error);
                    this.currencies = [];
                });
        }
    },
    mounted() {
        this.fetchCurrencies();
    }

});

app.mount('#app');