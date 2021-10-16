import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import PageTitle from './PageTitle';

const Layout = ({ title, description, keywords, children, home, pageLink, pageLinkName, pageSubLink, pageTitle }) => {
	const router = useRouter();

	const pathName = router.asPath;
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<div
				className={`d-flex flex-column h-100 ${router.asPath === '/properties' ? 'bg-light' : null}`}
				style={{ minHeight: '100vh', minWidth: '320px' }}
			>
				<Header bg={!pageTitle && pathName !== '/' && '#fff'} />
				{home && <Hero />}
				{pathName !== '/' &&
				pageTitle && (
					<PageTitle
						pageLink={pageLink}
						pageLinkName={pageLinkName}
						pageSubLink={pageSubLink}
						pageTitle={pageTitle}
					/>
				)}
				<div className="container mx-auto my-auto p-3">{children}</div>
				<Footer />
			</div>
		</Fragment>
	);
};

Layout.defaultProps = {
	title: 'Real Advisor',
	description: 'you can let us sell or rent your property',
	keywords: 'Real Advisor , house , property , apartment , land'
};

export default Layout;
