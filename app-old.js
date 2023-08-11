
const http = require('http');

http.createServer((req,res) => {

    //res.writeHead(200, { 'Content-Type': 'text/plain'});

    // res.writeHead(200, { 'Content-Type': 'application/json'});
    // const persona = {
    //     id :1,
    //     nombre: 'Diego'
    // }
    // res.write(JSON.stringify(persona));

    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv'});

    // res.write('id, Nombre\n');
    // res.write('1, Diego\n');
    // res.write('2, Nanda\n');
    // res.write('3, Alejandra\n');


    

    res.write('Hola mundo!\n');
    
    res.end();



})
.listen(9090);

console.log('Servidor escucnado en el puerto 9090');

