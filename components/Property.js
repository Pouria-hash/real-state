import Link from 'next/link';
// import Image from 'next/image';
import { Image, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Property.module.scss';
import seperate from '@/lib/seperate';
import { FaLocationArrow } from 'react-icons/fa';

const Property = ({ properties }) => {
	return (
		<div className={styles.properties}>
			{properties.map((property, index) => (
				<div key={index} className={`border ${styles.propertyContainer}`}>
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

						<p className="">
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
	);
};

export default Property;
