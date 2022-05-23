import SeasonalRatesInterface from "../interfaces/SeasonalRatesInterface";
import UsageDataInterface from "../interfaces/UsageDataInterface";
import SeasonalRates from "./SeasonalRates";
import { readFile, writeFile } from 'fs/promises';
import companyPolicies from "./CompanyPolicies/standardCompanyPolicies.json";
import BillingPolicyInterface from "../interfaces/BillingPolicyInterface";
import Tier from "./TierClass";
import TierInterface from "../interfaces/TierInterface";
class BillingPolicy implements BillingPolicyInterface{
    seasonalRatesArray:SeasonalRatesInterface[]
    name:string
    constructor(seasonalRatesArray:SeasonalRatesInterface[], name:string){
        this.seasonalRatesArray = seasonalRatesArray
        this.name = name
    }

    calculateBill(usageData:UsageDataInterface){
        let rates = this.getSeasonalRatesForGivenMonth(usageData.month)
        let amountPurchased = usageData.kwhPurchased
        let amountUsed = amountPurchased + (usageData.customerGeneratedKwh - usageData.customerExportedKwh)
        return rates.calculateBill(usageData)
    }

    getSeasonalRatesForGivenMonth(month:string){
        for (var seasonalRates of this.seasonalRatesArray){
            if (seasonalRates.includesMonth(month)){
                return seasonalRates
            }
        }
        throw Error("Month not found for " + month)
    }

    static GetPoliciesFromJson() {
        let policies:BillingPolicyInterface[] = []
        for (var policy of companyPolicies.policies){
            let seasonalRates:SeasonalRatesInterface[] = []
            for (var seasonalRate of policy.SeasonalRatesArray){
                let tiers:TierInterface[] = []
                for (var jsonTier of seasonalRate.tiers) {
                    var tier = new Tier(
                        jsonTier.inclusiveBeginKwh,
                        jsonTier.nonInclusiveEndKwh,
                        jsonTier.rate)
                    tiers.push(tier)
                }
                seasonalRates.push(new SeasonalRates(
                    seasonalRate.seasonName,
                    seasonalRate.inclusiveMonths,
                    tiers))
            }
            policies.push(new BillingPolicy(seasonalRates,policy.name))
        }
        return policies
    }


}
export default BillingPolicy