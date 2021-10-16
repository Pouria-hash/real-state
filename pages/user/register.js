import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Row, Col } from 'react-bootstrap';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const register = () => {
	const router = useRouter();
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		name: ''
	});

	const handleChange = (e) => {
		const { value, name } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch(`${API_URL}/api/auth/register`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values)
		});

		const data = await res.json();

		if (res.ok) {
			toast.success(data.message);
			setTimeout(() => {
				router.push('/user/login');
			}, 2000);
		} else {
			toast.error(data.message);
		}
	};
	return (
		<Layout title="Register | Real Advisor">
			<Row>
				<Col md={6} className="offset-md-3">
					<ToastContainer />
					<h1>Register Form</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input name="email" type="email" onChange={handleChange} className="form-control" />
						</div>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input name="name" type="name" onChange={handleChange} className="form-control" />
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input name="password" type="password" onChange={handleChange} className="form-control" />
						</div>
						<div className="mb-3">
							<label htmlFor="confirmPassword" className="form-label">
								Confirm Password
							</label>
							<input
								name="confirmPassword"
								type="password"
								onChange={handleChange}
								className="form-control"
							/>
						</div>
						<div>
							<button className="btn btn-primary" type="submit">
								Register
							</button>
						</div>
					</form>
				</Col>
			</Row>
		</Layout>
	);
};

export default register;
