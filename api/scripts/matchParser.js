var getRequester = require("./httpGetRequest");

getUserPuuid = function (summonerName) {
    return getRequester.apiRequest('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/', summonerName)
        .then(function (response) {
            return response.puuid;
        });
}

getMatchListFromPuuid = function (summonerPuuid) {
    return getRequester.apiRequest2('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/', summonerPuuid)
        .then(function (response) {
            return response;
        });
}

getPuuidAndMatchListFromName = function (summonerName) {
    return getUserPuuid(summonerName)
        .then(function(response) {
            var puuid = response;
            return getMatchListFromPuuid(response)
                .then(function(response) {
                    return [puuid, response];
                });
        });
}

getMatchInfo = function (matchId) {
    return getRequester.apiRequest('https://americas.api.riotgames.com/tft/match/v1/matches/', matchId)
        .then(function (response) {
            return response;
        });
}

/*
exports.getMostUsedCarries = function (summonerName) {
    return getPuuidAndMatchListFromName(summonerName)
        .then(function(response) {
            var puuid = response[0];
            let promises = [];
            for (i = 0; i < 10; i++) {
                promises.push(getMatchInfo(response[1][i]));
            }
            return Promise.all(promises).then(function(results) {
                let returnObj = {  };
                for (j = 0; j < 10; j++) {
                    let participantsList = results[j].info.participants
                    for (k = 0; k < 8; k++) {
                        let participant = participantsList[k];
                        if (participant.puuid == puuid) {
                            for (m = 0; m < participant.units.length; m++) {
                                let unit = participant.units[m];
                                if (unit.items.length > 1) {
                                    if (unit.character_id in returnObj) {
                                        returnObj[unit.character_id] += 1
                                    }
                                    else {
                                        returnObj[unit.character_id] = 1;
                                    }
                                }
                            }
                        }
                    }
                }
                return JSON.stringify(returnObj);
            });
        });
}
*/

exports.getMostUsedCarries = function (summonerName) {
    return getPuuidAndMatchListFromName(summonerName)
        .then(function(response) {
            var puuid = response[0];
            let promises = [];
            for (i = 0; i < 10; i++) {
                promises.push(getMatchInfo(response[1][i]));
            }
            return Promise.all(promises).then(function(results) {
                let returnObj = { champions: { } };
                for (j = 0; j < 10; j++) {
                    let participantsList = results[j].info.participants
                    for (k = 0; k < 8; k++) {
                        let participant = participantsList[k];
                        if (participant.puuid == puuid) {
                            for (m = 0; m < participant.units.length; m++) {
                                let unit = participant.units[m];
                                if (unit.items.length > 1) {
                                    if (unit.character_id in returnObj['champions']) {
                                        returnObj['champions'][unit.character_id]['freq'] += 1;
                                    }
                                    else {
                                        returnObj['champions'][unit.character_id] = { };
                                        returnObj['champions'][unit.character_id]['freq'] = 1;
                                        returnObj['champions'][unit.character_id]['items'] = { };
                                    }
                                    for (const item of unit.items) {
                                        if (item in returnObj['champions'][unit.character_id]['items']) {
                                            returnObj['champions'][unit.character_id]['items'][item] += 1;
                                        }
                                        else {
                                            returnObj['champions'][unit.character_id]['items'][item] = 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return JSON.stringify(returnObj);
            });
        });
}