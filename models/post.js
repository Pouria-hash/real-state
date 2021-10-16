import mongoose from 'mongoose';
import slug from 'slug';
const { Schema } = mongoose;

const postSchema = new Schema(
	{
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		slug: {
			type: String,
			unique: true
		}
	},
	{
		timestamps: true
	}
);

postSchema.pre('validate', function(next) {
	if (this.title) {
		this.slug = slug(this.title, { lower: true });
	}
	next();
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
