function otrafuncion(){
    serompe();
}

function serompe(){
    return 3 + z;
}

function seRompreAsincrona(cb){
    setTimeout(()=>{
        try{
            return 3 + z;
        }catch(err){
            console.error('error en mi funcion asincrona');
            cb(err)
        }
    },1000)
}

try{
    // otrafuncion();
    seRompreAsincrona((err)=>{
        console.log(err.message)
    });
}catch(err){
    console.error("vaya algo se rompio");
    console.error(err.message);
}
console.log("esto de aqui esta al final")