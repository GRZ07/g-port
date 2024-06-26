"use client";
import useMenuActive from "../hooks/useMenuActive";
import LinkItem from "./LinkItem";
import { Links } from "../constants/links";
const Footer = () => {
  return (
    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded dark:bg-medium dark:text-white dark:border-none">
      
      <aside>
        <p>
          Copyright © 2024 - All right reserved by GRZ
        </p>
      </aside>
    </footer>
  );
};

export default Footer;