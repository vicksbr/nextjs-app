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
  lastModified?: Date;
  itemName: string;
  handleDelete: () => void;
  handleSubmit: () => void;
};
const SubmitBar: React.FC<SubmitBarProps> = ({
  lastModified,
  itemName,
  handleDelete,
  handleSubmit,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <SubmitBarContainer>
      <DeleteButton variant="contained" onClick={handleOpenDialog}>
        <DeleteOutline />
      </DeleteButton>
      {lastModified && (
        <LastModifiedDate>
          Last Modify on {formatDate(lastModified)}
        </LastModifiedDate>
      )}
      <Button variant="contained" onClick={handleSubmit}>
        save changes
      </Button>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DeleteModal>
          <ConfirmationMessage>
            Delete the item <ItemName>“{itemName}”</ItemName>?
          </ConfirmationMessage>
          <ButtonsContainer>
            <Button onClick={handleCloseDialog}>cancel</Button>
            <ConfirmButton onClick={handleDelete}>confirm</ConfirmButton>
          </ButtonsContainer>
        </DeleteModal>
      </Dialog>
    </SubmitBarContainer>
  );
};

export default SubmitBar;
