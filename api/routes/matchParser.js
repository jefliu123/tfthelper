var getRequester = require("./httpGetRequest");

exports.getMostUsedCarries = function (summonerName) {

    //return getRequester.apiRequest('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/', summonerName);

    /*
    getRequester.apiRequest('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/', summonerName)
        .then(function(response) {
            return response.puuid;
        })
        .catch(function(err) {
            console.log(err);
            return;
        });
    */

    /*
    var matchList;
    getRequester.apiRequest('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/', summonerPuuid)
        .then(function(response) {
            matchList = response;
        })
        .catch(function(err) {
            console.log(err);
            return;
        });
    return matchList;
    */


    /*
    var returnObj = {}

    let summonerInfo = JSON.parse(getRequester.apiRequest('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/', summonerName));
    let summonerPuuid = summonerInfo.puuid;
    let matchList = getRequester.apiRequest('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/', summonerPuuid);
    var matchID;
    for (matchID of matchList) {
        let matchInfo = JSON.parse(getRequester.apiRequest('https://americas.api.riotgames.com/tft/match/v1/matches/', matchID));
        let actualMatchInfo = JSON.parse(matchInfo.info);
        let participantsInfo = JSON.parse(actualMatchInfo.participants);
        for (participant of participantsInfo) {
            let participantInfo = JSON.parse(participant);
            if (participantInfo.puuid == summonerPuuid) {
                for (unit of participantInfo.units) {
                    let unitInfo = JSON.parse(unit);
                    if (unitInfo.items.length > 1) {
                        if (unitInfo.character_id in returnObj) {
                            returnObj[unitInfo.character_id] += 1;
                        }
                        else {
                            returnObj[unitInfo.character_id] = 1;
                        }
                    }
                }
            }
        }
    }
    return JSON.stringify(returnObj);
    */
}