import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { signIn, getSession } from 'next-auth/client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const router = useRouter();
	const [ values, setValues ] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { value, name } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await signIn('credentials', {
			redirect: false,
			email: values.email,
			password: values.password
		});
		console.log(res);
		if (res.error) {
			toast.error(res.error);
		} else {
			router.push('/');
		}
	};
	return (
		<Layout title="Login | Real Advisor">
			<Row>
				<Col md={6} className="offset-md-3">
					<ToastContainer />
					<h1>Login Form</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input name="email" type="email" onChange={handleChange} className="form-control" />
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input name="password" type="password" onChange={handleChange} className="form-control" />
						</div>

						<div>
							<button className="btn btn-primary" type="submit">
								Login
							</button>
						</div>
					</form>
					<p className="mt-5">
						Sign up for an Account.{' '}
						<Link href="/user/register">
							<a>Register</a>
						</Link>
					</p>
				</Col>
			</Row>
		</Layout>
	);
};

export const getServerSideProps = async ({ req }) => {
	const session = await getSession({ req });
	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}
	return {
		props: {}
	};
};

export default Login;
