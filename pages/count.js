import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Count.module.css';

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

const increase = (e) => {
	let element = e.target.parentElement.children[0];
	let value = element.innerHTML
	element.innerHTML = parseInt(value) + 1;
	Count()
}

const decrease = (e) => {
	let element = e.target.parentElement.children[0];
	let value = element.innerHTML
	element.innerHTML = parseInt(value) - 1;
	Count()
}

function Count() {
	let count = 0;
	let result = document.getElementById('result')
	cards.forEach(card => {
		switch (card) {
			case '2_of_diamonds': count += parseInt(document.getElementById(card).innerHTML); break;
			case '3_of_diamonds': count += parseInt(document.getElementById(card).innerHTML); break;
			case '4_of_diamonds': count += parseInt(document.getElementById(card).innerHTML); break;
			case '5_of_diamonds': count += parseInt(document.getElementById(card).innerHTML); break;
			case '6_of_diamonds': count += parseInt(document.getElementById(card).innerHTML); break;
			case '7_of_diamonds': count += parseInt(0); break;
			case '8_of_diamonds': count += parseInt(0); break;
			case '9_of_diamonds': count += parseInt(0); break;
			case '10_of_diamonds': count += parseInt(document.getElementById(card).innerHTML) * -1; break;
			case 'jack_of_diamonds2': count += parseInt(document.getElementById(card).innerHTML) * -1; break;
			case 'queen_of_diamonds2': count += parseInt(document.getElementById(card).innerHTML) * -1; break;
			case 'king_of_diamonds2': count += parseInt(document.getElementById(card).innerHTML) * -1; break;
			case 'ace_of_diamonds': count += parseInt(document.getElementById(card).innerHTML) * -1; break;
		}
	})
	result.innerHTML = parseInt(count)
}

function ResetCount() {
	cards.forEach(card => {
		let element = document.getElementById(card)
		element.innerHTML = 0
	})
	Count()
}

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />

			<main className={styles.main}>
				<p className={styles.description}>
					Developed by {' '}
					<code className="code"><a href="https://github.com/vin350" target="_blank">vin35</a></code>
				</p>

				<div className={styles.grid}>
					{cards.map(c => {
						let src = '/cards/' + c + '.png';
						return (
							<div className={styles.card}>
								<div className="flex justify-center">
									<Image src={src} alt="card" width={50} height={75} />
								</div>
								<div>
									<p id={c} className="text-center">0</p>
									<button onClick={increase} className={styles.btn_green}>+</button>
									<button onClick={decrease} className={styles.btn_red}>-</button>
								</div>
							</div>
						)
					})}
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

					<a className={styles.card} onClick={ResetCount} style={{ cursor: 'pointer' }}>
						<h2>Reset Count</h2>
					</a>
				</div>
			</main>

			<Footer />
		</div>
	)
}
