import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-primary'>
        <i className='fas fa-user-circle text-light' /> Edit Profile
      </Link>
      <Link to='/add-platform' className='btn btn-primary'>
        <i className='fas fa-desktop text-light' /> Add Investing/Trading Platform
      </Link>
      <Link to='/add-education' className='btn btn-primary'>
        <i className='fas fa-graduation-cap text-light' /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
