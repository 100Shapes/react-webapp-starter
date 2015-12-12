import {Component, createElement, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Map} from 'immutable';


import Event from '../../components/Event';

/**
 * The EventContainer
 */
class EventContainer extends Component {

    static propTypes = {
        event: PropTypes.instanceOf(Map)
    };


    render() {
        const {event} = this.props;
        return createElement(Event, event.toJS());
    }
}

const mapStateToProps = (state) => {
    const {event} = state;
    return {
        event
    };
};

export default connect(
    mapStateToProps
)(EventContainer);
