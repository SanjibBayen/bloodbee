import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
     
      {/* Copyright */}
      <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <p>© {new Date().getFullYear()} Bloodbee. All rights reserved.</p>
      <p>Made with ❤️ to save lives.</p>
      </div>
    </footer>
  );
};

export default Footer;
