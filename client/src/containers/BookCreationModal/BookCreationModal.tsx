import { FC, useEffect, useState } from "react";
import { GenreType } from "pages/HomePage/HomePage";
import { loginUserId, serverUrl } from "constant";
import axios from "axios";
import { TextInput } from "components/TextInput";
import { Button } from "components/Button";
import { ModalBody } from "components/ModalBody";
import { ModalFrame } from "components/ModalFrame";

type BookCreationModalProps = {
  isOpen: boolean,
  closeEditModal: () => void,
}

export const BookCreationModal: FC<BookCreationModalProps> = ({ isOpen, closeEditModal }) => {
  const [currentGenreId, setCurrentGenreId] = useState<string>();
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const onClick = () => {
    axios.post(`${serverUrl}/books`, {
      title: title,
      url: url,
      user_id: Number(localStorage.getItem(loginUserId)),
      genre_id: Number(currentGenreId),
    })
      .then(_ => {
        closeEditModal();
      })
  }

  useEffect(() => {
    axios.get(`${serverUrl}/genres`)
      .then(res => {
        const genres: GenreType[] = res.data;
        setGenres(genres);
        if (genres.length) setCurrentGenreId(String(genres[0].ID));
      })
  }, [setGenres, isOpen])

  return (
      <ModalFrame
        isOpen={isOpen}
      >
      <ModalBody>
        <h1>本棚に追加</h1>
        <select onChange={(e) => setCurrentGenreId(e.target.value)} value={currentGenreId}>
          {genres.map(genre => {
            return(
              <option key={genre.ID} value={genre.ID}>{genre.title}</option>
            );
          })}
        </select>
        <TextInput
          titleText="タイトル"
          value={title}
          onChange={setTitle}
        />
        <TextInput
          titleText="URL"
          value={url}
          onChange={setUrl}
        />
        <Button
          buttonText="追加"
          onClick={onClick}
        />
        <Button
          buttonText="キャンセル"
          onClick={closeEditModal}
        />
      </ModalBody>
    </ModalFrame>
  );
}
