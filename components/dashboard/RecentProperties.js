import styles from '@/styles/dashboard/RecentProperties.module.scss';
import { BsPencilSquare } from 'react-icons/bs';
import { useRouter } from 'next/router';
import moment from 'moment';

const RecentProperties = ({ properties }) => {
	const router = useRouter();
	return (
		<div className="my-5">
			<h3>Recent Properties</h3>
			<div className="table-responsive">
				<table className="table table-striped  table-hover">
					<thead>
						<tr>
							<th>Property Name</th>
							<th>Date</th>
							<th>Status</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{properties.slice(0, 6).map((property) => (
							<tr key={property._id}>
								<td>{property.title}</td>
								<td>{moment(property.createdAt).format('YYYY-MM-DD  ')}</td>
								<td>{property.service}</td>
								<td onClick={() => router.push(`/properties/edit/${property._id}`)}>
									<BsPencilSquare />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentProperties;
