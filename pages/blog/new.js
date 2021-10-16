import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import { Col, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewPostPage = () => {
	const router = useRouter();
	const [ isLoading, setIsLoading ] = useState(true);
	const [ values, setValues ] = useState({
		title: '',
		description: '',
		image: ''
	});

	useEffect(() => {
		getSession().then((session) => {
			if (!session) {
				router.push('/user/login');
			} else {
				setIsLoading(false);
			}
		});
	}, []);

	const handleChange = (e) => {
		const { value, name } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!values.description || !values.image || !values.title) {
			return toast.error('Fill all fields');
		}
		const res = await fetch(`${API_URL}/api/blog`, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: { 'Content-Type': 'application/json' }
		});
		if (!res.ok) {
			const errorData = await res.json();
			toast.error(errorData.message);
		} else {
			const data = await res.json();
			toast.success(data.message);
			router.push('/blog');
		}
	};

	if (isLoading) {
		return (
			<Layout title="New Post | Real Advisor">
				<h2>Loading...</h2>
			</Layout>
		);
	}
	return (
		<Layout title="New Post | Real Advisor">
			<Row>
				<ToastContainer />
				<Col md={8} className="offset-md-2">
					<h1>New Blog Post</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="form-label" htmlFor="title">
								Title
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Title"
								name="title"
								value={values.title}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="image">
								Image
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Image url"
								name="image"
								value={values.image}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label" htmlFor="description">
								Description
							</label>
							<textarea
								className="form-control"
								placeholder="Description"
								name="description"
								value={values.description}
								onChange={handleChange}
								rows="10"
							/>
						</div>
						<div className="d-grid">
							<button className="btn btn-primary" type="submit">
								Create
							</button>
						</div>
					</form>
				</Col>
			</Row>
		</Layout>
	);
};

export default NewPostPage;
