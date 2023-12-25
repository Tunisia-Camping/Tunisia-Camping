import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="appImages">
        <a href="#" title="Download on the App Store" className="appImageLink">
          <img className="appImage" src="https://i.postimg.cc/BntPZGMX/cc6ccb76-df7d-4129-8601-936544988da0.png" alt="App" />
        </a>
        <a href="#" title="View Ads" className="appImageLink">
          <img className="appImage" src="https://i.ibb.co/yd4cNfv/Frame-740.png" alt="Ads" />
        </a>
        <a href="#" title="Best Apps" className="appImageLink">
          <img className="appImage" src="https://i.ibb.co/PrqStQT/Frame-621.png" alt="Best Apps" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

