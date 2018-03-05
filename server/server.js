const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favorites = require( './routes/favorite.router.js' );
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/swapiexplorer';

app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );

app.use( '/favorites', favorites );

mongoose.connect( databaseUrl );
mongoose.connection.on( 'connected', () => {
    console.log('mongoose is connected');
});
mongoose.connection.on( 'error', () => {
    console.log('mongoose connection failed');
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log( 'server running on:', port );
});
