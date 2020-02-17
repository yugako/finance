const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	accounts: [{ type: Types.ObjectId, ref: 'Account' }]
});

module.exports = model('User', schema);