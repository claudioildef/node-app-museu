const {home} = require("../controllers/home");
const {tarsila} = require("../controllers/tarsila");
const {allende} = require("../controllers/allende");
const {portinari} = require("../controllers/portinari");


module.exports = {
    home: (app) => {
        app.get("/", function(req,res){
            home(app,req,res);
        })
    },

    tarsila: (app) => {
        app.get("/tarsila", function(req,res){
            tarsila(app,req,res);
        })
    },

    allende: (app) => {
        app.get("/allende", function(req,res){
            allende(app,req,res);
        })
    },

    portinari: (app) => {
        app.get("/portinari", function(req,res){
            portinari(app,req,res);
        })
    },

}