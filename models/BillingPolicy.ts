import SeasonalRatesInterface from "../interfaces/SeasonalRatesInterface";
import UsageDataInterface from "../interfaces/UsageDataInterface";
import SeasonalRates from "./SeasonalRates";

class BillingPolicy {
    seasonalRatesArray:SeasonalRatesInterface[]

    constructor(seasonalRatesArray:SeasonalRatesInterface[]){
        this.seasonalRatesArray = seasonalRatesArray
    }

    calculateBill(usageData:UsageDataInterface){
        let rates = this.getSeasonalRatesForGivenMonth(usageData.month)
        let amountPurchased = usageData.kwhPurchased
        let amountUsed = amountPurchased + (usageData.customerGeneratedKwh - usageData.customerExportedKwh)
        let amountDue = rates.calculateBill(usageData)

    }

    getSeasonalRatesForGivenMonth(month:string){
        for (var seasonalRates of this.seasonalRatesArray){
            if (seasonalRates.includesMonth(month)){
                return seasonalRates
            }
        }
        throw Error("Month not found for " + month)
    }
}
export default BillingPolicy