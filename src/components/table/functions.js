var _ = require('lodash');

const descendingComparator = (a, b, orderBy) => {
    if (_.get(b, orderBy) < _.get(a, orderBy)) {
        return -1;
    }
    if (_.get(b, orderBy) > _.get(a, orderBy)) {
        return 1;
    }
    return 0;
}

exports.getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

exports.stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}