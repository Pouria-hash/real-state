import dbConnect from '@/lib/mongodb';
import Property from '@/models/property';

export default async function(req, res) {
	const method = req.method;
	const { slug } = req.query;
	try {
		await dbConnect();
	} catch (err) {
		console.log(err);
	}
	switch (method) {
		case 'GET':
			try {
				const property = await Property.findOne({ slug }).populate('author');
				if (!property) {
					return res.status(404).json({ message: 'property not found' });
				}
				res.status(200).json(property);
				return;
			} catch (err) {
				return res.status(500).json({ message: err.message });
			}

		default:
			return;
	}
}
