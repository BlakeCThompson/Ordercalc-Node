import SeasonalRates from "../models/SeasonalRates"
import UsageData from "../models/UsageData"

interface BillingPolicyInterface {
    seasonalRatesArray:SeasonalRates[]
    name:string
    calculateBill(usageData:UsageData):BillingResultsInterface
}

export default BillingPolicyInterface