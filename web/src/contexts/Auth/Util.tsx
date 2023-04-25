import { api } from "../../lib/axios"
import { IUserSignin } from "../../types/User"

export function SetUserLocalStorage(user: IUserSignin | null) {
  localStorage.setItem("u", JSON.stringify(user))
}

export function GetUserGetStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function SignupRequest(name: string, email: string, password: string) {
  try {
    const request = await api.post("/signup", { name, email, password })

    return request.data
  } catch(e) {
    return null
  }
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post("/signin", { email, password });
    
    return request.data
  } catch(e) {
    return null
  }
}