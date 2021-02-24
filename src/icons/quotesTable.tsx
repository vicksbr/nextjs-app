import React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";

const QuotesTable = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M21 20H3V22H21V20Z" />
    <path d="M21 15H3V17H21V15Z" />
    <path d="M21 10H3V12H21V10Z" />
    <path d="M9 10H7V22H9V10Z" />
    <path d="M17 10H15V22H17V10Z" />
    <path d="M8 2L12 6H4L8 2Z" />
    <path d="M16 6L12 2L20 2L16 6Z" />
  </SvgIcon>
);

export default QuotesTable;
