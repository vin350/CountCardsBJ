import ViewSource from '../components/view-source'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/MartinGale.module.css';
import { motion } from 'framer-motion';
import * as motionConfig from '../components/motionConfig';

const nTable = [
  1, 2, 3, 4, 5
]

function MartinGale() {
  let balance = parseInt(document.getElementById('balance').value);
  let bet = parseInt(document.getElementById('bet').value);

  let martingale_count = 0;

  do {
    martingale_count += 1;
    balance -= bet;
    bet *= 2;
    for (let i = martingale_count; i <= 5; i++) {
      document.getElementById(i + '_over').innerHTML = 0;
    }
    document.getElementById(martingale_count + '_over').innerHTML = balance;
  } while ((balance - bet) >= 0 && martingale_count < 5);
  for (let i = 1; i <= 5; i++) {
    document.getElementById(i + '_id').style.removeProperty('color');
  }
  document.getElementById(martingale_count + '_id').style.color = 'springgreen';
}

function initialBet() {
  let bet = parseInt(document.getElementById('bet').value);

  for (let i = 1; i <= 5; i++) {
    document.getElementById(i + '_value').innerHTML = bet;
    bet *= 2;
  }
  MartinGale();
}

export default function Home() {
  let balance = 100;
  let chance = 100;

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

          <motion.div className={styles.grid}>
            <motion.div
              variants={motionConfig.fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.card}
            >
              <p>Balance: <input
                type="number" min="1" placeholder="100" defaultValue={100} id="balance"
                className="input balance"
                onChange={MartinGale}
              />
              </p>
            </motion.div>

            <motion.div
              variants={motionConfig.fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.card}
            >
              <p>Initial Bet: <input
                type="number" min="1" placeholder="2" defaultValue={2} id="bet"
                className="input balance"
                onChange={initialBet}
              />
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={motionConfig.fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col"
          >
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          Hand
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          Bet Value
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          Chance of losing
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          LeftOvers
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {nTable.map((n) => {
                        return (
                          <tr key={n} id={n + '_line'} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td id={n + '_id'} className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {n}
                            </td>
                            <td id={n + '_value'} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {2 ** n}
                            </td>
                            <td id={n + '_chance'} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {chance = chance / 2}%
                            </td>
                            <td id={n + '_over'} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {balance = balance - (2 ** n)}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
          </motion.div>
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}
