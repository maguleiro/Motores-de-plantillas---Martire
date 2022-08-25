const express = require('express');
const exphds = require('express-handlebars')
const path = require('path');

const app = express();

//middleware

app.use(express.static(path.join(__dirname, 'public')));

//Motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphds.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: 'hbs'
}));
app.set('view engine', 'hbs')

//----------server

const PORT = 8081;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});