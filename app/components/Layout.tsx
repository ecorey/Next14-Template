import React, { ReactNode } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="layout-grid">
        <NavBar />
        <main className="overflow-auto"> 
          {children}
        </main>
        <Footer />
      </div>
    );
  };
  

export default Layout;
