import React from "react";
import styles from "../styles/ThreadsConnect.module.css";
import { SiThreads } from "react-icons/si";

const ThreadsConnect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <SiThreads className={styles.threadsIcon} />
          <h1>Connect Your Threads Account</h1>
          <p className={styles.subtitle}>
            Schedule text posts, join conversations, and grow your audience — all in one place.
          </p>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>💬</div>
            <div>
              <h3>Schedule Text Posts</h3>
              <p>Plan your thoughts, announcements, and daily updates ahead of time.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>📈</div>
            <div>
              <h3>Track Replies & Engagement</h3>
              <p>See which threads spark the most conversation and double down on what works.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>✨</div>
            <div>
              <h3>AI Thread Starter Ideas</h3>
              <p>Never run out of things to say — get smart prompts based on trending topics.</p>
            </div>
          </div>
        </div>

        <div className={styles.trustSection}>
          <p>🔒 Secure connection via Threads’ official API</p>
          <p>🚫 We never post without your approval</p>
        </div>

        <button className={styles.connectButton}>
          <SiThreads />
          Connect to Threads
        </button>

        <div className={styles.footerNote}>
          <p>
            By connecting, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreadsConnect;