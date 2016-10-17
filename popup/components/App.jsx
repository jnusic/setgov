import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';

class App extends Base {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('App render');

        // switch (this.props.activeComponent) {
        // case 'CandidateView':
        //     activeComponent = <CandidateView/>;
        //     break;
        // default:
        //     break;
        // }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('App mapStateToProps');

    console.log(state);

    return {
        Environment: state.Environment,
        Candidate: state.Candidate,
        PlatformCounts: state.PlatformCounts
    };
};

export default connect(mapStateToProps)(App);