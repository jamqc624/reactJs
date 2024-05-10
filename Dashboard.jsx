import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8" style={{ background: '#F1F1F1' }}>
        <div className="container mx-auto">
          <h1 className="px-3 py-1 whitespace-nowrap border font-bold mb-4">
            <i className="fas fa-chart-bar mr-2"></i> DASHBOARD
          </h1>
          <h2 className="text-3xl font-bold mb-4 container mx-auto text-center">Sample Table</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">1</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">john.doe@example.com</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">jane.smith@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Dashboard;
