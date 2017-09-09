Node.js API frontend for the Yobit Crypto Currency Exchange
===============

Note: This repository is a fork of Nick Addison's OKCoin API Wrapper (another bitcoin exchange).  

Example: (thanks kril-k)
```javascript
var Yobit = require('yobit');

// Test public data APIs
var publicClient = new Yobit();

// get trades defaulting to BTCUSD
publicClient.getTrades(console.log, 'btc_usd', 2);
//null { btc_usd:
//   [ { type: 'bid',
//       price: 4792.55,
//       amount: 0.00083461,
//       tid: 133972806,
//       timestamp: 1504791536 },
//     { type: 'bid',
//       price: 4792.49,
//       amount: 0.00208659,
//       tid: 133972796,
//       timestamp: 1504791524 } ] }

// get BTCUSD and ETHUSD ticker
publicClient.getTicker(console.log, 'btc_usd-eth_usd');
//null { btc_usd:
//   { high: 4800.31688093,
//     low: 4631.69467983,
//     avg: 4716.00578038,
//     vol: 219359.18861277,
//     vol_cur: 46.56299584,
//     last: 4779,
//     buy: 4751,
//     sell: 4779,
//     updated: 1504788221 },
//  eth_usd:
//   { high: 355,
//     low: 335.24600049,
//     avg: 345.12300024,
//     vol: 106157.35039798,
//     vol_cur: 309.93220681,
//     last: 342.21476841,
//     buy: 341.3,
//     sell: 342.21476841,
//     updated: 1504788306 } }

// get BTCUSD, ETHUSD and ETHBTC order book
publicClient.getOrderBook(console.log, 'btc_usd-eth_btc-eth_rur', 1);
//null { btc_usd: { asks: [ [Array] ], bids: [ [Array] ] },
//  eth_btc: { asks: [ [Array] ], bids: [ [Array] ] },
//  eth_rur: { asks: [ [Array] ], bids: [ [Array] ] } }```
