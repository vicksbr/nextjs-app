import * as React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

const TrashIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
      fill="black"
      fill-opacity="0.6"
    />
  </SvgIcon>
);

export default TrashIcon;
