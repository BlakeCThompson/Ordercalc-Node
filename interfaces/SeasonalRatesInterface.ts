import UsageData from "../models/UsageData"
import TierInterface from "./TierInterface"
import BillingResultsInterface from "./BillingResultsInterface"

interface SeasonalRatesInterface {
    seasonName:string
    inclusiveMonths:string[]
    tiers:TierInterface[]
    validateTiers():boolean
    solarBuybackRate:number
    calculateBuybackAmount(kwh:number):number
    calculateBill(usageData:UsageData):BillingResultsInterface
    calculateSimpleBill(kwh:number):number
    includesMonth(month:string):boolean
}

export default SeasonalRatesInterface