import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 742);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 742);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-full bg-base-200 h-full" data-theme="">
      <div className="flex gap-2 h-full w-full ">
        {isMobile ? (
          <div className="md:hidden w-full">
            <ResponsiveNavbar />
          </div>
        ) : (
          <>
            <div>
              <Sidebar />
            </div>
            <div>
              <Dashboard />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
