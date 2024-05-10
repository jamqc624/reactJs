import React, { Component } from 'react';
import { FaUserCog } from 'react-icons/fa';

export class Admin extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8" style={{ background: '#F1F1F1' }}>
        <div className="flex items-center mb-4">
          <FaUserCog className="text-3xl mr-2" />
          <h1 className="px-3 py-1 whitespace-nowrap border font-bold">ADMIN</h1>
        </div>
        <p className="text-2xl font-semibold mb-4 container mx-auto text-center">This is the main content area of the Admin.</p>
      </main>
    );
  }
}

export default Admin;
