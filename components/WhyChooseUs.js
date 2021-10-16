import styles from '@/styles/WhyChooseUs.module.scss';
import { FaHandsHelping, FaCalculator } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';

const reasons = [
	{
		icon: 'FaHandsHelping',
		title: 'Trusted By Thousands',
		text: 'Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.'
	},
	{
		icon: 'GiHouse',
		title: 'Wide Renge Of Properties',
		text: 'Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.'
	},
	{
		icon: 'FaCalculator',
		title: 'Financing Made Easy',
		text: 'Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.'
	}
];

const WhyChooseUs = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.title} text-center`}>
				<h2>Why Choose Us</h2>
				<p>We provide full service at every step.</p>
			</div>
			<div className={styles.cards}>
				{reasons.map((reason, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.iconContainer}>
							{reason.icon === 'FaHandsHelping' ? (
								<FaHandsHelping className={styles.icon} />
							) : reason.icon === 'GiHouse' ? (
								<GiHouse className={styles.icon} />
							) : reason.icon === 'FaCalculator' ? (
								<FaCalculator className={styles.icon} />
							) : null}
						</div>
						<div className={styles.cardBody}>
							<h5>{reason.title}</h5>
							<p>{reason.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhyChooseUs;
