import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaUserCog, FaChartBar, FaUserGraduate } from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();
  const activeClass = 'rounded-md bg-gray-600 text-white p-2';

  const NavLinkFunction = () => {
    const sideBarArray = new Map([
      ['Dashboard', '/dashboard'],
      ['Admin', '/admin'],
      ['Students', '/students'],
    ]);

    return (
      <ul>
        {[...sideBarArray].map(([key, value]) => (
          <li key={value} className="mb-2">
            <NavLink
              exact="true"
              to={value}
              className={`flex items-center text-white-500 ${location.pathname === value ? activeClass : ''}`}
            >
              {key === 'Dashboard' && <FaChartBar className="mr-2" />}
              {key === 'Admin' && <FaUserCog className="mr-2" />}
              {key === 'Students' && <FaUserGraduate className="mr-2" />}
              <span>{key}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside className="w-64 px-4 py-8" style={{ background: '#1F1F1 ' }}>
      <p className="px-6 py-4 whitespace-nowrap border-b font-bold mb-4 border-gray-300">MY SIDEBAR</p>
      {NavLinkFunction()}
    </aside>
  );
}

export default Sidebar;
