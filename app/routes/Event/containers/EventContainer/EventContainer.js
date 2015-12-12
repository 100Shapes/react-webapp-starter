import {Component, createElement} from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';


import Event from '../../components/Event';

/**
 * The EventContainer
 */
class EventContainer extends Component {

    static propTypes = {
        event: ImmutablePropTypes.map
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
