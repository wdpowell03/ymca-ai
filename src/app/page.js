import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Header Text */}
        <div className={styles.header}>
          <h1 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>YMCA of Greater Cincinnati</h1>
          <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 400, marginBottom: '0.25rem' }}>Bill Powell</h2>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: 300 }}>Chief Operations Officer</h3>
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 300 }}>AI Agents for YMCA of Greater Cincinnati</h3>
        </div>
        {/* Links */}
        <nav className={styles.cardContainer}>
          <a 
            href="https://chatgpt.com/g/g-6819fbe9c954819192fc91d02c8f301f-cincy-ymca-ost-elc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            Out of School Time and Early Learning Center
          </a>
          <a 
            href="https://chatgpt.com/g/g-67e9e811bf608191bb2f95000ababba0-cincy-ymca-branch-advisory-board-guide"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            Branch Advisory Boards
          </a>
          <a 
            href="https://chatgpt.com/g/g-67df338f9c0c8191959f0379137b6c01-ymca-branch-fundraising"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            YMCA Annual Campaign
          </a>
          <a 
            href="https://chatgpt.com/g/g-67dee29dd3648191952099c040e3a590-impact-leadership-network-guide"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            Impact Leadership Network
          </a>
        </nav>
        <div className={styles.bottomLogoContainer}>
          <span className={styles.poweredByText}>Powered by</span>
          <Image 
            src="/images/4597FB8B-025A-4C29-9238-F4C9CE7B2908.PNG"
            alt="YMCA Logo" 
            width={120}
            height={60}
            className={styles.bottomLogo}
            priority
          />
        </div>
        <div className={styles.logoContainer}>
          <Image 
            src="/images/ChatGPT Image May 22, 2025, 09_22_07 PM.png"
            alt="ChatGPT Logo" 
            width={80} 
            height={80}
            className={styles.logo}
            priority
          />
        </div>
      </main>
    </div>
  );
}

