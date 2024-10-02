const dbConnection = "";
const {getPaintings} = require("../models/home")

module.exports.home = (app, req, res) => {
    console.log("Estamos no controller da home");
    getPaintings(dbConnection, (error, results) => {
        res.render("home.ejs")
    })
}