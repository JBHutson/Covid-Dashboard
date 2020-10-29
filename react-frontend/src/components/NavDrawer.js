import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withRouter from 'react-router-dom/withRouter';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';

function NavDrawer() {
    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        appBar: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing(3),
        },
      }));

    const classes = useStyles();

    return(
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider/>
          <List>
            <ListItem button key='World'>
                <ListItemIcon>
                    <PublicIcon/>
                </ListItemIcon>
                <ListItemText primary='World'/>
            </ListItem>
          </List>
        </Drawer>
    )
}

export default withRouter(NavDrawer);