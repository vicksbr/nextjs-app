import React from 'react'
import { create } from 'jss'
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point'),
});

function Provider (props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>
}

export default Provider