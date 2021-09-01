import { FC, ReactNode } from "react";
import useStyles from "components/ModalBody/style";

type ModalBodyProps = {
  children: ReactNode,
}

export const ModalBody: FC<ModalBodyProps> = ({ children }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.paper}>
      {children}
    </div>
  );
}
