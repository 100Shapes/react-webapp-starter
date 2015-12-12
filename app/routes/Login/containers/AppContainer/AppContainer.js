import React, {Component, PropTypes, createElement} from 'react';
import {connect} from 'react-redux';

import App from '../../components/App';

/**
 * The AppContainer
 */
class AppContainer extends Component {
    render() {
        return createElement(In, this.props);
    }
}

const mapStateToProps = ({event, user}) => {
    return {
        event,
        user
    };
};

export default connect(
    mapStateToProps
)(AppContainer)
