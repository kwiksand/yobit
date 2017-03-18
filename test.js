Yobit = require('./index.js')
let logResponse = {};

// Test public data APIs
var publicClient = new Yobit();

// get BTCUSD ticker
publicClient.getTicker(function(err,data){
    console.log(data);
    return true}, 'btc_usd');

// get BTCUSD Order Book
publicClient.getOrderBook(function(err,data){
    console.log(data);
    return true}, 'btc_usd');

// get BTCUSD trades
publicClient.getTrades(function(err,data){
    console.log(data);
    return true}, 'btc_usd');
