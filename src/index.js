import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Yes from './Yes'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter as Router } from 'react-router-dom'


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
  <Router>
  <MuiThemeProvider theme={theme}>
  <CssBaseline />
    <Yes />
  </MuiThemeProvider>
  </Router>,
   document.getElementById('root')
 )
