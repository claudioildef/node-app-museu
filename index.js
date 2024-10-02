let app = require("./app/config/server");

let routes = require("./app/routes/routes");

routes.home(app);
routes.tarsila(app);
routes.allende(app);
routes.portinari(app);