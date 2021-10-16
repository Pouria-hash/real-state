import dbConnect from '@/lib/mongodb';
import Property from '@/models/property';
import { getSession } from 'next-auth/client';

export default async function handle(req, res) {
	const { id } = req.query;
	const method = req.method;

	try {
		const session = await getSession({ req });
		if (!session) {
			return res.status(401).json({ message: 'you must be logged in' });
		}
		await dbConnect();
	} catch (err) {
		console.log(err);
	}
	switch (method) {
		case 'GET':
			try {
				const property = await Property.findById(id);
				if (!property) {
					return res.status(404).json({ message: 'Property not found' });
				}
				return res.status(200).json(property);
			} catch (err) {
				return res.status(500).json({ message: err.message });
			}
		case 'PUT':
			try {
				const data = req.body;
				const existProperty = await Property.findById(id);
				if (!existProperty) {
					return res.status(404).json({ message: 'Property not found' });
				}
				const property = await Property.findByIdAndUpdate(id, data);
				return res.status(200).json({ message: 'Property updated' });
			} catch (err) {
				return res.status(500).json({ message: err.message });
			}
		case 'DELETE':
			try {
				const existProperty = await Property.findById(id);
				if (!existProperty) {
					return res.status(400).json({ message: 'Property not found' });
				}
				await Property.findByIdAndDelete(id);
				res.status(200).json({ message: 'Property successfully deleted' });
			} catch (error) {
				res.status(500).json({ message: err.message });
			}
	}
}
