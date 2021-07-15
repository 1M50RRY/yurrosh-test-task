export default (state = {test: true}, action) =>
{
    switch (action.type) {
        case 'TEST': return {test: action.payload };
        default: return state;
    }
}