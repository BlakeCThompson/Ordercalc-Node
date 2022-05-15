import SeasonalRates from "./models/SeasonalRates";
import Tier from "./models/TierClass";
import BillingPolicy from "./models/BillingPolicy";

const express = require('express');

const app = express();

const port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Welcome to the order calculator!</h1>')
})

let summer = new SeasonalRates(
  'Summer',
  ["JUNE","JULY","AUGUST","SEPTEMBER"],
  [new Tier(0,400,9.0279), new Tier(400, Infinity, 11.7210)])

let nonSummer = new SeasonalRates("Non-Summer",["OCTOBER","NOVEMBER","DECEMBER","JANUARY","FEBRUARY","MARCH","APRIL","May"],
[new Tier(0,400,7.9893), new Tier(400, Infinity, 10.3725)])


var billingPolicy = new BillingPolicy([summer,nonSummer])

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

app.get('/calculateSavings', function(req,res){
  let kwhUsed = req.query.kWh_used
  let kwhGenerated = req.query.kWh_generated
  let month = req.query.month ?? months[new Date().getMonth()]
  let powerCompany = "RMP_UTAH"
  let usageData = new UsageData(kwhUsed,kwhGenerated,month)

  billingPolicy.

  res.setHeader('Content-Type','application/json')
  let z = x * y
  console.log(z)
  res.end('z =' + z)
})

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});

