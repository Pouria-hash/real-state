import Link from 'next/link';
import styles from '@/styles/Sidebar.module.css';
import { Fragment } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FiLogOut, FiLogIn } from 'react-icons/fi';

const Sidebar = ({ show, onClose, session, logout }) => {
	const handleClose = (e) => {
		e.preventDefault();
		onClose();
	};

	return (
		<div className={show ? styles.overlay : null}>
			<div className={`${styles.sidebarContainer} ${show && styles.show}`}>
				<div className={styles.sidebar}>
					<div className="text-center mb-4">
						<button onClick={handleClose} className="btn btn-primary" id={styles.btnClose}>
							close
						</button>
					</div>
					<h2>Real Advisor</h2>
					<ul className="list-group">
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/properties">
								<a>Properties</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a>Contact</a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						{session ? (
							<Fragment>
								<li>
									<Link href="/dashboard">
										<a>
											<MdDashboard /> Dashboard
										</a>
									</Link>
								</li>
								<li>
									<button onClick={logout} className="btn btn-danger">
										<FiLogOut /> Logout
									</button>
								</li>
							</Fragment>
						) : (
							<li>
								<Link href="/user/login">
									<a>
										<FiLogIn /> Login
									</a>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
