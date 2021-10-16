import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { Col, Row } from 'react-bootstrap';
import seperate from '@/lib/seperate';
import PropertyImages from '@/components/PropertyImages';
import PropertyDetails from '@/components/PropertyDetails';
import Reviews from '@/components/Reviews';

const PropertyPage = ({ property, message }) => {
	if (message) {
		return (
			<Layout title="error | Real Advisor">
				<h4>{message}</h4>
			</Layout>
		);
	}

	return (
		<Layout
			title={`${property.title} | Real Advisor`}
			pageTitle={property.title}
			pageLink="properties"
			pageLinkName="Properties"
			pageSubLink={property.slug}
		>
			<Row>
				<Col>
					<h2>{property.title}</h2>
					<p>
						{property.location.district} , {property.location.city} , {property.location.state}
					</p>
				</Col>
				<Col className="text-end">
					<h2>$ {seperate(property.price)}</h2>
				</Col>
			</Row>

			<PropertyImages images={property.images} />
			<Row className="mt-5">
				<Col md={8}>
					<PropertyDetails property={property} />
					<Reviews />
				</Col>
				<Col md={4}>
					<div className="card p-4 shadow-sm">
						<h5 className="mb-4 fs-4 border-bottom pb-3">Agent Information</h5>

						<div className="ms-5">
							<p className="fs-5 text-muted">{property.author.name}</p>
							<p className="text-muted">Agent of Property</p>
							<p className="text-muted ">
								<strong>Email: </strong>
								{property.author.email}
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Layout>
	);
};

export async function getServerSideProps({ params }) {
	const res = await fetch(`${API_URL}/api/properties/${params.slug}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
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
			property: data
		}
	};
}

export default PropertyPage;
