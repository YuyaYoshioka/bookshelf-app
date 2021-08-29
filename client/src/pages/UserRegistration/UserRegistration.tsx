import { useState } from "react";
import axios from "axios";
import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import { Link, useHistory } from "react-router-dom";
import { loginUserId, serverUrl } from "constant";

export type UserType = {
  ID: string,
  name: string,
  password: string,
  CreatedAt: Date,
  UpdatedAt: Date,
}

export const UserRegistration: React.FC = () => {
  const [name, setName] = useState<string | number>('');
  const [password, setPassword] = useState<string | number>('');

  const history = useHistory();

  const handleClick = (): void => {
    axios.post(`${serverUrl}/users`, {
      name: name,
      password: password,
    })
    .then(res => {
      const user: UserType = res.data;
      localStorage.setItem(loginUserId, user.ID);
      history.push("/");
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <>
      <h1>ユーザー登録</h1>
      <TextInput
        value={name}
        onChange={setName}
        titleText="ユーザー名"
      />
      <TextInput
        value={password}
        onChange={setPassword}
        titleText="パスワード"
      />
      <Button
        buttonText="作成"
        onClick={handleClick}
      />
      <Link to="login">ログインはこちら</Link>
    </>
  );
}
