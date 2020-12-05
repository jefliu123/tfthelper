const fetch = require('node-fetch');

const api_key = 'RGAPI-eeb6b636-843e-407d-9a8a-18304317dd96'; //UPDATE EVERYDAY

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

exports.apiRequest = function (url, param)
{
    
    const requestURL = url + param + '?api_key=' + api_key;

    return fetch(requestURL)
            //checks status
            .then(checkStatus)
            .then (function (response) 
            {
                return response.json();
            })
            .then (function (json) 
            {
                return json;
            })
            .catch(function(error)
            {
                console.log(error);
            });
};

exports.apiRequest2 = function (url, param)
{
    
    const requestURL = url + param + '/ids?count=20&api_key=' + api_key;

    return fetch(requestURL)
            //checks status
            .then(checkStatus)
            .then (function (response) 
            {
                return response.json();
            })
            .then (function (json) 
            {
                return json;
            })
            .catch(function(error)
            {
                console.log(error);
            });
};
    