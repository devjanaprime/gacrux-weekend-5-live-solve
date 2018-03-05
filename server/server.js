const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favorites = require( './routes/favorite.router.js' );
// middleware
app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );

app.use( '/favorites', favorites );

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log( 'server running on:', port );
});
