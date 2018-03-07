const express = require('express');
const bodyParser = require('body-parser');
const pkg = require('./package.json');
const PlaylistsController = require('./controllers/playlists');
const UsersController = require('./controllers/users');

const app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.render('index'));
app.use('/playlists', PlaylistsController);
app.use('/users', UsersController);

app.listen(app.get('port'), () =>
	console.log(`${pkg.name} listening on port ${app.get('port')}...`)
);
