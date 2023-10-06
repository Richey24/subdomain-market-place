import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#1c2023] text-gray-500 border border-right-0 border-left-0 border-bottom-0 border-color-light-3 mt-0"
    >
      <div className="container text-center my-3 py-5">
        <a href="#" className="goto-top">
          <Image
            src="/img/logo.png"
            width="102"
            height="45"
            className="mb-4"
            alt="iMarketplace.World"
          />
        </a>
        <p className="text-4 mb-4">
          iMarketplace.World is exclusively available at iMarketplace.World by{" "}
          <a
            href="https://themeforest.net/user/okler/"
            className="text-white"
            target="_blank"
            rel="noopener"
          >
            Dreamtech Labs, LLC.
          </a>
        </p>
        <ul className="social-icons social-icons-big social-icons-dark-2">
          <li className="social-icons-facebook">
            <a
              href="http://www.facebook.com/"
              target="_blank"
              title="Facebook"
              rel="noopener"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-icons-twitter">
            <a
              href="http://www.twitter.com/"
              target="_blank"
              title="Twitter"
              rel="noopener"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-icons-linkedin">
            <a
              href="http://www.linkedin.com/"
              target="_blank"
              title="Linkedin"
              rel="noopener"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-icons-linkedin">
            <a
              href="http://www.youtube.com/"
              target="_blank"
              title="Linkedin"
              rel="noopener"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright bg-[#212529]  py-4">
        <div className="container text-center py-2">
          <p className="mb-0 text-2">
            Copyright 2023 iMarketplace.World - All Rights Reserved - Powered by
            <a
              href="https://dreamtechlabs.net"
              className="text-color-light m-1"
            >
              Dreamtech Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
