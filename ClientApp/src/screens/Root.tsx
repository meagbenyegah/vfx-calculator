import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import logoImage from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CurrencyCombobox } from "@/components/CurrencyCombobox";
import { InfoPopover } from "@/components/InfoPopover";
import {
  DUMMY_CURRENCIES,
  FEATURED_CURRENCIES,
  DEFAULT_VALUES,
} from "@/constants/dummy";
import {
  calculateExchangeRate,
  formatCurrency,
  type ExchangeRateResult,
} from "@/util/functions";

const exchangeRateSchema = z
  .object({
    amount: z
      .number({ message: "Amount is required" })
      .min(0.01, "Please use a positive number"),
    fromCurrency: z.string().min(1, "Please choose valid currency"),
    toCurrency: z.string().min(1, "Please choose valid currency"),
    transactionDate: z.string().min(1, "Transaction date is required"),
    bankFee: z
      .number({ message: "Bank fee is required" })
      .min(0, "Bank fee cannot be negative")
      .max(100, "Bank fee cannot exceed 100%"),
  })
  .refine((data) => data.fromCurrency !== data.toCurrency, {
    message: "From and To currencies must be different",
    path: ["toCurrency"],
  })
  .refine((data) => data.fromCurrency !== "" && data.toCurrency !== "", {
    message: "Please select both currencies",
    path: ["toCurrency"],
  });

type ExchangeRateForm = z.infer<typeof exchangeRateSchema>;

export default function Root() {
  const [result, setResult] = useState<ExchangeRateResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isEditingDateAndFee, setIsEditingDateAndFee] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ExchangeRateForm>({
    resolver: zodResolver(exchangeRateSchema),
    defaultValues: {
      amount: DEFAULT_VALUES.amount,
      fromCurrency: DEFAULT_VALUES.fromCurrency,
      toCurrency: DEFAULT_VALUES.toCurrency,
      transactionDate: DEFAULT_VALUES.transactionDate,
      bankFee: DEFAULT_VALUES.bankFee,
    },
  });

  const fromCurrency = watch("fromCurrency");
  const toCurrency = watch("toCurrency");

  const swapCurrencies = () => {
    setValue("fromCurrency", toCurrency);
    setValue("toCurrency", fromCurrency);
  };

  const onSubmit = async (data: ExchangeRateForm) => {
    setIsCalculating(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const calculationResult = calculateExchangeRate(data);
      setResult(calculationResult);
    } catch (error) {
      console.error("Calculation error:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleReset = () => {
    reset();
    setResult(null);
    setIsEditingDateAndFee(false);
  };

  const handleEditDateAndFee = () => {
    setIsEditingDateAndFee(true);
  };

  const handleSaveDateAndFee = () => {
    setIsEditingDateAndFee(false);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <div
        className="h-full w-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/dist/bg.svg')" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
        <section className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <img
              src={logoImage}
              alt="Access Bank (Ghana) PLC"
              className="w-[10rem] h-10 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Exchange Rate Calculator
            </h1>
            <p className="text-gray-600">
              Use the converter below to get an indication of the rate you may
              receive when using your Visa card to pay while traveling
              internationally.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Amount you paid
                </label>
                <InfoPopover
                  title="AMOUNT YOU PAID"
                  content="Enter the transaction amount in the original currency. This should be the amount you actually paid or will pay for your purchase."
                />
              </div>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("amount", { valueAsNumber: true })}
                className={errors.amount ? "border-red-500" : ""}
              />
              {errors.amount && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <span className="text-red-500">⚠</span>
                  {errors.amount.message}
                </p>
              )}
            </div>

            {/* Currency Selection */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Currencies to exchange
                </label>
                <InfoPopover
                  title="CURRENCIES TO EXCHANGE"
                  content="Select the currency of the transaction and then the currency for conversion. Use the swap button to quickly exchange the From and To currencies."
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <CurrencyCombobox
                    currencies={DUMMY_CURRENCIES}
                    featuredCurrencies={FEATURED_CURRENCIES}
                    value={fromCurrency}
                    onValueChange={(value) => setValue("fromCurrency", value)}
                    placeholder="From"
                    error={!!errors.fromCurrency}
                  />
                  {errors.fromCurrency && (
                    <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                      <span className="text-red-500">⚠</span>
                      {errors.fromCurrency.message}
                    </p>
                  )}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={swapCurrencies}
                  className="rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </Button>

                <div className="flex-1">
                  <CurrencyCombobox
                    currencies={DUMMY_CURRENCIES}
                    featuredCurrencies={FEATURED_CURRENCIES}
                    value={toCurrency}
                    onValueChange={(value) => setValue("toCurrency", value)}
                    placeholder="To"
                    error={!!errors.toCurrency}
                  />
                  {errors.toCurrency && (
                    <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                      <span className="text-red-500">⚠</span>
                      {errors.toCurrency.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Date and Bank Fee Display/Edit */}
            {!isEditingDateAndFee ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">
                      Date <strong>{watch("transactionDate")}</strong>, Bank fee
                      (%) <strong>{watch("bankFee")}%</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleEditDateAndFee}
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Transaction Date Input */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Transaction date (MM/DD/YYYY)
                    </label>
                    <InfoPopover
                      title="TRANSACTION DATE"
                      content="Enter a transaction date in the last 12 months. This helps determine the exchange rate that would have been applied at that time."
                    />
                  </div>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="MM/DD/YYYY"
                      {...register("transactionDate")}
                      className={errors.transactionDate ? "border-red-500" : ""}
                    />
                    <Button type="button" variant="outline" size="icon">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </Button>
                  </div>
                  {errors.transactionDate && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="text-red-500">⚠</span>
                      {errors.transactionDate.message}
                    </p>
                  )}
                </div>

                {/* Bank Fee Input */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Bank fee (%)
                    </label>
                    <InfoPopover
                      title="BANK FEE"
                      content="Processing fee charged by your bank or financial institution. 2% is an average bank rate, but fees vary so check with your bank for their bank fee rate."
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      max="100"
                      {...register("bankFee", { valueAsNumber: true })}
                      className={errors.bankFee ? "border-red-500" : ""}
                    />
                    <span className="text-gray-600">%</span>
                  </div>
                  {errors.bankFee && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="text-red-500">⚠</span>
                      {errors.bankFee.message}
                    </p>
                  )}
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={handleSaveDateAndFee}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={isCalculating}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {isCalculating ? "Calculating..." : "Calculate Conversion"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="px-6"
              >
                Reset
              </Button>
            </div>
          </form>

          {/* Results */}
          {result && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {formatCurrency(1, fromCurrency)} ={" "}
                  {formatCurrency(result.rate, toCurrency)}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  % Mark-up over European Central Bank Rate ={" "}
                  {result.markUpPercentage}
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    {formatCurrency(1, fromCurrency)} ={" "}
                    {formatCurrency(result.rate, toCurrency)}
                  </p>
                  <p>
                    {formatCurrency(1, toCurrency)} ={" "}
                    {formatCurrency(result.inverseRate, fromCurrency)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-8 text-xs text-gray-500 leading-relaxed">
            <p>
              As of April 2021, VisaNet introduced an enhancement to currency
              conversion by applying the foreign exchange rate available at the
              time of the authorization for purposes of clearing and settlement.
              If for any reason, Visa is not able to use the exchange rate from
              authorization for currency conversion, Visa will apply the
              exchange rate available at the time of the processing of the
              transaction. Your bank may or may not use the rate indicated by
              this calculator to bill you and may impose additional fees for
              foreign transactions. If your transaction is converted by the
              merchant or ATM operator, the exchange rate indicated by this
              calculator will not apply.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
