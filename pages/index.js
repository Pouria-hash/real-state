import { Fragment } from 'react';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Layout from '@/components/Layout';
import FeatureProperty from '@/components/FeatureProperty';
import FindPropertyByCity from '@/components/FindPropertyByCity';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
	const { data: properties, error } = useSWR(`/api/properties`, fetcher);

	return (
		<Layout home={true}>
			{!properties || properties.length === 0 ? (
				<p>Loading...</p>
			) : (
				<Fragment>
					<FeatureProperty properties={properties} error={error} />
					<FindPropertyByCity properties={properties} />
				</Fragment>
			)}
			<WhyChooseUs />
		</Layout>
	);
}
