import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Count.module.css'

let cards = [
	'2_of_diamonds',
	'3_of_diamonds',
	'4_of_diamonds',
	'5_of_diamonds',
	'6_of_diamonds',
	'7_of_diamonds',
	'8_of_diamonds',
	'9_of_diamonds',
	'10_of_diamonds',
	'jack_of_diamonds2',
	'queen_of_diamonds2',
	'king_of_diamonds2',
	'ace_of_diamonds'
];

const increase = (e) =>  {
	let element = e.target.parentElement.children[0];
	let value = element.innerHTML
	element.innerHTML = parseInt(value) + 1;
}

const decrease = (e) =>  {
	let element = e.target.parentElement.children[0];
	let value = element.innerHTML
	element.innerHTML = parseInt(value) - 1;
}

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
					{cards.map(c => {
						let src = '/cards/' + c + '.png';
						return (
							<div className={styles.card}>
								<Image src={src} alt="card" width={50} height={75} />
								<div>
									<p id={c}>0</p>
									<button onClick={increase} className={styles.green}>+</button>
									<button onClick={decrease} className={styles.red}>-</button>
								</div>
							</div>
					)})}
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
