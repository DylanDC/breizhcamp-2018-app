var Service = require('./service');
var readline = require('readline');

class Ihm {
    constructor() {
        this.service = new Service();
        this.lg = console.log;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.saisie = 0;
    }

    init() {

        this.lg(`
            *************************
            1. Rafraichir les données
            2. Lister les sessions
            99. Quitter
            *************************`)

        this.rl.question('Choix  ? : ', saisie => {

            switch (saisie) {
                case '1':
                    this.service.init()
                    this.lg('... Données mises à jour')

                    break;

                case '2':
                    this.service.listerService().forEach(session => lg(session.name, " (" + session.speakers + ")\n"));


                    break;

                case '99':
                    this.lg('Aurevoir !')

                    break;

                default:
                    this.lg("Erreur de saisie !");

            }

            this.rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible


        });

        menu();
    }

};
//remplacement du switch **********A FAIR*********
/* function menu(choix){

} */
module.exports = Ihm;