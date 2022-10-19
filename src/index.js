const app = require('./app');

// listening the Server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
