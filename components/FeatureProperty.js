import styles from '@/styles/FeatureProperty.module.scss';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import { Image, Row, Col } from 'react-bootstrap';
import seperate from '@/lib/seperate';

const FeatureProperty = ({ properties, error }) => {
	if (error) {
		return (
			<div>
				<h2>{error}</h2>
			</div>
		);
	}
	return (
		<div className={styles.container}>
			<div className="text-center text-muted mb-5">
				<h2>Featured Properties</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className={styles.properties}>
				{properties.slice(0, 5).map((property) => (
					<div key={property._id} className={`border ${styles.propertyContainer}`}>
						<Link href={`/properties/${property.slug}`}>
							<div className={styles.imgContainer}>
								<p className={styles.service}>For {property.service.toUpperCase()}</p>
								<Image src={property.images[0].path} alt={property.title} />
								<p className={styles.price}>$ {seperate(property.price)}</p>
							</div>
						</Link>

						<div className={styles.content}>
							<p className="text-danger ">{property.type.toUpperCase()}</p>
							<Link href={'/properties/${property.slug}'}>
								<h5>{property.title}</h5>
							</Link>

							<p>
								<FaLocationArrow />{' '}
								{property.location.district +
									', ' +
									property.location.city +
									', ' +
									property.location.state}
							</p>

							<div className={styles.details}>
								<Row>
									<Col>
										<p>Sq: {property.area} m2</p>
									</Col>
									<Col>
										<p>Bed Room: {property.rooms} </p>
									</Col>
								</Row>
								<Row>
									<Col>
										<p>Bath Room: {property.bathrooms}</p>
									</Col>
									<Col>
										<p>Garage: {property.garage} </p>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeatureProperty;
