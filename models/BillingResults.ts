import BillingResultsInterface from '../interfaces/BillingResultsInterface'
class BillingResults implements BillingResultsInterface {
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
    protected getAmountDueWithPanels() {
        return this.formatter.format(this.amountDueWithPanels)
    }

    protected getAmountDueWithoutPanels() {
        return this.formatter.format(this.amountDueWithoutPanels)
    }

    getFormattedDue() {
        return {
            withPanels:this.getAmountDueWithPanels(),
            withoutPanels: this.getAmountDueWithoutPanels()
        }
    }
}

export default BillingResults