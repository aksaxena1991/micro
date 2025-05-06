import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import OBJ from "../languages/fr.json";
import { getAuthState, getRoleState } from "../store/selectors";
import { setCookie } from "../utils";
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authState = useSelector(getAuthState);
  const roleState = useSelector(getRoleState);
  const { allRole } = roleState;
  const allRoleList = allRole?.data
    ?.filter((el) => {
      if (
        OBJ.AUTH_ROLE_LIST_WITH_MOBILE_NUMBER.indexOf(
          el.roleName.toLowerCase()
        ) === -1
      ) {
        return el.roleName;
      }
    })
    .map((el) => el.roleName);
  const { authDetails, verifyOTP } = authState;
  const isVA = !!allRoleList.indexOf(
    authDetails?.data?.role?.roleName.toLowerCase()
  );

  const loggedIn = useCallback(async () => {
    if (isVA) {
      setCookie(btoa("epackbook.token"), btoa(verifyOTP.data?.token), 7);
    } else {
    }
    setIsAuthenticated(true);
  }, [isVA, verifyOTP.data?.token]);
  useEffect(() => {}, []);

  const loggedOut = useCallback(async () => {}, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loggedIn, loggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};
