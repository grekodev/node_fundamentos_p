const http = require('http');

function router(req, res){
    console.log('nueva peticion');
    console.log(req.url);
    
    switch(req.url){
        case '/hola':
            res.write('hola que tal')
            res.end();
        break;
        default:
            res.write('error 404: No se lo que quieres');
            res.end();
    }
    
 /*    res.writeHead(201,{'Content-Type': 'text/plain'});
    //Escribir repuesta al usuario
    res.write('hola yac usar http de nodejs');
    res.end(); */
}

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');