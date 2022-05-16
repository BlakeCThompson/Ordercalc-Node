import UsageData from "../models/UsageData"
import TierInterface from "./TierInterface"

interface SeasonalRatesInterface {
    seasonName:string
    inclusiveMonths:string[]
    tiers:TierInterface[]
    validateTiers():boolean
    calculateBill(usageData:UsageData):BillingResultsInterface
    calculateSimpleBill(kwh:number):number
    includesMonth(month:string):boolean
}

export default SeasonalRatesInterface