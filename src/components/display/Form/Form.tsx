import React, { forwardRef } from "react"

import SubmitBar from "../submitBar"

type FormProps = {
  onSubmit: (e: any) => void;
  onDelete: () => void;
  itemName?: string;
  lastModified?: number;
  ref?: any;
  isCommiting?: boolean;
}

const Form: React.FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, onDelete, itemName = "", lastModified, isCommiting }, ref) => {
    return (
      <form onSubmit={onSubmit} ref={ref}>
        {children}
        <SubmitBar
          lastModified={lastModified}
          itemName={itemName}
          handleDelete={onDelete}
          isCommiting={isCommiting}
        />
      </form>
    )
  }
)

export default Form