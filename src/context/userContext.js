import { createContext, useContext, useEffect, useState } from "react";
import Keycloak from "keycloak-js";

export const _kc = new Keycloak({
  url: "http://192.168.2.56:8080/",
  clientId: "TodoApp1",
  realm: "keycloak",
});

const kc = _kc.init({
  onLoad: "check-sso",
  silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
  pkceMethod: "S256",
});

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    kc.then((authenticated) => {
      setUser(authenticated ? _kc.idTokenParsed : null);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
