const fetch = require('node-fetch');

const api_key = 'RGAPI-76de0247-e288-4af3-a1dd-57e5585e1c68';

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
    