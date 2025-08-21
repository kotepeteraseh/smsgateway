
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  title?: string;
  children: ReactNode;
  showBackButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ title, children, showBackButton = false }) => {
  const navigate = useNavigate();

  return (
    <div className="w-[375px] h-[812px] bg-white shadow-2xl rounded-[40px] overflow-hidden flex flex-col border-4 border-black">
      {title && (
        <header className="p-6 pt-10 flex items-center">
          {showBackButton && (
             <button onClick={() => navigate(-1)} className="mr-4 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
             </button>
          )}
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        </header>
      )}
      <main className={`flex-grow flex flex-col ${title ? 'px-6 pb-6' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
