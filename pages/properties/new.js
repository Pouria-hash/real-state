import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { Row, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_URL } from '@/config/index';

const NewProperty = () => {
	const router = useRouter();

	const [ title, setTitle ] = useState('');
	const [ service, setService ] = useState('');
	const [ country, setCountry ] = useState('');
	const [ state, setState ] = useState('');
	const [ city, setCity ] = useState('');
	const [ district, setDistrict ] = useState('');
	const [ type, setType ] = useState('');
	const [ rooms, setRooms ] = useState(0);
	const [ area, setArea ] = useState(50);
	const [ description, setDescription ] = useState('');
	const [ bathrooms, setBathrooms ] = useState('');
	const [ yearBuilt, setYearBuilt ] = useState('');
	const [ garage, setGarage ] = useState(1);
	const [ price, setPrice ] = useState(0);
	const [ images, setImages ] = useState([]);

	const [ uploading, setUploading ] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('images')) {
			setImages(JSON.parse(localStorage.getItem('images')));
			console.log(images);
		}
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const propertyData = {
			title,
			service,
			location: { country, state, city, district },
			type,
			rooms,
			area,
			description,
			bathrooms,
			yearBuilt,
			garage,
			price,
			images
		};
		if (
			!title ||
			!service ||
			!country ||
			!state ||
			!city ||
			!district ||
			!type ||
			!rooms ||
			!area ||
			!description ||
			!bathrooms ||
			!yearBuilt ||
			!garage ||
			!price
		) {
			return toast.error('Fill all field!');
		}

		const res = await fetch(`${API_URL}/api/properties`, {
			method: 'POST',
			body: JSON.stringify(propertyData),
			headers: { 'Content-Type': 'application/json' }
		});
		const data = await res.json();
		if (res.ok) {
			if (data.success) {
				toast.success(data.message);

				setTimeout(() => {
					localStorage.removeItem('images');
					router.push('/properties');
				}, 2000);
			}
		} else {
			toast.error(data.message);
		}
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		const files = e.target.files;
		const formData = new FormData();
		for (let i = 0; i < files.length; i++) {
			formData.append('images', files[i]);
		}
		setUploading(true);

		try {
			const res = await fetch(`${API_URL}/api/upload`, {
				method: 'POST',
				// headers: { 'Content-Type': 'multipart/form-data' },
				body: formData
			});

			const data = await res.json();

			setImages(data.uploaded);

			localStorage.setItem('images', JSON.stringify(data.uploaded));
			setUploading(false);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Layout
			title="New Property | Real Advisor"
			pageTitle="New Property"
			pageLink="properties/new"
			pageLinkName="New Property"
		>
			<Row>
				<ToastContainer />
				<Col md={6} className="offset-md-3">
					<h2>New Property</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Title
							</label>
							<input
								type="text"
								name="title"
								value={title}
								className="form-control"
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="service" className="form-label">
								Service
							</label>
							<select
								value={service}
								className="form-control"
								onChange={(e) => setService(e.target.value)}
							>
								<option value="">--select service--</option>
								<option value="buy">Buy</option>
								<option value="rent">Rent</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="images" className="form-label">
								Images
							</label>
							<input
								type="file"
								name="images"
								className="form-control"
								onChange={handleUpload}
								multiple
							/>
							<p>{uploading && 'Loading...'}</p>
							{
								<div>
									{images && images.length > 0 ? (
										images.map((image, index) => (
											<div key={index} className="d-inline-block ms-2">
												<Image
													src={`${image.path}`}
													alt={image.filename}
													width={100}
													height={100}
												/>
											</div>
										))
									) : null}
								</div>
							}
						</div>
						<div className="mb-3">
							<h5>Location</h5>
							<Row>
								<Col>
									<label htmlFor="country" className="form-label">
										Country
									</label>
									<input
										type="text"
										value={country}
										className="form-control"
										onChange={(e) => setCountry(e.target.value)}
									/>
								</Col>
								<Col>
									<label htmlFor="state" className="form-label">
										State
									</label>
									<input
										type="text"
										value={state}
										className="form-control"
										onChange={(e) => setState(e.target.value)}
									/>
								</Col>
							</Row>
							<Row>
								<Col>
									<label htmlFor="city" className="form-label">
										City
									</label>
									<input
										type="text"
										value={city}
										className="form-control"
										onChange={(e) => setCity(e.target.value)}
									/>
								</Col>
								<Col>
									<label htmlFor="district" className="form-label">
										District
									</label>
									<input
										type="text"
										value={district}
										className="form-control"
										onChange={(e) => setDistrict(e.target.value)}
									/>
								</Col>
							</Row>
						</div>
						<div className="mb-3">
							<label htmlFor="Type" className="form-label">
								Type
							</label>
							<select
								type="text"
								value={type}
								className="form-control"
								onChange={(e) => setType(e.target.value)}
							>
								<option value="">--select Type--</option>
								<option value="apartment">Apartment</option>
								<option value="house">House</option>
								<option value="land">Land</option>
							</select>
						</div>
						<Row>
							<Col>
								<div className="mb-3">
									<label htmlFor="rooms" className="form-label">
										Rooms
									</label>
									<input
										type="number"
										value={rooms}
										className="form-control"
										min="0"
										onChange={(e) => setRooms(e.target.value)}
									/>
								</div>
							</Col>
							<Col>
								<div className="mb-3">
									<label htmlFor="price" className="form-label">
										Price
									</label>
									<div className="input-group">
										<span className="input-group-text">$</span>
										<input
											type="number"
											value={price}
											className="form-control"
											onChange={(e) => setPrice(e.target.value)}
										/>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<div className="mb-3">
									<label htmlFor="bathrooms" className="form-label">
										Bath Rooms
									</label>
									<input
										type="number"
										value={bathrooms}
										className="form-control"
										onChange={(e) => setBathrooms(e.target.value)}
									/>
								</div>
							</Col>
							<Col>
								<div className="mb-3">
									<label htmlFor="yearBuilt" className="form-label">
										Year of Built
									</label>
									<input
										type="text"
										value={yearBuilt}
										className="form-control"
										onChange={(e) => setYearBuilt(e.target.value)}
									/>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<div className="mb-3">
									<label htmlFor="area" className="form-label">
										Area
									</label>
									<input
										type="number"
										value={area}
										className="form-control"
										onChange={(e) => setArea(e.target.value)}
									/>
								</div>
							</Col>
							<Col>
								<div className="mb-3">
									<label htmlFor="garage" className="form-label">
										Garage
									</label>
									<input
										type="number"
										value={garage}
										className="form-control"
										onChange={(e) => setGarage(e.target.value)}
									/>
								</div>
							</Col>
						</Row>
						<div className="mb-3">
							<label htmlFor="description" className="form-label">
								Description
							</label>
							<textarea
								value={description}
								className="form-control"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div>
							<button type="submit" className="btn btn-primary">
								Create
							</button>
						</div>
					</form>
				</Col>
			</Row>
		</Layout>
	);
};

export default NewProperty;
