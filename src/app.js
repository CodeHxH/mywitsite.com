const express = require('express');
const handlebars = require('handlebars');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

// initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	engine({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
		handlebars: handlebars,
	})
);
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));

// Routes
app.use(require('./routes/index.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
