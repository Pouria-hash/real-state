import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.css';
import Sidebar from './Sidebar';
import { MdDashboard } from 'react-icons/md';
import { FiLogOut, FiLogIn } from 'react-icons/fi';

export default function Header({ bg }) {
	const router = useRouter();
	const pathName = router.asPath;

	const [ navActive, setNavActive ] = useState(false);
	const [ showSidebar, setShowSidebar ] = useState(false);

	const [ session, loading ] = useSession();

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY >= 200) {
			setNavActive(true);
		}
		if (currentScrollY < 200) {
			setNavActive(false);
		}
	};

	useEffect(
		() => {
			window.addEventListener('scroll', handleScroll, { passive: true });
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		},
		[ navActive ]
	);

	const handleSidebar = () => {
		setShowSidebar(true);
	};

	const handleLogout = () => {
		signOut({ redirect: false });
		router.push('/');
	};

	return (
		<div
			className={`${styles.header} ${navActive ? styles.active : null} ${pathName !== '/'
				? styles.sticky
				: null} `}
			style={{ backgroundColor: bg }}
		>
			<div className={styles.container}>
				<div className={styles.brand}>
					<h1>Real Advisor</h1>
				</div>
				<nav className={`${styles.nav}`}>
					<div className={styles.expande}>
						<ul>
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

							{!loading && session ? (
								<Fragment>
									<li className="border-start">
										<Link href="/dashboard">
											<a>
												<MdDashboard /> Dashboard
											</a>
										</Link>
									</li>
									<li>
										<button onClick={handleLogout} className="btn btn-danger" type="button">
											<FiLogOut /> Logout
										</button>
									</li>
								</Fragment>
							) : (
								<li className="border-start">
									<Link href="/user/login">
										<a>
											<FiLogIn /> Login
										</a>
									</Link>
								</li>
							)}
						</ul>
					</div>
					<div className={styles.noExpande}>
						<button className="btn btn-primary" id={styles.btnShow} onClick={handleSidebar}>
							show
						</button>

						<Sidebar
							show={showSidebar}
							onClose={() => setShowSidebar(false)}
							session={session}
							logout={handleLogout}
						/>
					</div>
				</nav>
			</div>
		</div>
	);
}
