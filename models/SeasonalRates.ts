import TierInterface from "../interfaces/TierInterface"

class SeasonalRates {
    seasonName:string
    inclusiveMonths:string[]
    tiers:TierInterface[]
    constructor(seasonName, inclusiveMonths, tiers){
      this.seasonName = seasonName
      this.inclusiveMonths = inclusiveMonths
      this.tiers = tiers
      this.validateTiers()
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

      calculateBill(kwh:number){
        let remainingKwhToBeBilled = kwh
        let totalDue = 0
        for (var tier of this.tiers){
          let amountInThisTier = Math.min((kwh - tier.inclusiveBeginKwh),tier.nonInclusiveEndKwh) 
          if (amountInThisTier <= 0){
            break
          }
          totalDue += tier.rate * amountInThisTier
        }
        return totalDue
      }
}
export default SeasonalRates;