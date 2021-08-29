import axios from "axios";
import { loginUserId, serverUrl } from "constant";
import { FC, useEffect, useState } from "react";
import { UserType } from "pages/UserRegistration/UserRegistration";

export type GenreType = {
  id: number,
  title: string,
}

export const HomePage: FC = () => {
  const [user, setUser] = useState<UserType>();
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    const id = localStorage.getItem(loginUserId);
    axios.get(`${serverUrl}/users/${id}`)
      .then(res => {
        setUser(res.data);
      })
  }, [setUser])

  useEffect(() => {
    axios.get(`${serverUrl}/genres`)
      .then(res => {
        setGenres(res.data)
      })
  }, [setGenres])

  return (
    <>
      <h1>TopPage</h1>
      <h1>{user?.name}</h1>
      {genres.map((genre) => {
        return (
          <p>{genre.title}</p>
        )
      })}
    </>
  )
}
