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
        //     console.log(data);
        // });

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

module.exports = {
    sum,
    loadStringNorris
   };
   