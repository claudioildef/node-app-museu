dbConnection = "";
const {getPaintingsAllende} = require("../models/allende")

module.exports.allende = (app, req, res) => {
    console.log("Estamos no controller do Salvador Allende");
    getPaintingsAllende(dbConnection, (err,results) => {
        res.render("allende.ejs");
    })
}