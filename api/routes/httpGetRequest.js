const express = require('express');
const router = express.Router();
const app = express();
const fetch = require('node-fetch');

var api_key = 'RGAPI-7f0faac7-6a67-4abe-b226-5753ad36d95c';
var summoner_name = 'Derpiness'
const URL = 'https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/' + 'Derpiness' + '?api_key=' + api_key;



const data = {
    "id": "Nrw1MYkUFeA7Mj0mCPU7znxReL3Fj7tf9t5KNfqM6oDFM50",
    "accountId": "fLGkB9JQz1ddN6lrWJL4AWekUY8bfnOJgrCcRXfM8QxYrw",
    "puuid": "XCO8iXX3MFntUgNG3CHKeGwUAkCfM2YuxQ2N2tWeliM1BX_TDaKoVadReAp3HTwVb8JQm1pBa_MXVw",
    "name": "Derpiness",
    "profileIconId": 4658,
    "revisionDate": 1606336124000,
    "summonerLevel": 151
}

function checkStatus(res){
    if(res.status == 200)
    {
        return res;
    }
    else{
        var error = 'Failed to connect';
        throw error; 
    }
}
function getSummonerInfo()
{
    fetch(URL)
    .then(checkStatus)
    .then((res) =>res.json())
    .then((res)=> json())
    .then(json => {
        this.test = json;
        console.log(test);
    })
    .catch(function(error)
    {
        console.log(error);
    }

    )};
    