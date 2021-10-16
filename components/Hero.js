import { useState } from 'react';
import styles from '@/styles/Hero.module.scss';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

const Hero = () => {
	const [ values, setValues ] = useState({
		keyword: '',
		type: '',
		location: ''
	});

	const handleChange = (e) => {
		const { value, name } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		console.log(JSON.stringify(values, null, 2));
	};
	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<Row>
					<Col md={7} className="mb-4 mb-md-0">
						<h1>
							Find Perfect House<br />From Your Area
						</h1>
						<p>
							From as low as $20 A small river named Duden flows by their place and supplies it with the
							necessary regelialia.
						</p>
						<Link href="/properties">
							<a className="btn btn-danger">View all properties</a>
						</Link>
					</Col>
					<Col md={5} className="">
						<div className={styles.searchBoxContainer}>
							<div className={styles.searchBox}>
								<form onSubmit={handleSearch}>
									<input
										type="text"
										className="form-control mb-3"
										placeholder="Enter Keyword"
										onChange={handleChange}
										value={values.keyword}
										name="keyword"
									/>
									<select
										className="form-select mb-3"
										name="type"
										value={values.type}
										onChange={handleChange}
									>
										<option value="">Property Type</option>
										<option value="apartment">Apartment</option>
										<option value="house">House</option>
										<option value="land">Land</option>
									</select>
									<input
										type="text"
										className="form-control mb-3"
										placeholder="Location"
										onChange={handleChange}
										value={values.location}
										name="location"
									/>
									<div className="d-grid">
										<button type="submit" className="btn btn-danger">
											Search
										</button>
									</div>
								</form>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Hero;
