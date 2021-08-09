import * as React from "react";
import axios from "axios";
import { Button } from "components/Button";
import { TextInput } from "components/TextInput";

const { useState } = React;

export const UserRegistration: React.FC = () => {
  const [name, setName] = useState<string | number>('');
  const [password, setPassword] = useState<string | number>('');

  const handleClick = (): void => {
    console.log("click")
    axios.post("http://localhost:8080/users", {
      name: name,
      password: password,
    })
    .then(res => {
      console.log("res")
      console.log(res)
    })
    .catch(err => {
      console.log("err:"+err)
    })
  }

  return (
    <>
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
        onClick={() => handleClick()}
      />
    </>
  );
}
