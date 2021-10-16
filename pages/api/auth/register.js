import dbConnect from '@/lib/mongodb';
import { hashPassword } from '@/lib/auth';
import User from '@/models/user';

export default async function(req, res) {
	const method = req.method;

	switch (method) {
		case 'POST':
			try {
				await dbConnect();
				const { email, password, confirmPassword, name } = req.body;

				if (!email || !email.includes('@') || !password || password.trim().length < 4 || !name) {
					res.status(422).json({ message: 'Invalid input' });
				}

				const existUser = await User.findOne({ email });
				if (existUser) {
					return res.status(403).json({ message: 'User already exists' });
				}

				if (confirmPassword !== password) {
					res.status(400).json({ message: 'password and confirmPassword not match' });
					return;
				}

				const hashedPassword = await hashPassword(password);
				const user = new User({ email, password: hashedPassword, name });

				if (!user) {
					return res.status(500).json({ message: 'Invalid input' });
				}

				await user.save();
				res.status(200).json({ message: 'User successfully created' });
				return;
			} catch (err) {
				return res.status(500).json({ message: err.message });
			}

		default:
			return res.status(404).json({ message: `Invalid method ${method}` });
	}
}
