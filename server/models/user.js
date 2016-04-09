var mongoose = require('mongoose');

// Create the UserSchema
var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	docType: {
		type: String,
		required: true
	},
	docNumber: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: false
	},
	mobile: {
		type: Number,
		required: false
	},
	address: {
		type: String,
		required: true
	},
	incomes: {
		fixed: {
			type: Number,
			required: false
		},
		variables: {
			type: Number,
			required: false
		}
	},
	expenses: {
		fixed: {
			type: Number,
			required: false
		},
		variables: {
			type: Number,
			required: false
		}
	}
});

// Export the model Schema
module.exports = UserSchema;