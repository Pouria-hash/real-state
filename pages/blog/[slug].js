import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { Row, Col } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import styles from '@/styles/PostDetailPage.module.scss';
import moment from 'moment';

const PostDetailPage = ({ post, message }) => {
	const router = useRouter();
	const { slug } = router.query;

	if (message) {
		return (
			<Layout title={`${slug} | Real Advisor`}>
				<h2>{message}</h2>
			</Layout>
		);
	}
	return (
		<Layout title={`${slug} | Real Advisor`}>
			<Row>
				<Col md={8}>
					<div className={styles.postContainer}>
						<div className={styles.post}>
							<h1>{post.title}</h1>
							<div className={styles.postDetails}>
								<p>
									<span>Author: </span>
									{post.author.name}
								</p>
								<p>
									<FaCalendarAlt /> {moment(post.createdAt).format('YYYY/MM/DD')}
								</p>
							</div>
							<div className={styles.imageContainer}>
								<img src={post.image} alt={post.title} className={styles.image} />
							</div>
							<div className={styles.descriptionContainer}>
								<p>{post.description}</p>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Layout>
	);
};

export const getServerSideProps = async ({ params }) => {
	const slug = params.slug;
	const res = await fetch(`${API_URL}/api/blog/${slug}`, {
		method: 'GET'
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
			post: data
		}
	};
};

export default PostDetailPage;
