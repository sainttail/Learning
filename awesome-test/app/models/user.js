/**
 * Created by Eakawat on 10/3/2015 AD.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');

// User Schema
var UserSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true,
        select: false // not retrieve when query from db
    }
});

UserSchema.pre('save', function (next) {
    var user = this;

    // hash the password only if the password has been changed or user is new
    if (!user.isModified('password')) return next();

    // generate the hash
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) return next(err);

        // change password to the hashed version
        user.password = hash;
        next();
    });
});

// method to compare a given password to a database hash
UserSchema.methods.comparePassword = function (password) {
    var user = this;
    return bcrypt.compareSync(password, user.password);
};

// return the model
module.exports = mongoose.model('User', UserSchema);