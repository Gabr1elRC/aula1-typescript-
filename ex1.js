"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
var prompt = promptSync();
const numero = Number(prompt('digite um numero : '));
const ant1 = numero - 1;
const ant2 = numero - 2;
console.log(`sucessores = ${numero + 1},${numero + 2}/nAntecessores = ${ant1},${ant2}`);
