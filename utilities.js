// test
function sum(num1, num2){
   return num1+num2
}

const fs = require('fs');
const path = require("path");

function loadStringNorris(){

    const pathData = path.join(__dirname, "myDAta.json")

     // lettura file
        // fs.readFile( pathData, function(err, data) {
        //     // const norrisString = ;
        //     const stringNorris = JSON.parse(data.toString());
        //     return stringNorris;
        // });
        
    // altro tipo di lettura file
        try {
            /**
             * @type {string}
             */
            const norrisString = fs.readFileSync(pathData, "utf-8");
        
            // Converto la stringa in un array di oggetti
            return JSON.parse(norrisString);
          } catch (err) {
            console.log(err.message);
        
            return [];
        }

}

function loadAjaxgNorris(){
    const url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
        .then(response => response.json())
        .then((data) => 
        data.value);

}

module.exports = {
    sum,
    loadStringNorris,
    loadAjaxgNorris
   };
   