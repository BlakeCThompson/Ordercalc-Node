class UsageData {
    kwhPurchased:number
    customerGeneratedKwh:number
    customerExportedKwh:number
    month:string
    constructor(kwhPurchased:number,customerGeneratedKwh:number,customerExportedKwh:number,month:string){
        this.kwhPurchased = kwhPurchased
        this.customerGeneratedKwh = customerGeneratedKwh
        this.customerExportedKwh = customerExportedKwh
        this.month = month
    }
}
export default UsageData