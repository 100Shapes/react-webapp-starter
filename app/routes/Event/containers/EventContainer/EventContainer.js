import {Component, createElement} from 'react';
import {connect} from 'react-redux';

import Event from '../../components/Event';

/**
 * The EventContainer
 */
class EventContainer extends Component {
    render() {
        return createElement(Event, this.props);
    }
}

const mapStateToProps = ({event}) => {
    return {
        event
    };
};

export default connect(
    mapStateToProps
)(EventContainer);
