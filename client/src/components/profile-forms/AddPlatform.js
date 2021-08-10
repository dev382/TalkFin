import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlatform } from '../../actions/profile';

const AddPlatform = ({ addPlatform, history }) => {
  const [formData, setFormData] = useState({
    indicator: '',
    platform: '',
    timeFrame: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { indicator, platform, timeFrame, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add A Platform</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add an investing/trading platform
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addPlatform(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Platform"
            name="platform"
            value={platform}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Most utilized indicator "
            name="indicator"
            value={indicator}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Preferred chart time frame"
            name="timeFrame"
            value={timeFrame}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Current Platform
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Platform Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddPlatform.propTypes = {
  addPlatform: PropTypes.func.isRequired
};

export default connect(null, { addPlatform })(AddPlatform);
