import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

export default function ResponsiveNavbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarVisible}
        onChange={toggleSidebar}
      />
      <div className="drawer-content flex flex-col">
        <div className="w-full flex flex-row-reverse">
        
          <div className="flex-none lg:hidden">
            
            {sidebarVisible ? (
                <>
                
               <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
               
             </label>
             </>
            ) : (
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            )}
          </div>
        </div>
        <Dashboard />
      </div>
      <div className="drawer-side">
        <Sidebar />
      </div>
    </div>
  );
}
