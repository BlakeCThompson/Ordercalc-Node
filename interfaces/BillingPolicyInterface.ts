import SeasonalRates from "../models/SeasonalRates"
import UsageData from "../models/UsageData"
import SeasonalRatesInterface from "./SeasonalRatesInterface"
import BillingResultsInterface from "./BillingResultsInterface"

interface BillingPolicyInterface {
    baseHookupFee:number
    seasonalRatesArray:SeasonalRatesInterface[]
    name:string
    calculateBill(usageData:UsageData):BillingResultsInterface
}

export default BillingPolicyInterface