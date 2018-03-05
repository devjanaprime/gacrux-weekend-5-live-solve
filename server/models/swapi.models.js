var mongoose = require('mongoose');

let filmSchema = new mongoose.Schema(
    {
        title: String,
        url: { type: String, unique: true },
        resourceType: String
    }
);
let personSchema = new mongoose.Schema(
    {
        name: String,
        url: { type: String, unique: true },
        resourceType: String
    }
);

let Film = mongoose.model( 'Film', filmSchema, 'favorites' );
let Person = mongoose.model( 'Person', personSchema, 'favorites' );

module.exports = {
    Film,
    Person
};
