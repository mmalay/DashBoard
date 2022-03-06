import { useState } from 'react';
import ToolBar from '../components/ToolBar';
import Drawer from '../components/Drawer';
import Down from '../components/icons/DownArrowIcon';
import DoubleArrowUp from '../components/icons/DoubleArrowUp';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-full w-full">
      <div
        className="fixed bg-white right-0 z-10"
        style={{
          marginRight: '15px',
          marginTop: '65px',
          paddingLeft: '5px',
          paddingRight: '5px',
          paddingTop: '5px',
          paddingBottom: '5px',
          borderRadius: '0.125rem',
        }}
      >
        <div className="flex w-20 py-2 px-4">
          <span className="text-base font-normal text-black my-2">TODAY</span>
          <Down styles="fill-current text-black" />
        </div>
      </div>
      <div className="flex h-screen">
        <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <div
          className={
            'w-full mx-auto' +
            ' transform ease-in-out ' +
            (isOpen
              ? ' transition-all opacity-100 duration-300 translate-x-2/4  '
              : ' transition-all opacity-100 duration-300 delay-150 translate-x-full')
          }
        >
          <ToolBar toggleDrawer={toggleDrawer} />
          {children}
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          background: '#d1d5db',
          bottom: '10px',
          right: '150px',
          height: '3rem',
          width: '3rem',
          borderRadius: '9999px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0.75rem',
          }}
        >
          <DoubleArrowUp styles="fill-current text-blue-600" />
        </div>
      </div>
    </div>
  );
}

export default Layout;
