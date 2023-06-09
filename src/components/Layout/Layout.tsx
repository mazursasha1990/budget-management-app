import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar';
import styles from './Layout.module.css';

const Layout: FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
};

export default Layout;
