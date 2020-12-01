const fetch = require('node-fetch');

const api_key = 'RGAPI-ce08ebd6-8807-4678-8e8f-8bdf3a7d9796'; //UPDATE EVERYDAY

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
    