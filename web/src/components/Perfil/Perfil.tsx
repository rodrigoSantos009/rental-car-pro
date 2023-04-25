import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { IconContext } from "react-icons/lib"
import { AuthContext } from "../../contexts/Auth/Index"
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

  const { token } = useAuth()

  useEffect(() => {
    api
      .get("/perfil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, [])

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}