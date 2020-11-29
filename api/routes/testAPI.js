var express = require("express");
var router = express.Router();

var matchParser = require("./matchParser");
var getRequester = require("./httpGetRequest");

router.get("/", function(req, res) {
    let summoner_name = req.query.summoner_name;
    
    /*
    getRequester.apiRequest('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/', summoner_name)
        .then(function(response) {
            res.status(200).send(response.puuid);
        })
        .catch(function(err) {
            res.send(err);
        });
    */

    ///*
    matchParser.getMostUsedCarries(summoner_name)
        .then(function(response) {
            res.status(200).send(response);
        })
        .catch(function(err) {
            res.send(err);
        });
    //*/
    
    /*
    res.status(200);
    console.log(matchParser.getMostUsedCarries(summoner_name));
    res.send(matchParser.getMostUsedCarries(summoner_name));
    res.end();
    */
    
});

module.exports = router;
