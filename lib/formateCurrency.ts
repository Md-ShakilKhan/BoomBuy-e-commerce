export function formateCurrency(
    amount: number,
    currencyCode: string = "bdt",
): string {
    try {
        return new Intl.NumberFormat("en-BD", {
            style: "currency",
            currency: currencyCode.toUpperCase(),
        }).format(amount)
    } catch (error) {
        console.log("Invalid currency code:", currencyCode, error);
        return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`
    }
}