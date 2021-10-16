import Layout from '@/components/Layout';
import styles from '@/styles/Blog.module.scss';
import { API_URL } from '@/config/index';
import { Col, Row } from 'react-bootstrap';

import PostContainer from '@/components/PostContainer';

const Blog = ({ posts, message }) => {
	if (message) {
		return (
			<Layout title="Blog | Real Advisor">
				<h2>{message}</h2>
			</Layout>
		);
	}
	return (
		<Layout title="Blog | Real Advisor">
			<h1>Blog</h1>
			<Row>
				<Col md={8}>
					<PostContainer posts={posts} />
				</Col>
				<Col md={4} />
			</Row>
		</Layout>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/api/blog`, {
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
			posts: data
		}
	};
}

export default Blog;
