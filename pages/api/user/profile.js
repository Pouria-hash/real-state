import User from '@/models/user';
import dbConnect from '@/lib/mongodb';

export default async function(req, res) {
	const method = req.method;

	const session = req.body;
	try {
		await dbConnect();
	} catch (error) {
		console.log(error);
	}

	switch (method) {
		case 'POST':
			try {
				if (!session) {
					return res.status(401).json({ message: 'you must login first' });
				}
				const user = await User.findOne({ email: session.user.email });
				if (!user) {
					return res.status(401).json({ message: 'user not found' });
				}
				return res.status(200).json(user);
			} catch (error) {
				return res.status(500).json({ message: error.message });
			}
		default:
			return res.status(500).json({ message: 'Invalid method ' });
	}
}
