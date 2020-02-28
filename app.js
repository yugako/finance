const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}));

/**
* Use CORS
*/
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200
  })
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Set api routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/account', require('./routes/account.routes'));
app.use('/api/activity', require('./routes/activity.routes'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


/** Start server */
async function start() {
	try {
		await mongoose.connect(config.get('mongoURI'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		app.listen(PORT, () => console.log(`Server was running on port ${PORT}`));
		
	} catch (e) {
		console.log('Server error', e.message);
		process.exit(1);
	}
}

start();

