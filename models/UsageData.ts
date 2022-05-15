class UsageData {
    kwhPurchased:number
    customerGeneratedKwh:number
    month:string
    constructor(kwhPurchased:number,customerGeneratedKwh:number,month:string){
        this.kwhPurchased = kwhPurchased
        this.customerGeneratedKwh = customerGeneratedKwh
        this.month = month
    }
}