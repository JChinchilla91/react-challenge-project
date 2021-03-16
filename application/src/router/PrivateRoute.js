import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    auth: state.auth
})

const PrivateRoute = ({ component: Component, auth: { token }, ...rest }) => {
    return (
      <Route { ...rest }
        render={ props => token ?
        <Component { ...props } /> :
        <Redirect to='/login' />}
      />
    );
};

export default connect(mapStateToProps, null)(PrivateRoute)