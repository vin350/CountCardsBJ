import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Count Cards BJ</title>
				<meta name="description" content="Site to Count Cards in BlackJack" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to{' '}
					<a>Count Cards BlackJack!</a>
				</h1>

				<p className={styles.description}>
					Developed by {' '}
					<code className={styles.code}><a href="https://github.com/vin350" target="_blank">vin35</a></code>
				</p>

				<div className={styles.grid}>
					<Link href="/count">
						<a className={styles.card}>
							<h2>Get Started &rarr;</h2>
							<p>Get started counting cards in BlackJack.</p>
						</a>
					</Link>

					<a href="https://en.wikipedia.org/wiki/Card_counting" target="_blank" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Count Cards in BlackJack!</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
