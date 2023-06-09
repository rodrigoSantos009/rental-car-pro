import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUserSignin } from "../../types/User";
import { GetUserGetStorage, LoginRequest, SetUserLocalStorage, SignupRequest } from "./Util";

export const AuthContext = createContext<IContext>({} as IContext)

export const  AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUserSignin | null>(null);
  
  useEffect(() => {
    const user = GetUserGetStorage()
    if(user) {
      setUser(user)
      
    }
  }, [])
  async function signup(name: string, email: string, password: string) {
    return await SignupRequest(name, email, password)
  }

  async function authenticate(email: string, password: string) {
    try {
      const response = await LoginRequest(email, password)
      
      if(response) {
        const payload = { token: response.token, name: response.user.name, email };
        setUser(payload);
        SetUserLocalStorage(payload)
        return true
      }
      return false
    } catch(e) {
      console.error(e)
      return false
    }
  }

  async function logout() {
    setUser(null)
    SetUserLocalStorage(null)
  }

  const contextValue: IContext = {
    name: user?.name, // Set the name property from the user object
    email: user?.email,
    token: user?.token,
    signup: signup,
    authenticate: authenticate,
    logout: logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}