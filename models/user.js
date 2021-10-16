import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.models.User || mongoose.model('User', userSchema);
