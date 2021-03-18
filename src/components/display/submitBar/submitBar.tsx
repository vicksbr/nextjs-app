import React, { useState } from "react";
import { useRouter } from "next/router";
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
  handleDelete: () => void;
  handleSubmit?: () => void;
};
const SubmitBar: React.FC<SubmitBarProps> = ({
  lastModified,
  itemName,
  handleDelete,
  handleSubmit,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const router = useRouter()

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDeleteFn = () => {
    const currentView = router.pathname.split("/")[1];

    handleDelete()
    setDialogOpen(false);
    router.push(`/${currentView}`)
  }

  return (
    <SubmitBarContainer>

      <DeleteButton variant="contained" type="button" onClick={handleOpenDialog}>
        <DeleteOutline />
      </DeleteButton>
      {lastModified && (
        <LastModifiedDate>
          Last Modify on {formatDate(lastModified)}
        </LastModifiedDate>
      )}
      <Button variant="contained" type="submit" onClick={handleSubmit}>
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
