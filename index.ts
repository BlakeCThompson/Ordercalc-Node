import SeasonalRates from "./models/SeasonalRates";
import Tier from "./models/TierClass";
import BillingPolicy from "./models/BillingPolicy";
import UsageData from "./models/UsageData";

import express from "express";
import BillingResults from "./models/BillingResults";


const app:express = express();

const port = 3000

app.get('/', function(req, res){
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Welcome to the order calculator!</h1>')
})

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

app.get('/calculateSavings', function(req,res){
  let kwhUsed = Number.parseInt(req.query.kWh_used ?? 0)
  let kwhGenerated = Number.parseInt(req.query.kWh_generated ?? 0)
  let kwhExported = Number.parseInt(req.query.kWh_exported ?? 0)
  let month = req.query.month ?? months[new Date().getMonth()]
  let powerCompany = "RMP_UTAH"
  let policy = BillingPolicy.GetPoliciesFromJson().find(policy=>policy.name == powerCompany)
  let customerGeneratedAndUsedKwh = kwhGenerated - kwhExported
  let usageData = new UsageData(kwhUsed,kwhGenerated,kwhExported,month)
  let due = policy.calculateBill(usageData)

  res.setHeader('Content-Type','application/json')
  res.end(JSON.stringify(due.getFormattedDue()))
})

app.get('/companies', function(req,res){

  res.setHeader('Content-Type','application/json')
  res.end(JSON.stringify(BillingPolicy.GetPoliciesFromJson()))
})


app.listen(port, function() {
	console.log(`listening on port ${port}`);
});

