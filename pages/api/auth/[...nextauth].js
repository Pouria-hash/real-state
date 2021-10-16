import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import dbConnect from '@/lib/mongodb';
import { comparePassword } from '@/lib/auth';
import User from '@/models/user';

export default NextAuth({
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60
	},
	providers: [
		Providers.Credentials({
			async authorize(credentials) {
				try {
					await dbConnect();
					const user = await User.findOne({ email: credentials.email });
					if (!user) {
						throw new Error('email or password is incorrect');
					}
					const checkPassword = await comparePassword(credentials.password, user.password);

					if (!checkPassword) {
						throw new Error('email or password is incorrect');
					}

					return { email: credentials.email };
				} catch (err) {
					console.log(err);
				}
			}
		})
	]
});
