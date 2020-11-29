var express = require("express");
var router = express.Router();

var matchParser = require("../scripts/matchParser");

router.get("/", function(req, res) {
    let summoner_name = req.query.summoner_name;
    
    matchParser.getMostUsedCarries(summoner_name)
        .then(function(response) {
            res.status(200).send(response);
        })
        .catch(function(err) {
            res.send(err);
        });
});

module.exports = router;
