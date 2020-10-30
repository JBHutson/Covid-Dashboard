import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Map from './Map';

function HomePage(props) {

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        mapPaper: {
          background: theme.palette.background.default,
        },
        appBar: {
            marginLeft: drawerWidth,
        },
          gridContainer: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
            margin: 0,
            width: "100%",
        },
      }));

    const classes = useStyles()

    return(
        <div className={classes.appBar}>
        <Grid container justify='center'>
            <Grid>
                <Paper elevation={10} className={classes.mapPaper}>
                    <Map/>
                </Paper>
            </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item md={4}>
            <Card raised="true" className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        Cases
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
            <Card raised="true" className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        Deaths
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
            <Card raised="true" className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        Case-Fatality Rate
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
            <Card raised="true" className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        Mortality Rate
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
        </div>
    )
}

export default withRouter(HomePage);