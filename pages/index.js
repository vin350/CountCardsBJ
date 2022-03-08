import ViewSource from '../components/view-source'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as motionConfig from '../components/motionConfig';

export default function Home() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<SunIcon className="w-7 h-7" role="button" onClick={() => setTheme('light')} />
			)
		} else {
			return (
				<MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
			)
		}
	}
	return (
		<motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
			<div className={styles.container}>
				<Header />
				<ViewSource />

				<main className={styles.main}>
					<motion.div
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
					>
						{renderThemeChanger()}
					</motion.div>
					
					<motion.div
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
					>
						<h1 className={styles.title}>
							Welcome to{' '}
							<a>Count Cards BlackJack!</a>
						</h1>
					</motion.div>

					<motion.div
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
					>
						<p className={styles.description}>
							Developed by{' '}
							<code className="code"><a href="https://github.com/vin350" target="_blank">vin35</a></code>
						</p>
					</motion.div>

					<motion.div variants={motionConfig.stagger} className={styles.grid}>
						<Link href="/count">
							<motion.a
								variants={motionConfig.fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={styles.card}
							>
								<h2>Get Started &rarr;</h2>
								<p>Get started counting cards in BlackJack.</p>
							</motion.a>
						</Link>

						<Link href="/MartinGale">
							<motion.a
								variants={motionConfig.fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={styles.card}
							>
								<h2>MartinGale &rarr;</h2>
								<p>MartinGale Calculator. To compensate your loss.</p>
							</motion.a>
						</Link>

						<motion.a
							variants={motionConfig.fadeInUp}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles.card}
							href="https://en.wikipedia.org/wiki/Card_counting"
							target="_blank"
						>
							<h2>Learn &rarr;</h2>
							<p>Learn about Count Cards in BlackJack!</p>
						</motion.a>
					</motion.div>
				</main>

				<Footer />
			</div>
		</motion.div>
	)
}
