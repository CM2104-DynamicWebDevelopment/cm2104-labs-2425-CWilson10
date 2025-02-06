var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node')

var spotifyApi = new SpotifyWebApi({
    clientId: '5d48a99a1bd648fb87628ed3473317d9',
    clientSecret: 'bc863329684f49d3860e8f5615426430'
});

app.use(express.static('public'))

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

async function getTracks(searchterm, res) {
    spotifyApi.searchTracks(searchterm)
        .then(function (data) {
            res.send(JSON.stringify(data.body));
        }, function (err) {
            console.error(err);
        });
}

app.get('/'
    , function (req, res) {
        res.send("Hello world! by express");
    });

app.get('/searchLove', function (req, res) {
    getTracks('love', res);
});
app.listen(8080);
