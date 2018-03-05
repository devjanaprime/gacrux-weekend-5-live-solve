const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log( 'server running on:', port );
});
