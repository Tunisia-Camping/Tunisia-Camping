import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-subscribe">
          <h2>Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="footersubs">
            <div className="email-input-container">
              <input type="email" placeholder="Enter your email" />
              <i className="fa-regular fa-paper-plane"></i>
            </div>
          </div>
        </div>
        <div className="footer-support">
          <h2>Support</h2>
          <p>tunis elghazela</p>
          <p>technopole lghazela rbk</p>
          <p>a7lateam@gmail.com</p>
          <p>+216 00 00 00</p>
        </div>
        <div className="footer-links">
          <h2>Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footer-download">
          <h2>Download App</h2>
          <p>Save $7 with App New User Only</p>
        
          {<img
            id="qrCode"
            src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
            alt="App"
         / >
          }
          
        </div>
      </div>
      <div className="footer-section">
        {/* Add your additional sections here */}
        <div className="footer-exclusive">
          <h2>Exclusive</h2>
          <p>Save $3 with App New User Only</p>
        </div>
        <div className="footer-account">
          <h2>Account</h2>
          <p>Login / Register</p>
          <p>exclusive@gmail.com</p>
        </div>
        <div className="footer-quick-link">
          <h2>Quick Link</h2>
          <p>FAQ</p>
          <p>Terms Of Use</p>
        </div>
        <div className="footer-address">
          <h2>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h2>
        </div>
        <div className="footer-copyright">
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
