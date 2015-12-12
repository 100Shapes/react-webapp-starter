import React, {PropTypes} from 'react';

const Event = ({name, subtitle}) => {
    return (
        <div>
            <h2 className="mb0">{name}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

export default Event;
