import axios from "axios";
import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import { loginUserId, serverUrl } from "constant";
import { UserType } from "pages/UserRegistration/UserRegistration";
import { FC, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Login: FC = () => {
  const history = useHistory();
  const [userName, setUserName] = useState<string>("");

  const onClick = () => {
    axios.get(`${serverUrl}/login`, {
      params: { name: userName, },
    })
      .then(res => {
        const user: UserType = res.data;
        localStorage.setItem(loginUserId, user.ID);
        history.push("/")
      })
      .catch(err => {
        console.error(err)
      })
  };

  return (
    <>
      <h1>ログイン</h1>
      <TextInput
        titleText="ユーザー名"
        value={userName}
        onChange={setUserName}
      />
      <Button
        buttonText="ログイン"
        onClick={onClick}
      />
      <Link to="/signup">ユーザー登録はこちら</Link>
    </>
  );
}
