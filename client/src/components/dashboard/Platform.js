import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePlatform } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Platform = ({ platform, deletePlatform }) => {
  const platforms = platform.map((plt) => (
    <tr key={plt._id}>
      <td>{plt.platform}</td>
      <td className="hide-sm">{plt.indicator}</td>
      <td>
        {formatDate(plt.from)} - {plt.to ? formatDate(plt.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deletePlatform(plt._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Investing/Trading Platforms</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Platform</th>
            <th className="hide-sm">Indicator</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{platforms}</tbody>
      </table>
    </Fragment>
  );
};

Platform.propTypes = {
  platform: PropTypes.array.isRequired,
  deletePlatform: PropTypes.func.isRequired
};

export default connect(null, { deletePlatform })(Platform);
