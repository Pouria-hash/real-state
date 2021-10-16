import styles from '@/styles/DashboardSidebar.module.scss';
import Link from 'next/link';
import { BsLayersFill, BsPersonFill, BsCollectionFill, BsFilePost } from 'react-icons/bs';

const DashboardSidbar = ({ user }) => {
	return (
		<div className={styles.sidebarContainer}>
			<div className={styles.userContainer}>
				<h2>Hi {user.name}</h2>
			</div>
			<div className={styles.sidebar}>
				<ul>
					<Link href="/dashboard">
						<li>
							<BsLayersFill /> Dashboard
						</li>
					</Link>
					<Link href="/dashboard/profile">
						<li>
							<BsPersonFill /> Profile
						</li>
					</Link>
					<Link href="/dashboard/properties">
						<li>
							{' '}
							<BsCollectionFill /> My Properties
						</li>
					</Link>
					<Link href="/dashboard/addproperty">
						<li>
							<BsFilePost /> Add Property
						</li>
					</Link>
					<Link href="/dashboard/posts">
						<li>
							<BsCollectionFill />My Posts
						</li>
					</Link>
					<Link href="/dashboard/addpost">
						<li>
							<BsFilePost /> Add Post
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default DashboardSidbar;
