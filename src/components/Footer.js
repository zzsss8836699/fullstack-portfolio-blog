import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Portfolio & Blog. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React & Node.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

