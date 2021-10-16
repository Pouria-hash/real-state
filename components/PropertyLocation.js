import { Row, Col } from 'react-bootstrap';

const PropertyLocation = ({ property }) => {
	return (
		<Row>
			<h5 className="mb-4">Property Location</h5>
			<Col>
				<p>
					Country: <span className="text-muted">{property.location.country}</span>
				</p>
				<p>
					State: <span className="text-muted">{property.location.state}</span>
				</p>
			</Col>
			<Col>
				<p>
					City: <span className="text-muted">{property.location.city}</span>
				</p>
				<p>
					District: <span className="text-muted">{property.location.district}</span>
				</p>
			</Col>
		</Row>
	);
};

export default PropertyLocation;
