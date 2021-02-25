import { CompletedChallanges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from '../contexts/CountdownContext'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallangeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallanges />
            <Countdown />
          </div>
          <div>
            <ChallangeBox />
          </div>
        </section>
      </CountdownProvider>

      <Head>
        <title>Início | move.it</title> 
      </Head>

    </div>
  )
}
