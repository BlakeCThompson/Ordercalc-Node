import SeasonalRates from "../models/SeasonalRates"

interface BillingPolicyInterface {
    seasonalRatesArray:SeasonalRates[]
    calculateBill(usageData:UsageData):BillingResultsInterface
}

export default BillingPolicyInterface