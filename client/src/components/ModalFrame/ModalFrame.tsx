import { FC, ReactElement } from "react";
import Modal from '@material-ui/core/Modal';

type ModalFrameProps = {
  children: ReactElement,
  isOpen: boolean,
}

export const ModalFrame: FC<ModalFrameProps> = ({ children, isOpen }) => {
  return (
    <Modal
      open={isOpen}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {children}
    </Modal>
  );
}
