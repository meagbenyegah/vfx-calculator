export interface ExchangeRateParams {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  bankFee: number;
  transactionDate: string;
}

export interface ExchangeRateResult {
  convertedAmount: number;
  rate: number;
  markUpPercentage: number;
  inverseRate: number;
  amountAfterFee: number;
}

// Dummy exchange rates (in real app, these would come from an API)
const DUMMY_RATES: Record<string, Record<string, number>> = {
  USD: {
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.5,
    CAD: 1.35,
    AUD: 1.52,
    CHF: 0.88,
    CNY: 7.25,
    SEK: 10.8,
    NZD: 1.62,
    MXN: 17.2,
    SGD: 1.35,
    HKD: 7.82,
    NOK: 10.9,
    TRY: 30.1,
    RUB: 92.5,
    INR: 83.2,
    BRL: 5.12,
    ZAR: 18.7,
    KRW: 1315.0,
    TWD: 31.5,
    THB: 35.8,
    MYR: 4.7,
    IDR: 15500,
    PHP: 56.2,
    VND: 24000,
    PKR: 280.5,
    BDT: 110.2,
    LKR: 325.8,
    NPR: 133.2,
    DKK: 6.9,
    PLN: 4.0,
    CZK: 22.8,
    HUF: 360.5,
    RON: 4.6,
    BGN: 1.8,
    HRK: 6.9,
    RSD: 108.2,
    UAH: 36.8,
    BYN: 3.2,
    MDL: 18.1,
    GEL: 2.7,
    AMD: 405.2,
    AZN: 1.7,
    KZT: 450.8,
    KGS: 89.2,
    TJS: 10.9,
    UZS: 12000,
    TMT: 3.5,
    AED: 3.67,
    SAR: 3.75,
    QAR: 3.64,
    KWD: 0.31,
    BHD: 0.38,
    OMR: 0.38,
    JOD: 0.71,
    LBP: 15000,
    ILS: 3.7,
    EGP: 30.9,
    MAD: 10.1,
    TND: 3.1,
    DZD: 134.5,
    LYD: 4.8,
    ETB: 55.2,
    KES: 130.8,
    UGX: 3700,
    TZS: 2500,
    NGN: 1600,
    GHS: 12.1,
    XOF: 600,
    XAF: 600,
    ARS: 850,
    CLP: 950,
    COP: 4100,
    PEN: 3.7,
    UYU: 39.2,
    VES: 36.2,
    BOB: 6.9,
    PYG: 7300,
    GTQ: 7.8,
    HNL: 24.7,
    NIO: 36.8,
    CRC: 520,
    PAB: 1.0,
    DOP: 56.2,
    JMD: 155.8,
    TTD: 6.8,
    BBD: 2.0,
    XCD: 2.7,
    ISK: 140.2,
    MKD: 56.8,
    ALL: 94.2,
    BAM: 1.8,
    MNT: 3400,
    LAK: 21000,
    KHR: 4100,
    MMK: 2100,
    BND: 1.35,
    FJD: 2.2,
    PGK: 3.8,
    SBD: 8.4,
    TOP: 2.3,
    VUV: 120,
    WST: 2.7,
    XPF: 110,
    AWG: 1.8,
    BMD: 1.0,
    KYD: 0.83,
    BZD: 2.0,
    GYD: 209,
    SRD: 37.8,
    BWP: 13.6,
    SZL: 18.7,
    LSL: 18.7,
    NAD: 18.7,
    MWK: 1700,
    ZMW: 25.2,
    BIF: 2850,
    DJF: 178,
    KMF: 450,
    RWF: 1300,
    SCR: 13.5,
    SOS: 570,
    AOA: 830,
    CDF: 2750,
    GMD: 67.2,
    GNF: 8600,
    LRD: 190,
    MRO: 36.2,
    SLL: 22000,
    STD: 22000,
  },
  EUR: {
    USD: 1.08,
    GBP: 0.86,
    JPY: 162.5,
    CAD: 1.47,
    AUD: 1.65,
    CHF: 0.96,
    CNY: 7.88,
    SEK: 11.7,
    NZD: 1.76,
    MXN: 18.7,
    SGD: 1.47,
    HKD: 8.45,
    NOK: 11.8,
    TRY: 32.7,
    RUB: 100.5,
    INR: 90.4,
    BRL: 5.56,
    ZAR: 20.3,
    KRW: 1429.0,
  },
  GBP: {
    USD: 1.27,
    EUR: 1.16,
    JPY: 189.2,
    CAD: 1.71,
    AUD: 1.92,
    CHF: 1.11,
    CNY: 9.18,
    SEK: 13.6,
    NZD: 2.05,
    MXN: 21.8,
    SGD: 1.71,
    HKD: 9.84,
    NOK: 13.7,
    TRY: 38.1,
    RUB: 117.0,
    INR: 105.2,
    BRL: 6.48,
    ZAR: 23.6,
    KRW: 1664.0,
  },
  JPY: {
    USD: 0.0067,
    EUR: 0.0062,
    GBP: 0.0053,
    CAD: 0.009,
    AUD: 0.0101,
    CHF: 0.0059,
    CNY: 0.0485,
    SEK: 0.072,
    NZD: 0.0108,
    MXN: 0.115,
    SGD: 0.009,
    HKD: 0.0523,
    NOK: 0.073,
    TRY: 0.201,
    RUB: 0.619,
    INR: 0.556,
    BRL: 0.0342,
    ZAR: 0.125,
    KRW: 8.8,
  },
};

export function calculateExchangeRate(
  params: ExchangeRateParams
): ExchangeRateResult {
  const { amount, fromCurrency, toCurrency, bankFee } = params;

  // Get the exchange rate
  let rate = 1.0;
  if (fromCurrency === toCurrency) {
    rate = 1.0;
  } else if (
    DUMMY_RATES[fromCurrency] &&
    DUMMY_RATES[fromCurrency][toCurrency]
  ) {
    rate = DUMMY_RATES[fromCurrency][toCurrency];
  } else if (DUMMY_RATES[toCurrency] && DUMMY_RATES[toCurrency][fromCurrency]) {
    // Calculate inverse rate
    rate = 1 / DUMMY_RATES[toCurrency][fromCurrency];
  } else {
    // Fallback for unknown currency pairs
    rate = 0.85 + Math.random() * 0.3;
  }

  // Calculate amount after bank fee
  const amountAfterFee = amount * (1 - bankFee / 100);

  // Calculate converted amount
  const convertedAmount = amountAfterFee * rate;

  // Calculate mark-up percentage (dummy calculation)
  const markUpPercentage = 2.29; // This would be calculated based on real ECB rates

  // Calculate inverse rate
  const inverseRate = 1 / rate;

  return {
    convertedAmount: parseFloat(convertedAmount.toFixed(6)),
    rate: parseFloat(rate.toFixed(6)),
    markUpPercentage,
    inverseRate: parseFloat(inverseRate.toFixed(6)),
    amountAfterFee: parseFloat(amountAfterFee.toFixed(2)),
  };
}

export function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  // Convert MM/DD/YYYY to a more readable format
  const [month, day, year] = dateString.split("/");
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
