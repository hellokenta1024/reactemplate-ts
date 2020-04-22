import React from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogTitle as MuiDialogTitle,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const TitleContainer = styled(MuiDialogTitle)`
  display: flex;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: ${({ theme: { spacing } }) => spacing(1)}px;
  right: ${({ theme: { spacing } }) => spacing(1)}px;
`;

type DialogTitleProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const DialogTitle: React.FC<DialogTitleProps> = ({ children, onClose }) => {
  return (
    <TitleContainer disableTypography>
      <Typography variant="h6">{children}</Typography>
      {onClose && (
        <CloseButton aria-label="close" onClick={onClose}>
          <Close />
        </CloseButton>
      )}
    </TitleContainer>
  );
};

type Props = {
  title?: string;
  children: React.ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
};

const Modal: React.FC<Props> = ({ children, title, show = false, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
    >
      <DialogTitle onClose={handleClose}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
