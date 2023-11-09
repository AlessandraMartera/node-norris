const http = require("http");
const {sum, loadStringNorris, loadAjaxgNorris} = require("./utilities.js");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const url = "https://api.chucknorris.io/jokes/random";
require('dotenv').config()
const fs = require('fs');
/*
const serverAsync = http.createServer((req, res) => {
  loadAjaxData((users) => {
    const html = [];

    html.push("<ul>");

    for (const {name:{firstname, lastname}} of users) {
      html.push(`<li>${firstname + " " + lastname}</li>`);
    }

    html.push("</ul>");

   

    res.end(html.join(""));
  });
});
*/

http
    .createServer(function (req, res) {
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        // const jokes = [];
        
        fetch(`https://api.chucknorris.io/jokes/random`)
            .then(response => response.json())
            .then(data => {
                console.log(data.value)

            res.end(`<h1>${data.value}</h1>`)
    
            
            // jokes.push(data.value);

            const jsonToAdd = JSON.stringify(data.value)
          
            // scrittura file
            fs.appendFile("myData.json", jsonToAdd,
            function (err) {
            if (err) throw err;

            console.log("Saved!");});
        });
        

        
       
       
 })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
        console.log(`Server avviato su ${serverUrl}`);
        
 });

