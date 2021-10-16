import Layout from '@/components/Layout';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Col, Row } from 'react-bootstrap';

const AboutPage = () => {
	return (
		<Layout title="About | Real Advisor" pageLink="about" pageLinkName="About" pageTitle="About Us">
			<h1 className="mb-5">About Real Advisor</h1>
			<Row>
				<Col md={8}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odio id voluptatibus incidunt
						cum? Atque quasi eum debitis optio ab. Esse itaque officiis tempora possimus odio rerum aperiam
						ratione, sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odio id voluptatibus incidunt
						cum? Atque quasi eum debitis optio ab. Esse itaque officiis tempora possimus odio rerum aperiam
						ratione, sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.
					</p>
				</Col>
			</Row>
			<div className="my-5">
				<WhyChooseUs />
			</div>
		</Layout>
	);
};

export default AboutPage;
