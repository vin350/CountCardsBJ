import ViewSource from '../components/view-source'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Simple.module.css';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import * as motionConfig from '../components/motionConfig';

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
		<motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
			<div className={styles.container}>
				<Header />
				<ViewSource />

				<main className={styles.main}>
					<motion.div
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
					>
						<p className={styles.description}>
							Developed by {' '}
							<code className="code"><a href="https://github.com/vin350" target="_blank">vin35</a></code>
						</p>
					</motion.div>

					<motion.div variants={motionConfig.stagger} className="inline-flex">
						<motion.button
							variants={motionConfig.fadeInUp}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
							className={styles.btn_green}
							onClick={increase}
						>
							<PlusIcon />
						</motion.button>

						<motion.button
							variants={motionConfig.fadeInUp}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
							className={styles.btn_red}
							onClick={decrease}
						>
							<MinusIcon />
						</motion.button>
					</motion.div>

					<motion.div variants={motionConfig.stagger} className={styles.grid}>
						<motion.div
							variants={motionConfig.fadeInUp}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles.card}
						>
							<p>Result: <span id="result" className="code">0</span></p>
						</motion.div>
					</motion.div>

					<motion.div variants={motionConfig.stagger} className={styles.grid}>
						<Link href="/">
							<motion.a
								variants={motionConfig.fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={styles.card}
							>
								<h2>&larr; Back to Home</h2>
							</motion.a>
						</Link>

						<motion.a
							variants={motionConfig.fadeInUp}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={styles.card}
							onClick={ResetCount}
							style={{ cursor: 'pointer' }}
						>
							<h2>Reset Count</h2>
						</motion.a>

						<Link href="/count">
							<motion.a
								variants={motionConfig.fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={styles.card}
							>
								<h2>Normal Mode &rarr;</h2>
							</motion.a>
						</Link>
					</motion.div>
				</main>

				<Footer />
			</div>
		</motion.div>
	)
}
