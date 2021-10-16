import styles from '@/styles/dashboard/DashboardHeader.module.scss';
import { Row, Col } from 'react-bootstrap';

const DashboardHeader = () => {
	return (
		<div className={styles.dashboardHeaderContainer}>
			<Row>
				<Col md={5} className="mb-3">
					<div className={styles.item} style={{ backgroundColor: '#06d6a0' }}>
						<div className={styles.icon}>icon</div>
						<div className={styles.itemContent}>
							<p>253</p>
							<p>Total Properties</p>
						</div>
					</div>
				</Col>
				<Col md={5} className="mb-3">
					<div className={styles.item} style={{ backgroundColor: '#ffd166' }}>
						<div className={styles.icon}>icon</div>
						<div className={styles.itemContent}>
							<p>50</p>
							<p>Total Reviews</p>
						</div>
					</div>
				</Col>
				<Col md={5}>
					<div className={styles.item} style={{ backgroundColor: '#118ab2' }}>
						<div className={styles.icon}>icon</div>
						<div className={styles.itemContent}>
							<p>10</p>
							<p>Total Posts</p>
						</div>
					</div>
				</Col>
				<Col md={5}>
					<div className={styles.item} style={{ backgroundColor: '#d90429' }}>
						<div className={styles.icon}>icon</div>
						<div className={styles.itemContent}>
							<p>20</p>
							<p>Messages</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default DashboardHeader;
