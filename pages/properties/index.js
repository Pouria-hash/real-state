import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import Property from '@/components/Property';
import RecentSlider from '@/components/RecentSlider';

export default function PropertyList({ message, properties }) {
	const [ service, setService ] = useState('');
	const [ city, setCity ] = useState('');
	const [ district, setDistrict ] = useState('');
	const [ type, setType ] = useState('');
	const [ room, setRoom ] = useState(0);

	const handleSearch = (e) => {
		e.preventDefault();
		const searchData = { service, location: { city, district }, type, room };
		console.log(searchData);
	};

	if (message) {
		return (
			<Layout
				title="List of properties | Real Advisor"
				pageLink="properties"
				pageLinkName="Properties"
				pageTitle="List of Properties"
			>
				<div>
					<h4>{message}</h4>
				</div>
			</Layout>
		);
	}
	return (
		<Layout
			title="List of properties | Real Advisor"
			pageLink="properties"
			pageLinkName="Properties"
			pageTitle="List of Properties"
		>
			<Row>
				<Col lg={4} className="">
					<div className="p-4 mb-3 mb-lg-0 shadow rounded" style={{ backgroundColor: '#fff' }}>
						<h4>Search Property</h4>

						<form onSubmit={handleSearch}>
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
									<option value="buy">BUY</option>
									<option value="rent">RENT</option>
								</select>
							</div>
							<div className="mb-3">
								<h5>Location</h5>
								<Row>
									<Col>
										<label htmlFor="city" className="form-label">
											City
										</label>
										<input
											type="text"
											className="form-control"
											value={city}
											onChange={(e) => setCity(e.target.value)}
										/>
									</Col>
									<Col>
										<label htmlFor="district" className="form-label">
											District
										</label>
										<input
											type="text"
											className="form-control"
											value={district}
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
									className="form-control"
									value={type}
									onChange={(e) => setType(e.target.value)}
								>
									<option value="">--select Type--</option>
									<option value="apartment">Apartment</option>
									<option value="house">House</option>
									<option value="land">Land</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="room" className="form-label">
									Room
								</label>
								<input
									type="number"
									className="form-control"
									value={room}
									onChange={(e) => setRoom(e.target.value)}
								/>
							</div>
							<div className="d-grid">
								<button type="button" className="btn btn-primary">
									Search
								</button>
							</div>
						</form>
					</div>
					<RecentSlider properties={properties} />
				</Col>

				<Col lg={8}>
					<div className="px-1">
						<Property properties={properties} />
					</div>
				</Col>
			</Row>
		</Layout>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/api/properties`, {
		method: 'GET',
		header: { 'Content-Type': 'application/json' }
	});

	const data = await res.json();

	if (!res.ok) {
		return {
			props: {
				message: data.message
			}
		};
	}

	return {
		props: {
			properties: data
		}
	};
}
