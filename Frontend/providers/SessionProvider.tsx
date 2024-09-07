import React, { useContext } from "react";
import * as SecureStore from "expo-secure-store";

const AppContext = React.createContext<{
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isSignedIn: true,
  setIsSignedIn: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const SessionProvider: React.FC<IProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = React.useState(
    SecureStore.getItem("token") ? true : false
  );

  const appContextValue = React.useMemo(
    () => ({
      isSignedIn,
      setIsSignedIn,
    }),
    [isSignedIn]
  );
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useSession = () => useContext(AppContext);

export default SessionProvider;
