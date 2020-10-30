import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

function Map(){

    const useStyles = makeStyles((theme) => ({
        map: {
            height: 600,
          },
      }));

    const classes = useStyles();

    return(
        <Box component='div' className={classes.map}>
            <ComposableMap style={{
                height: "100%",
                width: "auto",
            }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                    }
                </Geographies>
            </ComposableMap>
        </Box>
    )
}

export default withRouter(Map)