let suma = 0;
let suma2 = 0;
console.time('todo')
console.time('bucle');
for (let i =0; i < 10000000; i++){
    suma += 1;
}
console.timeEnd('bucle');

console.time('asincrono');
console.log('empieza el proceso asincrono')
asincrona().then(()=>{
    console.timeEnd('asincrono')
})

console.time('bucle2');
for (let j =0; j < 10000000; j++){
    suma2 += 1;
}
console.timeEnd('bucle2');




console.timeEnd('todo')

function asincrona(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono ');
            resolve();
        },1000);
    })
}
