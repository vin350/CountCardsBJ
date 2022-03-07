import ViewSource from '../components/view-source'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';

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
		<div className={styles.container}>
			<Header />
			<ViewSource />

			<main className={styles.main}>
				{renderThemeChanger()}
				<h1 className={styles.title}>
					Welcome to{' '}
					<a>Count Cards BlackJack!</a>
				</h1>


				<p className={styles.description}>
					Developed by{' '}
					<code className="code"><a href="https://github.com/vin350" target="_blank">vin35</a></code>
				</p>

				<div className={styles.grid}>
					<Link href="/count">
						<a className={styles.card}>
							<h2>Get Started &rarr;</h2>
							<p>Get started counting cards in BlackJack.</p>
						</a>
					</Link>

					<Link href="/MartinGale">
						<a className={styles.card}>
							<h2>MartinGale &rarr;</h2>
							<p>MartinGale Calculator. To compensate your loss.</p>
						</a>
					</Link>

					<a href="https://en.wikipedia.org/wiki/Card_counting" target="_blank" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Count Cards in BlackJack!</p>
					</a>
				</div>
			</main>

			<Footer />
		</div>
	)
}
