class BillingResults {
    amountDueWithPanels:number
    amountDueWithoutPanels:number
    constructor(amountDueWithPanels:number,amountDueWithoutPanels:number){
        this.amountDueWithPanels = amountDueWithPanels
        this.amountDueWithoutPanels = amountDueWithoutPanels
    }
}

export default BillingResults