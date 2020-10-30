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
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function NavDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
      };

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
        nested: {
            paddingLeft: theme.spacing(4),
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
            <Divider/>
            <List>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Africa" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        <ListItemText primary="Africa" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Asia" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        <ListItemText primary="Asia" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Europe" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        <ListItemText primary="Europe" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="North America" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        <ListItemText primary="North America" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="South America" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        <ListItemText primary="South America" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Oceania" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        <ListItemText primary="Oceania" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    )
}

export default withRouter(NavDrawer);