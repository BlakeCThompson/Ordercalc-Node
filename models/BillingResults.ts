class BillingResults {
    protected amountDueWithPanels:number
    protected amountDueWithoutPanels:number
    private formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      
    constructor(amountDueWithPanels:number,amountDueWithoutPanels:number){
        this.amountDueWithPanels = amountDueWithPanels
        this.amountDueWithoutPanels = amountDueWithoutPanels
    }
    getAmountDueWithPanels() {
        return this.formatter.format(this.amountDueWithPanels/100)
    }

    getAmountDueWithoutPanels() {
        return this.formatter.format(this.amountDueWithoutPanels/100)
    }

    getFormattedDue() {
        return {
            withPanels:this.getAmountDueWithPanels(),
            withoutPanels: this.getAmountDueWithoutPanels()
        }
    }
}

export default BillingResults