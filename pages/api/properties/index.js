import dbConnect from '@/lib/mongodb';
import Property from '@/models/property';
import User from '@/models/user';
import { getSession } from 'next-auth/client';

export default async function(req, res) {
	const method = req.method;

	const session = await getSession({ req });

	try {
		await dbConnect();
	} catch (err) {
		console.log(err);
	}

	switch (method) {
		case 'GET':
			try {
				const properties = await Property.find({}).sort({ createdAt: -1 });
				if (!properties || properties.length === 0) {
					res.status(400).json({ message: 'No properties found' });
					return;
				}
				res.status(200).json(properties);
				return;
			} catch (err) {
				res.status(500).json({ message: err.message });
				return;
			}
		case 'POST':
			try {
				if (!session) {
					return res.status(401).json({ message: 'you must login first' });
				}
				const property = new Property(req.body);
				const user = await User.findOne({ email: session.user.email });
				if (!user) {
					return res.status(401).json({ message: 'user not found' });
				}
				property.author = user._id;
				await property.save();

				res.status(200).json({ message: 'Property successfully created', success: true });
			} catch (err) {
				res.status(500).json({ message: err.message });
			}
	}
}
