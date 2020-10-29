import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Paper from '@material-ui/core/Paper';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import makeStyles from "@material-ui/core/styles/makeStyles";
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NavDrawer from './components/NavDrawer';
import { MuiThemeProvider } from '@material-ui/core';

function App() {

  let theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#1769aa',
        main: '#2196f3',
        dark: '#4dabf5',
        contrastText: '#fff',
      },
      secondary: {
        light: '#41257b',
        main: '#5e35b1',
        dark: '#7e5dc0',
        contrastText: '#000',
      },
    },
  });

  const useStyles = makeStyles({
    paper: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    space: {
      flexGrow: 1
    }
  });

  const classes = useStyles();

  theme = responsiveFontSizes(theme);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.paper}>
          <NavBar/>
          <NavDrawer/>
          <main>
              <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
              </Switch>
          </main>
          <div className={classes.space}></div>
        </Paper>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
