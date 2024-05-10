import React from 'react';

function TestComponents() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sample Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 border-r border-l border-gray-300 text-left text-xs font-semibold">ID</th>
              <th className="px-6 py-3 border-r border-l border-gray-300 text-left text-xs font-semibold">Name</th>
              <th className="px-6 py-3 border-r border-l border-gray-300 text-left text-xs font-semibold">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 border-r border-l border-gray-300 whitespace-nowrap">1</td>
              <td className="px-6 py-4 border-r border-l border-gray-300 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 border-r border-l border-gray-300 whitespace-nowrap">john.doe@example.com</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-r border-l border-gray-300 whitespace-nowrap">2</td>
              <td className="px-6 py-4 border-r border-l border-gray-300 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 border-r border-l border-gray-300 whitespace-nowrap">jane.smith@example.com</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestComponents;
