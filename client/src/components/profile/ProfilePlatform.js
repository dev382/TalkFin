import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfilePlatform = ({
  platform: { indicator, platform, timeFrame, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{platform}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Preferred Indicator: </strong> {indicator}
    </p>
    <p>
      <strong>Preferred Chart Time Frame: </strong> {timeFrame}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfilePlatform.propTypes = {
  platform: PropTypes.object.isRequired
};

export default ProfilePlatform;
