const   express    = require('express'),
        bodyParser = require('body-parser'),
        port       = process.env.PORT || 3000,
        ip         = process.env.IP,
        app        = express();

const todoRoutes   = require('./routes/todos');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen(port, ip, () => {
    console.log('Server listening...');
});