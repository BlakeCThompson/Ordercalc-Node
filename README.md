Run 

```
npm install -g ts-node
```
then, to start the server, from the project root, run 

```
ts-node index.ts
```

To make a request to the API for a solar calculation, you must provide 
1. kWh_used: an integer for the number of kwh the customer purchased
2. kwh_generated: the total number of kwh the customer generated from their system
3. kwh_exported: the number of kwh the customer generated, but didn't use locally
```
 curl 'localhost:3000/calculateSavings?kWh_used=3&kWh_generated=0&kwh_exported=0'
```

The return value is the amount the customer would pay with panels, along with a number indicating how much they would pay without panels.
```
{"amountDueWithPanels":23.9679,"amountDueWithoutPanels":0}
```

