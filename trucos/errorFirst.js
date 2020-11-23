function asincrona(cb){
    setTimeout(function(){
        try {
            let a = 3 + z;
            cb(null, a);
        }catch(err){
            cb(err);
        }
    }, 1000)
}
asincrona((err, dato)=>{
    if(err){
        console.error('tenemos un error');
        console.error(err)
        return false
        // throw err; // no va a funcionar
    }

    console.log('todo a ido bien mi data es:', dato);
});