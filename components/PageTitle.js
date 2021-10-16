import styles from '@/styles/PageTitle.module.css';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const PageTitle = ({ pageTitle, pageLink, pageLinkName, pageSubLink }) => {
	return (
		<div className={styles.pgTitContainer}>
			<h1>{pageTitle}</h1>
			<p>
				<Link href="/">
					<a>Home</a>
				</Link>{' '}
				<BsArrowRight className="text-light" />{' '}
				<Link href={`/${pageLink}`}>
					<a>{pageLinkName.toUpperCase()}</a>
				</Link>{' '}
				{pageSubLink && (
					<Fragment>
						<BsArrowRight className="text-light" />
						<Link href="#">
							<a>{pageSubLink.toUpperCase()}</a>
						</Link>
					</Fragment>
				)}
			</p>
		</div>
	);
};

export default PageTitle;
