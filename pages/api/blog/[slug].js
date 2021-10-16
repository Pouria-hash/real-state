import dbConnect from '@/lib/mongodb';
import Post from '@/models/post';

export default async function(req, res) {
	const method = req.method;
	const { slug } = req.query;

	try {
		await dbConnect();
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	switch (method) {
		case 'GET':
			const post = await Post.findOne({ slug }).populate('author');
			if (!post) {
				return res.status(404).json({ message: 'Post not found' });
			}
			return res.status(200).json(post);

		default:
			return res.status(500).json({ message: 'Invalid method' });
	}
}
