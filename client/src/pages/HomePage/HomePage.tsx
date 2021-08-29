import axios from "axios";
import { loginUserId, serverUrl } from "constant";
import { FC, useEffect, useState } from "react";
import { UserType } from "pages/UserRegistration/UserRegistration";

export const HomePage: FC = () => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const id = localStorage.getItem(loginUserId);
    axios.get(`${serverUrl}/users/${id}`)
      .then(res => {
        setUser(res.data);
      })
  }, [setUser])

  return (
    <>
      <h1>TopPage</h1>
      <h1>{user?.name}</h1>
    </>
  )
}
