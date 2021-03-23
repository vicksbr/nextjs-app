import React, { useState } from "react";
import { Button, Dialog } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

import { formatDate } from "utils/date";
import {
  SubmitBarContainer,
  DeleteButton,
  LastModifiedDate,
  DeleteModal,
  ConfirmationMessage,
  ItemName,
  ButtonsContainer,
  ConfirmButton,
} from "./styles";

type SubmitBarProps = {
  lastModified?: number;
  itemName: string;
  isCommiting?: boolean;
  handleDelete?: () => void | null;
  handleSubmit?: () => void;
};
const SubmitBar: React.FC<SubmitBarProps> = ({
  lastModified,
  itemName,
  handleDelete,
  handleSubmit,
  isCommiting = false,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDeleteFn = () => {
    if (handleDelete) {
      handleDelete()
      setDialogOpen(false);
    }
  }

  return (
    <SubmitBarContainer>
      <DeleteButton variant="contained" type="button" onClick={handleOpenDialog} disabled={handleDelete === undefined || isCommiting}>
        <DeleteOutline />
      </DeleteButton>
      {lastModified && (
        <LastModifiedDate>
          Last Modify on {formatDate(lastModified)}
        </LastModifiedDate>
      )}
      <Button variant="contained" type="submit" onClick={handleSubmit} disabled={isCommiting}>
        save changes
      </Button>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DeleteModal>
          <ConfirmationMessage>
            Delete the item <ItemName>“{itemName}”</ItemName>?
          </ConfirmationMessage>
          <ButtonsContainer>
            <Button onClick={handleCloseDialog}>cancel</Button>
            <ConfirmButton onClick={handleDeleteFn}>confirm</ConfirmButton>
          </ButtonsContainer>
        </DeleteModal>
      </Dialog>
    </SubmitBarContainer>
  );
};

export default SubmitBar;
