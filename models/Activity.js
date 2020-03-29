const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    activityName: {type: String, required: true, unique: false},
    activityType: {type: String, required: true},
    activitySpendings: {type: String, required: true},
    accountName: {type: String, required: true},
    activityDate: {type: String, required: true},
    icon: {type: String, required: false},
    owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Activity', schema);