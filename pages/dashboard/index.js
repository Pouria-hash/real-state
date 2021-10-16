import { getSession } from 'next-auth/client';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import LayoutDashboard from '@/components/dashboard/LayoutDshboard';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import RecentProperties from '@/components/dashboard/RecentProperties';

const Dashboard = ({ user, message }) => {
	const { data: properties, error } = useSWR('/api/properties', fetcher, { refreshInterval: 5000 });

	if (error) {
		return (
			<Layout title="dashboard | Real Advisor">
				<h2>{error.message}</h2>
			</Layout>
		);
	}
	if (message) {
		return (
			<Layout title="dashboard | Real Advisor">
				<h2>{message}</h2>
			</Layout>
		);
	}

	return (
		<LayoutDashboard title="dashboard | Real Advisor" user={user}>
			<h2>Manage Dashboard</h2>
			<DashboardHeader />
			{!properties ? <h5>Loading...</h5> : <RecentProperties properties={properties} />}
		</LayoutDashboard>
	);
};

export const getServerSideProps = async ({ req }) => {
	const session = await getSession({ req });

	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}
	const res = await fetch(`${API_URL}/api/user/profile`, {
		method: 'POST',
		body: JSON.stringify(session),
		headers: { 'Content-Type': 'application/json' }
	});

	if (!res.ok) {
		const errorData = await res.json();

		return {
			props: {
				message: errorData.message
			}
		};
	}
	const data = await res.json();
	return {
		props: {
			user: data
		}
	};
};

export default Dashboard;
