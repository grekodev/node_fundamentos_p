function hola(nombre,miCallback){
    setTimeout(function(){
        console.log('Hola '+nombre);
        miCallback();
    },1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla bla');
        callbackHablar();
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    },1000)
}

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre , --veces, callback);
        },1000)
    }else{
        adios(nombre, callback);
    }
}
// ..
console.log('Iniciando proceso');
hola('Brayan', function(nombre){
    conversacion(nombre, 3, function(){
        console.log("proceso terminado");
    });
})
// hola('Brayan',function(){
//     hablar(function(){
//         hablar(function(){
//             adios('Brayan', function(){
//                 console.log('Terminando proceso');
//             });
//         })
//     })
// });