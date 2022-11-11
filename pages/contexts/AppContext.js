import React, { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectSideMenu, setSelectSideMenu] = useState(0);
  return (
    <AppContext.Provider
      value={{
        selectSideMenu,
        setSelectSideMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.object,
}