import styles from '@/styles/FindPropertyByCity.module.scss';
import Link from 'next/link';

const numberOfProperties = (properties, city) => {
	const numberOfProperties = Number(properties.filter((property) => property.location.city === city).length);
	return numberOfProperties;
};

const FindPropertyByCity = ({ properties }) => {
	const cities = [
		{
			name: 'ahvaz',
			properties: numberOfProperties(properties, 'Ahvaz'),
			image:
				'https://res.cloudinary.com/djrg7toqj/image/upload/v1623423648/Real-Advisor/ashkan-forouzani-J4idEoFc8k8-unsplash_1_u3o3dr.jpg'
		},
		{
			name: 'tehran',
			properties: numberOfProperties(properties, 'Tehran'),
			image:
				'https://res.cloudinary.com/djrg7toqj/image/upload/v1623423721/Real-Advisor/siamak-kVACg-kVKA0-unsplash_qbb04h.jpg'
		},

		{
			name: 'tabriz',
			properties: numberOfProperties(properties, 'Tabriz'),
			image:
				'https://res.cloudinary.com/djrg7toqj/image/upload/v1623424209/Real-Advisor/morteza-kholghi-6jBKmH4klU8-unsplash_xsobzj.jpg'
		},
		{
			name: 'shiraz',
			properties: numberOfProperties(properties, 'Shiraz'),
			image:
				'https://res.cloudinary.com/djrg7toqj/image/upload/v1623424109/Real-Advisor/steven-su-AxhfHp6fJ2M-unsplash_ga1arh.jpg'
		}
	];

	return (
		<div className={styles.container}>
			<div className={`${styles.title} text-center`}>
				<h2>Find Properties in These Cities</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
			<div className={styles.cities}>
				{cities.map((city, index) => (
					<Link href="#">
						<div key={index} className={styles.city}>
							<div style={{ backgroundImage: `url(${city.image})` }} className={styles.image} />
							<div className={styles.cityName}>
								<p>{city.name}</p>
							</div>
							<div className={styles.cityProperties}>
								<p>{city.properties} Properties</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default FindPropertyByCity;
