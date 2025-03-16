import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <div className="container">
        <p className="mb-1  text-muted">© {new Date().getFullYear()} Bloodbee. All rights reserved.</p>
        <p className="mb-0 fw-bold text-muted">Made with <span className="text-danger">❤️</span> to save lives.</p>
      </div>
    </footer>
  );
};

export default Footer;
