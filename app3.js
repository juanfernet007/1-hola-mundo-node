//veremos si se imprime como lo esperamos... ejecutemos y analicemos
console.log("Inicio Programa"); //se espera se imprima de 1ro

setTimeout( () => {
    console.log('Primer timeout'); //se espera que se imprima de ultimo
}, 3000);

setTimeout( () => {
    console.log("Segundo timeout"); //se espera que se imprima de 2do
}, 0);

setTimeout(()=>{
    console.log('Tercer timeout'); //se espera que se imprima de 3ro
},0);

console.log("Fin Programa"); //se espera que se imprima de 4to