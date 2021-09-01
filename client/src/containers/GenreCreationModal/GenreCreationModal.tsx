import axios from "axios";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { loginUserId, serverUrl } from "../../constant";
import { FC, useState } from "react";
import { ModalFrame } from "components/ModalFrame";
import { ModalBody } from "components/ModalBody";

type GenreCreationModalProps = {
  isOpen: boolean,
  closeModal: () => void,
}

export const GenreCreationModal: FC<GenreCreationModalProps> = ({ isOpen, closeModal }) => {
  const [title, setTitle] = useState<string>("");
  
  const onClick = () => {
    axios.post(`${serverUrl}/genres`, {
      title: title,
      user_id: Number(localStorage.getItem(loginUserId)),
    })
      .then(_ => {
        closeModal();
      })
  }

  return (
    <ModalFrame
      isOpen={isOpen}
    >
      <ModalBody>
        <h1>ジャンル登録</h1>
        <TextInput
          titleText="タイトル"
          value={title}
          onChange={setTitle}
        />
        <Button
          buttonText="作成"
          onClick={onClick}
        />
        <Button
          buttonText="キャンセル"
          onClick={closeModal}
        />
      </ModalBody>
    </ModalFrame>
  );
}
