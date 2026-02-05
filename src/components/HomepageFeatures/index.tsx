import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	description: string;
};

const FEATURES: FeatureItem[] = [
	{
		title: '20+ Bible versions',
		description: 'Choose the translation that fits your reading style.',
	},
	{
		title: '10+ languages',
		description: 'Share Scripture in the language your community speaks.',
	},
	{
		title: 'Always improving',
		description: 'Open source and built by one person, with steady updates.',
	},
];

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.sectionHeader}>
					<Heading as="h2" className={styles.sectionTitle}>
						Simple, clear, and easy to use
					</Heading>
					<p className={styles.sectionSubtitle}>
						Scriptura keeps Scripture close, whether you’re sharing in a server or
						reading on your own.
					</p>
				</div>

				<div className={clsx(styles.featureGrid, styles.simpleGrid)}>
					{FEATURES.map((feature) => (
						<article key={feature.title} className={styles.featureCard}>
							<Heading as="h3" className={styles.featureTitle}>
								{feature.title}
							</Heading>
							<p className={styles.featureDescription}>{feature.description}</p>
						</article>
					))}
				</div>

				<div className={styles.infoRow}>
					<div className={styles.infoCard}>
						<Heading as="h3" className={styles.featureTitle}>
							Users first
						</Heading>
						<p className={styles.featureDescription}>
							Customizable formatting, preferred translations, and flexible settings
							that fit how your community shares Scripture.
					</div>
					<div className={styles.infoCard}>
						<Heading as="h3" className={styles.featureTitle}>
							Open source
						</Heading>
						<p className={styles.featureDescription}>
							Built by one person and improved in public, with community feedback.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
