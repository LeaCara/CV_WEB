/*jshint esversion: 6 */
const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");
const superheroes = require('superheroes');
//=> 'Spider-Ham'
const supervillains = require('supervillains');

console.log("Next fight: "+ superheroes.random() + " vs " + supervillains.random());
