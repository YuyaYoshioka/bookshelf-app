import { FC, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "components/PageHeader/style";
import { loginUserId, serverUrl } from "constant";
import axios from "axios";
import { UserType } from "pages/UserRegistration/UserRegistration";

type PageHeaderProps = {
  showBookCreationModal: () => void,
  showGenreCreationModal: () => void,
}

export const PageHeader: FC<PageHeaderProps> = ({ showBookCreationModal, showGenreCreationModal }) => {
  const classes = useStyles();
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    const userId = localStorage.getItem(loginUserId) as string;
    axios.get(`${serverUrl}/users/${userId}`)
      .then(res => {
        const user: UserType = res.data;
        setUserName(user.name)
      })
  }, [setUserName]);
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          積読マップ
        </Typography>
        <Button color="inherit" onClick={showBookCreationModal}>
          本を追加
        </Button>
        <Button color="inherit" onClick={showGenreCreationModal}>
          ジャンルを追加
        </Button>
        <Button color="inherit" className={classes.loginButton}>
          {userName ? `${userName}さん` : "ログイン"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
