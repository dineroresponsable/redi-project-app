var mongoose = require('mongoose');

// Create the UserSchema
var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: false
	},
	lastname: {
		type: String,
		required: false
	},
	goalCategory: {
		type: String,
		required: false
	},
	goalName: {
		type: String,
		required: false
	},
	goalValue: {
		type: String,
		required: false
	},
	goalTime: {
		type: Number,
		required: false
	},
	docType: {
		type: String,
		required: false
	},
	docNumber: {
		type: String,
		required: false
	},
	age: {
		type: Number,
		required: false
	},
	city: {
		type: String,
		required: false
	},
	state: {
		type: String,
		required: false
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
		required: false
	},
	email: {
		type: String,
		required: false
	},
	incomes: {
		category1: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		},
		category2: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		},
		category3: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		}
	},
	expenses: {
		category1: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		},
		category2: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		},
		category3: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		},
		category4: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		},
		category5: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		},
		category6: {
			name: {
				type: String,
				required: false
			},
			value: {
				type: Number,
				required: false
			}
		}
	}
});

// Export the model Schema
module.exports = UserSchema;