export interface IUser {
  name: string
  email: string
  password: string
}

export interface IUserSignin {
  name?: string
  email?: string
  token?: string
}

export interface IContext extends IUserSignin {
  authenticate: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
} 

export interface IAuthProvider {
  children: JSX.Element
}