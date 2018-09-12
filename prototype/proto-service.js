var Service = require('../service')
lg = console.log
/* //avec un callback
service.init(function (nb) {
    console.log('[init]', nb, 'sessions trouvées.')
}); */
//equivalent promesse
const service = new Service();
const result$ = service.init();
result$
    .then(nb => {
        console.log('[init]', nb, 'session trouvées.')
        service.listerService().forEach(session => lg(session.name, " (" + session.speakers + ")\n"));

        service.listerPresentateurs().forEach(element => lg(" Presentateur(s) : " + element));


    })
    .catch(err => console.log(err))


