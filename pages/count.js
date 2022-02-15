import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Count.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Count Cards BJ</title>
				<meta name="description" content="Site to Count Cards in BlackJack" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<p className={styles.description}>
					Developed by {' '}
					<code className={styles.code}>vin35</code>
				</p>

				<div className={styles.grid}>
					<div className={styles.card}>
						<Image src="/cards/2_of_clubs.png" alt="card" width={50} height={75} />
						<p id='card-2'>0</p>
						<button>+</button>
						<button>-</button>
					</div>
				</div>

				<div className={styles.grid}>
					<div className={styles.card}>
						<p>Result: <span id="result" className={styles.code}>0</span></p>
					</div>
				</div>

				<div className={styles.grid}>
					<Link href="/">
						<a className={styles.card}>
							<h2>&larr; Back to Home</h2>
						</a>
					</Link>

					<a className={styles.card}>
						<h2>Reset Count</h2>
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
