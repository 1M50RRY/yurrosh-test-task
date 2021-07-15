import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    typography: {
        color: '#6E6893',
    },
    totalPrice: {
        width: '100%',
        textAlign: 'right',
    },
    price: {
        color: '#6D5BD0',
        fontWeight: 600,
        fontSize: '1.3em',
    },
    padding: {
        padding: theme.spacing(3),
    },
    tabsMain: {
        backgroundColor: theme.palette.background.paper,
    },
    anttab: {
        textColor: '#25213B',
    },
}));

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
        width: '100%',
    },
    indicator: {
        backgroundColor: '#25213B',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        color: '#6E6893',
        '&:hover': {
            color: '#25213B',
            opacity: 1,
        },
        '&$selected': {
            color: '#25213B',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#25213B',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const CustomTabs = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.tabsMain}>
            <AntTabs value={value} onChange={handleChange} indicatorColor='#25213B'>
                <AntTab className={classes.anttab} label="All" />
                <AntTab className={classes.anttab}  label="Shipped" />
                <Typography className={classes.totalPrice}>
                    Total orders: <span className={classes.price}>$900.00</span> USD
                </Typography>
            </AntTabs>
            <Typography className={classes.padding} />
        </div>
    );
}
export default CustomTabs
