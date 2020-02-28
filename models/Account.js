const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    accountName: {type: String, required: true, unique: true},
    accountType: {type: String, required: true},
    accountCurrency: {type: String, required: true},
    balance: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Account', schema);