import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { useAuth } from "../../contexts/Auth/UseAuth"

type UserProps = {
  name: string
  email: string
}

export function Perfil() {
  const [user, setUser] = useState<UserProps>({
    name: "",
    email: ""
  }) 
  const [authenticated, setAuthenticated] = useState(false)

  const { token } = useAuth()

  useEffect(() => {
      api
      .get("/perfil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      })
      .then((res) => {
        setAuthenticated(true)
        setUser(res.data);
      })
  }, [])

  return (
    <div>
      {authenticated ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : 
      (null)}
    </div>
  );
}