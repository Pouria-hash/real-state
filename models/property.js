import mongoose from 'mongoose';
import slug from 'slug';

const { Schema } = mongoose;

const propertySchema = new Schema(
	{
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		title: {
			type: String,
			required: true
		},
		images: [
			{
				filename: String,
				path: String
			}
		],
		slug: {
			type: String,
			required: true,
			unique: true
		},
		rooms: {
			type: Number
		},
		type: {
			type: String,
			enum: [ 'apartment', 'house', 'land' ]
		},
		location: {
			city: {
				type: String
			},
			state: {
				type: String
			},
			country: {
				type: String
			},
			district: {
				type: String
			}
		},
		price: {
			type: String,
			required: true,
			default: 'Agreement'
		},
		bathrooms: {
			type: Number
		},
		yearBuilt: {
			type: String
		},
		area: {
			type: String
		},
		service: {
			type: String,
			enum: [ 'rent', 'buy' ]
		},
		garage: {
			type: Number
		},
		description: {
			type: String,
			required: true
		},
		features: {
			airCondition: {
				type: Boolean,
				default: false
			},
			gym: {
				type: Boolean,
				default: false
			},
			barbeque: {
				type: Boolean,
				default: false
			},
			dryer: {
				type: Boolean,
				default: false
			},
			lawn: {
				type: Boolean,
				default: false
			},
			microwave: {
				type: Boolean,
				default: false
			},
			oven: {
				type: Boolean,
				default: false
			},
			sauna: {
				type: Boolean,
				default: false
			},
			pool: {
				type: Boolean,
				default: false
			},
			wifi: {
				type: Boolean,
				default: false
			}
		}
	},
	{
		timestamps: true
	}
);

propertySchema.pre('validate', function(next) {
	if (this.title) {
		this.slug = slug(this.title, { lower: true });
	}
	next();
});

export default mongoose.models.Property || mongoose.model('Property', propertySchema);
