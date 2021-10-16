import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import seperate from '@/lib/seperate';
import { Fragment } from 'react';

const RecentSlider = ({ properties }) => {
	return (
		<div className="rounded shadow p-4 mt-5 d-lg-block d-none" style={{ backgroundColor: '#fff' }}>
			<h4 className="mb-3">Recent Property</h4>
			<div>
				{properties.slice(0, 3).map((property) => (
					<Row key={property._id} className="mb-2">
						<Col xs={4}>
							<Link href={`/properties/${property.slug}`}>
								<Fragment>
									<Image
										src={property.images[0].path}
										alt={property.title}
										width={160}
										height={140}
										className="rounded "
									/>
								</Fragment>
							</Link>
						</Col>
						<Col>
							<Link href={`/properties/${property.slug}`}>
								<h5 style={{ cursor: 'pointer' }}>{property.title}</h5>
							</Link>
							<p className="text-danger mb-3">$ {seperate(property.price)}</p>
							<p className="text-muted ">
								Beds: {property.rooms}
								{'    '} Baths: {property.bathrooms}
							</p>
						</Col>
					</Row>
				))}
			</div>
		</div>
	);
};

export default RecentSlider;
