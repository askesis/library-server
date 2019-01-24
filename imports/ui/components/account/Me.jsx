import React from 'react';

import { getEmails, getUserRoles } from '../../helpers/common/account';

class Me extends React.Component {
  
  render() {
    const me = Meteor.user();

    return (
      <React.Fragment>
        <div><b>Username:</b> { me && me.username }</div>
        <div><b>Email:</b> { getEmails(me) }</div>
        <div><b>Role:</b> { getUserRoles(me) }</div>
      </React.Fragment>
    );
  }
}

export default Me;