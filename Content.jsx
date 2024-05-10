import React, { Component } from 'react';

export class Content extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <div className="container mx-auto text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <h2 className="text-3xl font-bold text-white-800 mb-4">Students</h2>
          <p className="text-lg text-white-700">This is the main content area of the application.</p>
        </div>
      </main>
    );
  }
}

export default Content;