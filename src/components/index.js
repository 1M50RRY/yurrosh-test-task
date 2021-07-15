import React from 'react';
import ErrorBoundary from './errorBoundary'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTest } from '../redux/actions/testActions'

const Container = props =>
    (
        <ErrorBoundary>
            {"Hello World!"}
        </ErrorBoundary>
    );


export default connect(
    (state) => ({ test: state.test }),
    (dispatch) => bindActionCreators({ test: changeTest }, dispatch)
)(Container);
