//npm i express@4.17.1 
//git init

const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT; // 9090;

//> npm i dotenv@8.2.0  

//Handlebars
app.set('view engine', 'hbs');//para renderizar vistas
// hbs.registerPartials(__dirname + '/views/partials', function (err) {});
hbs.registerPartials(__dirname + '/views/partials');



//Middleware : Servir contenido estático
app.use(express.static('public')); //apunta  ala carpeta public para servir contenido estatico.
//http://localhost:9090/ abrira la index.html de public
//Como ya ejecutó la anterior, ls siguiente no se va ejecutar:
// app.get('/', (req, res) =>{
//   res.send('Home page!')
// });

/*
Si no existe public/hola-mundo/index.html,
entonces ejecuta lo siguiente en su lugar. 
La prioridad es de las carpetas.
*/
//>npm install hbs@4.1.1


app.get('/', (req, res) =>{
    res.render('home',{
        nombre: 'Diego Celery',
        titulo: 'Curso de Node'

    });//home.hbs. Podré enviarme parámetros desde el backend a la pagina para leerlos desde ella, el controlador.
});

app.get('/generic', (req, res) =>{
    res.render('generic',{
        nombre: 'Diego Celery',
        titulo: 'Curso de Node'

    })
});
app.get('/elements', (req, res) =>{
    res.render('elements',{
        nombre: 'Diego Celery',
        titulo: 'Curso de Node'

    })
});


// app.get('/generic', (req, res) =>{
//     res.sendFile(__dirname + '/public/generic.html')
// });
// app.get('/elements', (req, res) =>{
//     res.sendFile(__dirname + '/public/elements.html')
// });


app.get('/hola-mundo', (req, res) =>{
    res.send('Hello World!')
});
app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html')
});  
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })