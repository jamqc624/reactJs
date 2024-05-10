import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
        <footer className="bg-gray-800 text-white py-2" style={{ background: '#F27BBD' }}>
            <div className="container mx-auto px-4  text-center">
            <p>&copy; 2024 web systems technology</p>
            </div>
        </footer>
    );
  }
}

export default Footer;
