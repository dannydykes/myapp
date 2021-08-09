const mongoose = require('mongoose');

require('dotenv').config();

// connect to db


const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Creates a simple schem for a user the hash and salt are from the given password when they register
const UserSchema = new mongoose.Schema({
    userName: String,
    hash: String,
    salt: String,
    admin: Boolean
});

const User = connection.model('User', UserSchema);

// Expose the connection
module.exports = connection;