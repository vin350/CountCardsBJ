import ViewSource from '../components/view-source'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Simple.module.css';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const increase = (e) => {
	let result = document.getElementById('result')
	let value = result.innerHTML
	result.innerHTML = parseInt(value) + 1;
}

const decrease = (e) => {
	let result = document.getElementById('result')
	let value = result.innerHTML
	result.innerHTML = parseInt(value) - 1;
}

function ResetCount() {
	let result = document.getElementById('result')
	result.innerHTML = 0;
}

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<ViewSource />

			<main className={styles.main}>
				<p className={styles.description}>
					Developed by {' '}
					<code className="code"><a href="https://github.com/vin350" target="_blank">vin35</a></code>
				</p>

				<div className={styles.grid}>
					<button onClick={increase} className={styles.btn_green}><PlusIcon /></button>
					<button onClick={decrease} className={styles.btn_red}><MinusIcon /></button>
				</div>

				<div className={styles.grid}>
					<div className={styles.card}>
						<p>Result: <span id="result" className="code">0</span></p>
					</div>
				</div>

				<div className={styles.grid}>
					<Link href="/">
						<a className={styles.card}>
							<h2>&larr; Back to Home</h2>
						</a>
					</Link>

					<a className={styles.card} onClick={ResetCount} style={{ cursor: 'pointer' }}>
						<h2>Reset Count</h2>
					</a>

					<Link href="/count">
						<a className={styles.card}>
							<h2>Normal Mode &rarr;</h2>
						</a>
					</Link>
				</div>
			</main>

			<Footer />
		</div>
	)
}
