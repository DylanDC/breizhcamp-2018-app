/* 
// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')
// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];
var respReq = 0;



exports.init = function (callback) {
    //function compteur verifie si les 2 requet ont bien était recus avant d'executer callback
    function compteur() {
        respReq++
        if (respReq === 2) {
            callback(talks.length);
        }
    }


    // Envoie de la requête http
    request('http://www.breizhcamp.org/json/talks.json', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        talks = talks.concat(body)
        compteur()
    });

    request('http://www.breizhcamp.org/json/others.json', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        talks = talks.concat(body)
        compteur()
    });


};
exports.listerSessions = function (callback) {
    return talks
}
 */
var rp = require('request-promise-native');
const DATA_SOURCE_URLS = ['http://www.breizhcamp.org/json/talks.json', 'http://www.breizhcamp.org/json/others.json']
class Service {




    constructor() {
        this.talks = [];
    }

    init() {
        const reqs$ = DATA_SOURCE_URLS.map(url => rp(url, {
            json: true
        }));

        return Promise.all(reqs$).then(resultat => {
            resultat.forEach(r => { this.talks = this.talks.concat(r) });

            return this.talks.length;
        });


    }

    listerService() {

        return this.talks;
    }

    listerPresentateurs() {
        return this.talks.map(session => session.speakers)
    }
}

module.exports = Service;