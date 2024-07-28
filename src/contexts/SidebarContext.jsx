/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useState } from 'react';

const SideBarContext = React.createContext();

export const useSidebar = () => {
    return useContext(SideBarContext)
}

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen,
    setIsOpen,
    toggleOpen,
  };

  return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};