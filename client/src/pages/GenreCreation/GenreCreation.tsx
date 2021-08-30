import axios from "axios";
import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import { loginUserId, serverUrl } from "constant";
import { FC, useState } from "react";
import { useHistory } from "react-router-dom";

export const GenreCreation: FC = () => {
  const history = useHistory();
  const [title, setTitle] = useState<string>("");
  
  const onClick = () => {
    axios.post(`${serverUrl}/genres`, {
      title: title,
      user_id: Number(localStorage.getItem(loginUserId)),
    })
      .then(res => {
        history.push("/");
      })
  }

  return (
    <>
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
    </>
  );
}
