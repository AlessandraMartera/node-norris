const http = require("http");
const {sum, loadStringNorris} = require("./utilities.js");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const url = "https://api.chucknorris.io/jokes/random";
require('dotenv').config()


http
    .createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Hello World!");
 })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
        console.log(`Server avviato su ${serverUrl}`);
        
        // console.log(loadStringNorris());
        loadStringNorris().forEach(element => {
            console.log("frase n")
            console.log(element);
        });

 });

