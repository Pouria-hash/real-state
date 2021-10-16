import { FaCalendarAlt, FaAngleRight } from 'react-icons/fa';
import moment from 'moment';
import Link from 'next/link';
import styles from '@/styles/PostContainer.module.scss';

const PostContainer = ({ posts }) => {
	return (
		<div className={styles.posts}>
			{posts.map((post) => (
				<div className={styles.post} key={post._id}>
					<div className={styles.postBody}>
						<img src={post.image} alt={post.title} className={styles.image} />
						<div className={styles.content}>
							<h3>{post.title}</h3>
							<p>{post.description.substring(0, 300)}</p>
						</div>
					</div>
					<div className={styles.postFooter}>
						<div className={styles.postFooterContent}>
							<p>Author: {post.author.name}</p>
							<p>
								<FaCalendarAlt /> {moment(post.createdAt).format('YYYY/MM/DD')}
							</p>
						</div>
						<div className={styles.postFooterLink}>
							<Link href={`/blog/${post.slug}`}>
								<a>
									Read More <FaAngleRight />
								</a>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostContainer;
