import { createStyles, makeStyles, Theme } from "@material-ui/core";

const top = 50;
const left = 50;

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: '50%',
      height: '50%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    },
  }),
);
