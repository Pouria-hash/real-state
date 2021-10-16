import { Col, Row } from 'react-bootstrap';
import { BsCheck, BsX } from 'react-icons/bs';

const PropertyFeatures = ({ property }) => {
	return (
		<div>
			<h5>Features</h5>
			<Row>
				<Col md={4} className="mb-3">
					<p>
						{property.feature && property.feature.airCondition ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Air Condition
					</p>
					<p>
						{property.feature && property.feature.barbeque ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Barbeque
					</p>
					<p>
						{property.feature && property.feature.drayer ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Drayer
					</p>
					<p>
						{property.feature && property.feature.gym ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Gym
					</p>
				</Col>
				<Col md={4} className="mb-3">
					<p>
						{property.feature && property.feature.lawn ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Lawn
					</p>
					<p>
						{property.feature && property.feature.microwave ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Microwave
					</p>
					<p>
						{property.feature && property.feature.oven ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Oven
					</p>
					<p>
						{property.feature && property.feature.sauna ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Sauna
					</p>
				</Col>
				<Col md={4} className="mb-3">
					<p>
						{property.feature && property.feature.pool ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Pool
					</p>
					<p>
						{property.feature && property.feature.wifi ? (
							<BsCheck className="text-primary fs-5" />
						) : (
							<BsX className="text-danger fs-4" />
						)}{' '}
						Wifi
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default PropertyFeatures;
