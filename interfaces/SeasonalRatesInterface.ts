import TierInterface from "./TierInterface"

interface SeasonalRatesInterface {
    seasonName:string
    inclusiveMonths:string[]
    tiers:TierInterface[]
    calculateBill(usageData:UsageData):number
    includesMonth(month:string):boolean
}

export default SeasonalRatesInterface