import seperate from '@/lib/seperate';
import { Col, Row } from 'react-bootstrap';
import PropertyFeatures from './PropertyFeatures';
import PropertyLocation from './PropertyLocation';

const PropertyDetails = ({ property }) => {
	return (
		<div className="">
			<div className="border rounded">
				<h4 className="px-4 pt-4">Property Details</h4>
				<div className=" px-4 py-3 d-flex flex-row justify-content-start flex-wrap ">
					<span className="px-3 py-1 ms-3 bg-light m-1 ">{property.type.toUpperCase()}</span>
					<span className="px-3 py-1 ms-3 bg-light m-1">{property.service.toUpperCase()}</span>
					<span className="px-3 py-1 ms-3 bg-light m-1">Beds: {property.rooms}</span>
					<span className="px-3 py-1 ms-3 bg-light m-1">Baths: {property.bathrooms}</span>
				</div>
				<div className="p-4">
					<h5 className="">Description</h5>
					<p className="text-muted" style={{ fontSize: '14px' }}>
						{property.description}
					</p>
				</div>
				<hr />
				<div className="p-4">
					<h5 className="mb-4">Property Details</h5>
					<Row>
						<Col md={4} className=" mb-3 ">
							<p>
								Property ID:{' '}
								<span className="text-muted" style={{ fontSize: '12px', fontWeight: '500' }}>
									{property._id}
								</span>
							</p>
							<p>
								Price:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									$ {seperate(property.price)}
								</span>
							</p>
							<p>
								Property Size:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									{property.area} m2
								</span>
							</p>
							<p>
								Year Built:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									{property.yearBuilt}{' '}
								</span>
							</p>
						</Col>
						<Col md={4} className=" mb-3 ">
							<p>
								Bedrooms:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									{property.rooms}
								</span>
							</p>
							<p>
								Bathromms:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									{property.bathrooms}
								</span>
							</p>
							<p>
								Garage:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									{property.garage}
								</span>
							</p>
							<p>
								Property Type:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									{property.type}{' '}
								</span>
							</p>
						</Col>
						<Col md={4} className=" mb-3 ">
							<p>
								Property Status:{' '}
								<span className="text-muted" style={{ fontWeight: '500' }}>
									For {property.service === 'buy' ? 'Sell' : 'Rent'}
								</span>
							</p>
						</Col>
					</Row>
				</div>
			</div>

			<div className="mt-3 border rounded p-4">
				<PropertyFeatures property={property} />
			</div>

			<div className="mt-3 border rounded p-4">
				<PropertyLocation property={property} />
			</div>
		</div>
	);
};

export default PropertyDetails;
