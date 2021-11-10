import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [navigationPanelActive, setNavigationPanelActive] = useState(null);

  return (
    <AppContext.Provider
      value={{
        navigationPanelActive,
        setNavigationPanelActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
