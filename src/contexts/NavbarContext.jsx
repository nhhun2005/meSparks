import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <NavbarContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </NavbarContext.Provider>
  );
};
