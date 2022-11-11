import React from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';

import Header from "../Header";
import Footer from "../Footer";
import SideMenu from "../SideMenu";

import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        <div className="m-auto grid grid-cols-5">
          <div className={clsx(styles.sidemenu)}>
            <SideMenu />
          </div>
          <div className="col-span-4 mx-10">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
