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

  async function signup(name: string, email: string, password: string): Promise<boolean | undefined> {
    try {
      const response = await SignupRequest(name, email, password);

      if(!response) {
        return false
      }

      return true
    } catch (error) {
      console.log(error)
    }
  }

  async function authenticate(email: string, password: string) {
    try {
      const response = await LoginRequest(email, password)
      
      if(!response) {
        return false;
      }

      const payload = { 
        token: response.token, 
        id: response.id, 
        name: response.user.name, 
        email 
      };
        setUser(payload);
        SetUserLocalStorage(payload)
        return true   
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
    id: user?.id,
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