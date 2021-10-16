import { useState } from 'react';
import Layout from '@/components/Layout';
import { Col, Row } from 'react-bootstrap';
import { BsGeoAlt, BsPhone, BsFillEnvelopeFill } from 'react-icons/bs';

const contactPage = () => {
	const [ values, setValues ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		const { value, name } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<Layout title="Contact | Real Advisor" pageTitle="Contact Us" pageLink="contact" pageLinkName="Contact">
			<Row>
				<Col md={7}>
					<div>
						<h2>Contact Us</h2>
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="firstName" className="form-label">
									First Name
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="First Name"
									name="firstName"
									id="firstName"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="lastName" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Last Name"
									name="lastName"
									id="lastName"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									name="email"
									id="email"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="message" className="form-label">
									Message
								</label>
								<textarea
									rows="4"
									className="form-control"
									placeholder="Message"
									name="message"
									id="message"
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<button className="btn btn-primary" type="submit">
									Send
								</button>
							</div>
						</form>
					</div>
				</Col>
				<Col
					md={4}
					className="card d-flex flex-column justify-content-center bg-danger text-light offset-md-1 my-4 my-md-0 p-4 "
				>
					<h2 className="mb-5 ">Conatct Details</h2>
					<p className="mb-5">Please find below contact details and contact us today!</p>
					<p className="mb-5 fs-5 fw-light">
						<BsGeoAlt /> Ahvaz, Khouzestan, IR
					</p>
					<p className="mb-5 fs-5 fw-light">
						<BsPhone /> 09395918262
					</p>
					<p className="mb-5 fs-5 fw-light">
						<BsFillEnvelopeFill /> Pouria.az.94@gmail.com
					</p>
				</Col>
			</Row>
		</Layout>
	);
};

export default contactPage;
