import SeasonalRatesInterface from "../interfaces/SeasonalRatesInterface"
import TierInterface from "../interfaces/TierInterface"
import BillingResults from "./BillingResults"
import UsageData from "./UsageData"

class SeasonalRates implements SeasonalRatesInterface{
    seasonName:string
    inclusiveMonths:string[]
    solarBuybackRate:number
    tiers:TierInterface[]
    constructor(seasonName:string, inclusiveMonths:string[], tiers:TierInterface[], buyBackRate:number = 0){
      this.seasonName = seasonName
      this.inclusiveMonths = inclusiveMonths
      this.tiers = tiers
      this.validateTiers()
      this.solarBuybackRate = buyBackRate
    }
    
    validateTiers(){
        let firstTierBegins = this.tiers[0].inclusiveBeginKwh
        if(firstTierBegins != 0){
          throw Error(this.seasonName + "'s first Tier does not begin with zero")
        }
        let previousTier = null
        for(var tier of this.tiers){
          if(!previousTier){
            previousTier = tier
            continue
          }
          if (previousTier.nonInclusiveEndKwh != tier.inclusiveBeginKwh){
            throw Error("Tier " + this.tiers.indexOf(previousTier) + " is not followed by a consecutive tier" )
          }
          previousTier = tier
        }
        return true
      }
    
      includesMonth(month:string) {
        return this.inclusiveMonths.findIndex(element => {
          return element.toLowerCase() === month.toLowerCase();
        }) != -1;
      }

      calculateBill(usageData:UsageData){
        let dueWithPanels = this.calculateSimpleBill(usageData.kwhPurchased) - this.calculateBuybackAmount(usageData.customerExportedKwh)
        let kwhPurchasedWithoutPanels = usageData.kwhPurchased + 
        (usageData.customerGeneratedKwh - usageData.customerExportedKwh)
        let dueWithoutPanels = this.calculateSimpleBill(kwhPurchasedWithoutPanels)
        return new BillingResults(dueWithPanels, dueWithoutPanels)
      }
      calculateSimpleBill(kwh:number){
        let totalDue = 0
        for (var tier of this.tiers){
          let amountInThisTier = 0
          if (kwh >= tier.inclusiveBeginKwh && kwh < tier.nonInclusiveEndKwh){
            amountInThisTier = (kwh - tier.inclusiveBeginKwh)
          }
          else if (kwh >= tier.nonInclusiveEndKwh){
            amountInThisTier = tier.nonInclusiveEndKwh - tier.inclusiveBeginKwh
          }
          if (amountInThisTier <= 0){
            break
          }
          totalDue += tier.rate * amountInThisTier
        }
        return totalDue
      }

      calculateBuybackAmount(kwhExported:number) {
        return kwhExported * this.solarBuybackRate
      }
}
export default SeasonalRates;