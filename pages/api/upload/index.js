import storage from '@/lib/cloudinaryStorage';
import multer from 'multer';
import initMiddleware from '@/lib/initMiddleware';

export const config = {
	api: {
		bodyParser: false
	}
};

const upload = multer({ storage });

const imageUploader = initMiddleware(upload.array('images', 3));

export default async function(req, res) {
	const method = req.method;

	if (method === 'POST') {
		try {
			await imageUploader(req, res);

			const uploaded = req.files.map((f) => ({ filename: f.filename, path: f.path }));
			res.json({ message: 'files uploaded', uploaded });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
}
