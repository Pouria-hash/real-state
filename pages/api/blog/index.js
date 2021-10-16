import Post from '@/models/post';
import dbConnect from '@/lib/mongodb';
import { getSession } from 'next-auth/client';
import User from '@/models/user';

export default async function(req, res) {
	const method = req.method;

	try {
		await dbConnect();
	} catch (err) {
		return console.log(err);
	}
	switch (method) {
		case 'GET':
			try {
				const posts = await Post.find({}).populate('author').sort({ createdAt: -1 });
				if (posts.length === 0) {
					return res.status(404).json({ message: 'Posts not found' });
				}
				return res.status(200).json(posts);
			} catch (err) {
				return res.status(500).json({ message: err.message });
			}
		case 'POST':
			try {
				const session = await getSession({ req });
				if (!session) {
					return res.status(401).json({ message: 'you must be logged in' });
				}
				const data = req.body;
				const post = new Post(data);

				const user = await User.findOne({ email: session.user.email });

				if (!user) {
					return res.status(401).json({ message: 'user not found' });
				}

				post.author = user._id;
				await post.save();

				return res.status(200).json({ message: 'Post successfully created' });
			} catch (error) {
				return res.status(500).json({ message: error.message });
			}
		default:
			return res.status(500).send('method not allowed');
	}
}
