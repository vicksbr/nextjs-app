import React, { forwardRef } from "react"

import SubmitBar from "../submitBar"

type FormProps = {
  onSubmit: (e: any) => void;
  onDelete: () => void;
  itemName?: string;
  lastModified?: number;
  ref?: any;
}

const Form: React.FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, onDelete, itemName = "", lastModified }, ref) => {
    return (
      <form onSubmit={onSubmit} ref={ref}>
        {children}
        <SubmitBar
          lastModified={lastModified}
          itemName={itemName}
          handleDelete={onDelete}
        />
      </form>
    )
  }
)

export default Form