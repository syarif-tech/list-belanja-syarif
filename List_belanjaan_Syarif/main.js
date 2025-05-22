import { Tampilin } from './utils.js';
let listBelanja = ['Tomat','Kelapa','Apel','Durian','Orang'];
try {
    console.log("List Belanja : ");
    Tampilin(listBelanja);  
    listBelanja.forEach((belanjaan) => console.log((belanjaan)));
} catch (error) {
    console.log(error.message);
}