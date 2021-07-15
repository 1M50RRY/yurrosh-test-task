import React from 'react';
import ErrorBoundary from './errorBoundary'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CustomTabs from './tabs';
import EnhancedTable from './table';
import { makeStyles } from '@material-ui/core/styles';

import { rows, headCells } from '../data';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    typography: {
        color: '#6E6893',
    },
}));

const MainContainer = props => {
    const classes = useStyles();

    return (
        <ErrorBoundary>
            <Container fixed maxWidth='lg'>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={4} sm={2}>
                            <Typography className={classes.typography} variant="h6" gutterBottom>ORDERS</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTabs />
                        </Grid>
                        <Grid item xs={12}>
                            <EnhancedTable rows={rows} headCells={headCells} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </ErrorBoundary>
    );
}
export default MainContainer
