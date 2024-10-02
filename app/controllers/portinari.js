const dbConnection = "";
const {getPaintingsPortinari} = require("../models/portinari")

module.exports.portinari = (app, req, res) => {
    console.log("Estamos no controller do Candido Portinari");
    getPaintingsPortinari(dbConnection, (error, results) => {
        res.render("portinari.ejs");
    })

}