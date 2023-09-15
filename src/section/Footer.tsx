import React from "react";
import styles from "../styles/styles.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${styles.footerWrapper} ${styles.container}`}>
      <div className={styles.footer}>
        <div className={styles.socialMedia}>
          <FaFacebookSquare className={styles.socialMediaLink} />
          <FiInstagram className={styles.socialMediaLink} />
          <BsTwitter className={styles.socialMediaLink} />
          <FaYoutube className={styles.socialMediaLink} />
        </div>
        <ul className={styles.footerLinks}>
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
        <footer className={styles.foot}>
          © 2021 MovieBox by Adriana Eka Prayudha
        </footer>
      </div>
    </div>
  );
};

export default Footer;
