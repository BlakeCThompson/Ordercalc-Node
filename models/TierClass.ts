import TierInterface from "../interfaces/TierInterface";
class Tier{
    inclusiveBeginKwh:number;
    nonInclusiveEndKwh:number;
    rate:number;
    constructor(inclusiveBeginKwh:number, nonInclusiveEndKwh:number|string, rate:number) {
        this.inclusiveBeginKwh = inclusiveBeginKwh;
        let validatedNonInclusiveEndKwh:number
        if (!Number.isInteger(nonInclusiveEndKwh)) {
          validatedNonInclusiveEndKwh = Number.POSITIVE_INFINITY
        }
        else {
          validatedNonInclusiveEndKwh = Number.parseInt(nonInclusiveEndKwh.toString())
        }
        this.nonInclusiveEndKwh = validatedNonInclusiveEndKwh;
        this.rate = rate
      }
}

export default Tier;
