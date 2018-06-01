const MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

const bodyParser = require('body-parser');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

//Define body-parser usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Conectarse a Base de Datos
MongoClient.connect(`mongodb+srv://@cluster0-nrqn7.mongodb.net/test`, {
    auth: {
        user: 'kill_me2',
        password: 'kill_me2'
    }
}, function (err, client) {
    if (err) throw err;

    db = client.db('test');

    // Iniciar servidor
    app.listen(process.env.PORT || 1234);
    console.log("Escuchando servidor")
});

/*Esta parte es para cargar las paginas*/
app.get('/', (req, res) => {
    res.render('home', {
        tittle: "Home"
    });
})

app.get('/how', (req, res) => {

    var prod = db.collection('comments6')
        .find()
        .toArray((err, result) => {
            res.render('how', {
                tittle: "How I Am",
                result1: result
            });
        });

})

app.get('/book', (req, res) => {
    res.render('books', {
        tittle: "Books"
    });
})

app.get('/reco', (req, res) => {
    var prod = db.collection('libros')
        .find();

    if (req.query.tematica)
        prod.filter({
            tematica: req.query.tematica
        });

    if (req.query.idioma)
        prod.filter({
            idioma: req.query.idioma
        });

    if (req.query.editorial)
        prod.filter({
            editorial: req.query.editorial
        });

    if (req.query.calificacion)
        prod.filter({
            calificacion: parseInt(req.query.calificacion)
        });

    if (req.query.min)
        prod.filter({
            precio: {
                $gte: parseInt(req.query.min)
            }
        });

    prod.toArray((err, result) => {
        res.render('recommended', {
            libros: result,
            tittle: "Recommended"
        });
    })
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        tittle: "Contact Me"
    });
})

app.get('/checkout', (req, res) => {
    res.render('checkout', {
        tittle: "Checkout"
    });
});

app.get('/reco/specific/:nombre', (req, res) => {
    db.collection('libros').find({
        nombre: req.params.nombre
    }).toArray((err, result) => res.render('specific', {
        libro: result[0],
        tittle: "Specific"
    }))

});

app.get('/productosPorIds', (req, res) => {
    var arreglo = req.query.id.split(',');
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

app.post('/recibirDatos', (request, res) => {
    var hola = request.body;
    console.log(hola);

    db.collection('comments6').insert(request.body);

    res.send("Data Succesfully Submited");

    /*
      var prod = db.collection('comments2')
    .find()
    .toArray((err, result) => {
        res.send(result);
    });*/
});

app.get('/enviarDatos', (request, res) => {

    var prod = db.collection('comments')
        .find()
        .toArray((err, result) => {
            res.send(result);
        });

});