// import z node pakiet http
const http = require("http");

//import ustawienia z pliku app servera
const app = require("./app");

//ustaw port serwera
const port = process.env.PORT || 3000;

// TWÓRZ SERWER
const server = http.createServer(app);

// odpalam serwer
server.listen(port);
