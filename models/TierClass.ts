import TierInterface from "../interfaces/TierInterface";
class Tier{
    inclusiveBeginKwh:number;
    nonInclusiveEndKwh:number;
    rate:number;
    constructor(inclusiveBeginKwh:number, nonInclusiveEndKwh:number, rate:number) {
        this.inclusiveBeginKwh = inclusiveBeginKwh;
        this.nonInclusiveEndKwh = nonInclusiveEndKwh;
        this.rate = rate
      }
}

export default Tier;
