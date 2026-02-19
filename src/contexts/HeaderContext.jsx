import { createContext, useState } from "react";
import { VscSparkle as AppIcon } from "react-icons/vsc";
export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [headerInfo, setHeaderInfo] = useState({
    title: "meSparks",
    icon: <AppIcon></AppIcon>,
    description: "Welcome back!",
  });
  return (
    <HeaderContext.Provider value={{ headerInfo, setHeaderInfo }}>
      {children}
    </HeaderContext.Provider>
  );
};
