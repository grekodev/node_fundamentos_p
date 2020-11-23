function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Hola '+nombre);
            resolve(nombre);
        },1000);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('bla bla bla bla');
            reject('hay un error');
        },1000)
    });
    
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        },1000)
    });
  
}


// -- 
console.log('inciando el proceso...')
hola('Brayan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('terminado el proceso...')
    })
    .catch(error => {
        console.log(error)
    })