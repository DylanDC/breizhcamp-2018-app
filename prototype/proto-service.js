var service = require('../service')
var request = require('request')
service.init(function(nb) {
    console.log('[init]', nb, 'sessions trouvées.')
});
// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

exports.init = function (callback) {

    // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
    // Envoie de la requête http
    // GET /conference/ HTTP/1.1
    request('http://www.breizhcamp.org/conference/', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); } 
        // body contient les données récupérées
        console.log('Ok', body);
    });
    //GET /conference/programme/ HTTP/1.1
    request('http://www.breizhcamp.org/conference/programme/', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); } 
        // body contient les données récupérées
        console.log('Ok', body);
        });
    //GET /conference/speakers/ HTTP/1.1
    request('http://www.breizhcamp.org/conference/speakers/', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); } 
        // body contient les données récupérées
        console.log('Ok', body);
    });
    //GET /conference/toutlereste/ HTTP/1.1
    request(' http://www.breizhcamp.org/conference/toutlereste/', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }
    // body contient les données récupérées
    console.log('Ok', body);
    });
    



    // TODO     => une fois les données récupérées, alimenter la variable talks

    // TODO         => invoquer la callback avec le nombre de sessions récupérées

};