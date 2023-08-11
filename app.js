//npm i express@4.17.1 

//Al final teniendo todo, hacemos el siguiente despliegue de la app en la nube
//git init
//git add .    agrega todos los archivos del proyecto menos los gitignore
//> git commit -m "Webserver listo"     tomamos la foto
//Desplegar app en Railway.app
//Hay muchas formas de hacerlo: Dockers, maquina virtual y desplegarlo, servicios de hosting para desplegar, a mano en un servidor local instalando Node, etc, etc
//Firbase hosting, Amazon WebServices, Azure, DigitalOcean, Google Cloud, Heroku, Railway.
//Railway no pide tarjeta de credito y se puede usar en produccion.
//Creo repositorio en GitHub para luego subir el proyecto, llamado: node-webserver-railway
//Subo mi proyecto a github al repsitorio creado:
// git remote add origin https://github.com/forestgunp9/node-webserver-railway.git
// git branch -M main       (renombra la rama actual a main en lugar de master, que es lo que se aconseja actualmente)
// git push -u origin main  (Sube el proyecto a github al origen indicado , creado antes mas ariba)
// Luego vamos a la pagina de Railway, creamos nuevo proyecto, y elegimos desplegar desde GitHub, buscandolo con el nombre node-webserver-railway.
// Listo, proyecto github desplegado en Railway



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