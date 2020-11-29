var getRequester = require("./httpGetRequest");

getUserPuuid = function (summonerName) {
    //console.log(summonerName);

    return getRequester.apiRequest('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/', summonerName)
        .then(function (response) {
            //console.log("getUserInfo: ");
            //console.log(response);
            return response.puuid;
        });
}

getMatchListFromPuuid = function (summonerPuuid) {
    //console.log("PUUID INPUT: ");
    //console.log(summonerPuuid);

    return getRequester.apiRequest2('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/', summonerPuuid)
        .then(function (response) {
            //console.log("getMatchListFromPuuid: ");
            //console.log(response);
            return response;
        });
}

getPuuidAndMatchListFromName = function (summonerName) {

    return getUserPuuid(summonerName)
        .then(function(response) {
            var puuid = response;
            //console.log("return getUserInfo: ");
            //console.log(response);
            //console.log("return getMatchListfromPuuid(response.puuid): ");
            //console.log(getMatchListFromPuuid(response.puuid));
            return getMatchListFromPuuid(response)
                .then(function(response) {
                    //console.log("getMatchListFromName: ");
                    //console.log(response)
                    return [puuid, response];
                });
        });
}

getMatchInfo = function (matchId) {
    return getRequester.apiRequest('https://americas.api.riotgames.com/tft/match/v1/matches/', matchId)
        .then(function (response) {
            //console.log("getMatchInfoFromName: ");
            //console.log(response);
            return response;
        });
}

/*
exports.getMostUsedCarries = function (summonerName) {
    return getPuuidAndMatchListFromName(summonerName)
        .then(function(response) {
            //console.log(response);
            var puuid = response[0];
            getMatchInfo(response[1][0])
                .then(function(response) {
                    //console.log(response.info.participants)
                    let returnObj = {  };
                    let participantsList = response.info.participants
                    for (i = 0; i < 8; i++) {
                        let participant = participantsList[i];
                        if (participant.puuid == puuid) {
                            //console.log(participant);
                            for (j = 0; j < participant.units.length; j++) { //CHANGE 8 TO PARTICPANTS.UNITS.LETNGH
                                let unit = participant.units[j];
                                if (unit.items.length > 1) {
                                    //console.log(unit);
                                    if (unit.character_id in returnObj) {
                                        returnObj[unit.character_id] += 1
                                    }
                                    else {
                                        returnObj[unit.character_id] = 1;
                                    }
                                    //console.log(returnObj);
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
            //console.log(response);
            var puuid = response[0];
            return getMatchInfo(response[1][0])
                .then(function(response) {
                    //console.log(response.info.participants)
                    let returnObj = {  };
                    let participantsList = response.info.participants
                    for (i = 0; i < 8; i++) {
                        let participant = participantsList[i];
                        if (participant.puuid == puuid) {
                            //console.log(participant);
                            for (j = 0; j < participant.units.length; j++) { //CHANGE 8 TO PARTICPANTS.UNITS.LETNGH
                                let unit = participant.units[j];
                                if (unit.items.length > 1) {
                                    //console.log(unit);
                                    if (unit.character_id in returnObj) {
                                        returnObj[unit.character_id] += 1
                                    }
                                    else {
                                        returnObj[unit.character_id] = 1;
                                    }
                                    //console.log(returnObj);
                                }
                            }
                        }
                    }
                    return JSON.stringify(returnObj);
                });
        });
}