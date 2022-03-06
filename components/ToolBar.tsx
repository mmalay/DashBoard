import React from 'react';
import Menu from './icons/Menu';
import Clock from './icons/Clock';
import Person from './icons/Person';
import Home from './icons/Home';

type Props = {
  toggleDrawer: () => void;
};

function ToolBar({ toggleDrawer }: Props) {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="h-auto">
        <div className="md:mx-6 mx-4">
          <div className="flex justify-between items-center py-3">
            <Menu styles="fill-current text-gray-500" onClick={toggleDrawer} />
            <div className="flex items-center gap-4">
              <Clock styles="fill-current text-gray-500" />
              <Home styles="fill-current text-gray-500" />
              <Person styles="fill-current text-gray-500" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default ToolBar;
