import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="developed-info-container">
        <div className="developed-links-container">
          ©{' '}
          <a
            className="developed-link"
            href="https://github.com/paulipa1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paula
          </a>{' '}
          &{' '}
          <a
            className="developed-link"
            href="https://htmlena.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lenka
          </a>{' '}
        </div>
      </div>
      <div className="resources-info">
        <a
          className="resource-link"
          href="https://www.freepik.com/vectors/hand"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hand vector created by pch.vector - www.freepik.com
        </a>
        <a
          className="resource-link"
          href="https://zety.com/blog/resume-statistics"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Statistics from www.zety.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
