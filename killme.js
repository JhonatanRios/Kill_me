const MongoClient = require('mongodb').MongoClient
ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Conectarse a Base de Datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('test');

    // Iniciar servidor
    app.listen(1234);
    console.log("Escuchando servidor")
});

/*Esta parte es para cargar las paginas*/
app.get('/', (req, res) => {
    res.render('home', {});
})

app.get('/how', (req, res) => {
    res.render('how', {});
})

app.get('/book', (req, res) => {
    res.render('books', {});
})

app.get('/reco', (req, res) => {
    var prod = db.collection('libros')
        .find();

    if (req.query.editorial)
        prod.filter({
            editorial: req.query.editorial
        });

    if (req.query.modelo)
        prod.filter({
            modelo: req.query.modelo
        });

    prod.toArray((err, result) => {
        res.render('recommended', {
            libros: result,
            tittle: "Recommended"
        });
    })
});

app.get('/contact', (req, res) => {
    res.render('contact', {});
})

app.get('/checkout', (req, res) => {
    res.render('checkout');
});


app.get('/reco/:id', (req, res) => {
    db.collection('libros').find({
        modelo: req.params.id
    }).toArray((err, result) => res.send(result))
});


app.get('/recoPorIds', (req, res) => {
    console.log(req.query.ids);
    var arreglo = req.query.ids.split(',');
    arreglo = arreglo.map(function (id) {
        return new ObjectID(id);
    });
    var prod = db.collection('libros')
        .find({
            _id: {
                $in: arreglo
            }
        })
        .toArray((err, result) => {
            res.send(result);
        });
});