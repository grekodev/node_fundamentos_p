process.on('beforeExit', ()=>{
    console.log('El proceso va a terminar')
});

process.on('uncaughtException', (err, origen)=>{
    console.log('vaya se nos olvido capturar un error');
    setTimeout(()=>{
        console.log('esto viene de las excepciones');
    },0)
    // console.error(err);
    console.error(origen);
})
// process.on('uncaughtRejection',)

process.on('exit', ()=>{
    console.log('El proceso acabo');
  
})

functionqueexiste();

// console.log('ESTO SI EL ERROR NOSE RECOGE NO SALE')