import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function NavBar(props) {
    return(
        <AppBar position='sticky'>
            <Toolbar>

            </Toolbar>
        </AppBar>
    )
}

export default withRouter(NavBar);