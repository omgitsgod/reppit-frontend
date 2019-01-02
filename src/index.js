import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Yes from './Yes'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'


const theme = createMuiTheme({
  palette: {
    primary: red,
    type: 'dark'
  },
  root: {
    background: "#FF0"
  }
})

render(
  <MuiThemeProvider theme={theme}>
  <CssBaseline />
    <Yes />
  </MuiThemeProvider>,
   document.getElementById('root')
 )
