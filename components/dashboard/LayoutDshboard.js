import Head from 'next/head';
import Header from '@/components/Header';
import { Row, Col } from 'react-bootstrap';
import Footer from '@/components/Footer';
import DashboardSidebar from './DashboardSidebar';
import { Fragment } from 'react';

const LayoutDshboard = ({ title, description, user, children }) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<div className="d-flex flex-column h-100 " style={{ minHeight: '100vh', minWidth: '328px' }}>
				<Header />
				<Row className="m-0">
					<Col lg={3} className="p-0">
						<DashboardSidebar user={user} />
					</Col>
					<Col lg={9}>
						<div className="my-5">{children}</div>
					</Col>
				</Row>

				<div className="mt-auto">
					<Footer />
				</div>
			</div>
		</Fragment>
	);
};

LayoutDshboard.defaultProps = {
	title: 'Real Advisor',
	description: 'Dashboard'
};

export default LayoutDshboard;
