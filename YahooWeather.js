//  **DOCUMENTATION** - https://developer.yahoo.com/weather/documentation.html#oauth-nodejs

// ***MY API KEY INFO***
// App ID
// sWd3P15c
// Client ID (Consumer Key)
// dj0yJmk9YWpXOVV1NzBscTA1JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWY2
// Client Secret (Consumer Secret)
// 079584ac86de7dd619f269d556841255786e8797

// ----------------------------------------------------------------------------------------

// Require node-oauth package: npm install oauth
// Copyright 2019 Oath Inc. Licensed under the terms of the zLib license see https://opensource.org/licenses/Zlib for terms.

var OAuth = require('oauth');
var header = {
    "Yahoo-App-Id": "sWd3P15c"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9YWpXOVV1NzBscTA1JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWY2',
    '079584ac86de7dd619f269d556841255786e8797',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=losangeles,ca&format=json',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            var parsedData = JSON.parse(data);
            // We need to parse the string data to object JSON
            
            console.log(data)
            // We could get any specific key by accessing it like parsedData["key"]["NestedKey"]...goes on
        }
    }
);