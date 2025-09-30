import React from "react";
import styles from "../styles/LinkedInConnect.module.css";
import { FaLinkedinIn } from "react-icons/fa";

const LinkedInConnect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <FaLinkedinIn className={styles.linkedinIcon} />
          <h1>Connect Your LinkedIn Account</h1>
          <p className={styles.subtitle}>
            Grow your professional brand, schedule posts, and track engagement — all in one place.
          </p>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>👔</div>
            <div>
              <h3>Schedule Professional Posts</h3>
              <p>Share articles, updates, and videos at optimal times for your network.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>📈</div>
            <div>
              <h3>Track Engagement & Reach</h3>
              <p>Measure post performance and understand what resonates with your audience.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🤖</div>
            <div>
              <h3>AI-Powered Post Suggestions</h3>
              <p>Get content ideas tailored to your industry and professional goals.</p>
            </div>
          </div>
        </div>

        <div className={styles.trustSection}>
          <p>🔒 Secure connection via LinkedIn’s official API</p>
          <p>🚫 We never post without your explicit approval</p>
        </div>

        <button className={styles.connectButton}>
          <FaLinkedinIn />
          Connect to LinkedIn
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

export default LinkedInConnect;