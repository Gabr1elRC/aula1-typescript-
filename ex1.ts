import promptSync = require ('prompt-sync');
var prompt = promptSync();

const numero : number = Number(prompt('digite um numero : '));
const ant1 : number = numero -1;
const ant2: number = numero -2;
console.log(`sucessores = ${numero+1},${numero+2}/nAntecessores = ${ant1},${ant2}`);


