import React from 'react';
import '../../css/errorBoundary.css'

export default class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch (error, info) {
        this.setState({
            hasError: true
        });
    }

    render = () => 
        this.state.hasError ? 
        (
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <h2>Something went wrong. We are sorry!</h2>
                    <p>Error in client, please, try to reload the website.</p>
                    <a href="#">Go To Homepage</a>
                </div>
            </div>
        )
        :
        this.props.children;
}