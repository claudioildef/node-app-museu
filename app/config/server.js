let express = require('express'); // O express retorna uma função

let app = express(); //express é uma função. 
let port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set('views', './app/views');
app.use(express.static('./app/public'))

app.listen(port);
console.log("server port", port);

module.exports = app;