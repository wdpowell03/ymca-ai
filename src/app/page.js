import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          {/* Header */}
          <div className={styles.header}>
            <h1>YMCA of Greater Cincinnati</h1>
            <h2>Bill Powell</h2>
            <h3>Chief Operations Officer</h3>
            
          </div>
          
          {/* Cards */}
          <nav className={styles.cardContainer}>
            <a 
              href="https://chatgpt.com/g/g-67dee29dd3648191952099c040e3a590-impact-leadership-network-guide"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              Impact Leadership Network
            </a>
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
          </nav>
          
          {/* Logo at bottom of content */}
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
            <Image 
              src="/images/ChatGPT Image May 22, 2025, 09_22_07 PM.png"
              alt="OpenAI Logo" 
              width={120}
              height={60}
              className={styles.bottomLogo}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

