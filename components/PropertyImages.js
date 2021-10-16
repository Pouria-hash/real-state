import { useState } from 'react';
import styles from '@/styles/PropertyImages.module.scss';
import { Row, Col } from 'react-bootstrap';

const PropertyImages = ({ images }) => {
	const [ showImage, setShowImage ] = useState(images[0]);
	console.log(showImage);

	const handleClick = (image) => {
		setShowImage(image);
	};
	return (
		<div>
			<Row>
				<Col lg={7} className={styles.showImageContainer}>
					<img src={showImage.path} alt={showImage.filename} className={styles.showImage} />
				</Col>
				<Col lg={5}>
					<div className={styles.imagesContainer}>
						{images.map((image, index) => (
							<div key={index} className={styles.imageContainer}>
								<img
									src={image.path}
									alt="property-image"
									className={styles.image}
									onClick={() => handleClick(image)}
								/>
							</div>
						))}
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default PropertyImages;
