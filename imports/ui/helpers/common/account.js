export const getEmails = user => {
    if ( user ){
      if ( user.emails ) {
        return user.emails.map( ({address}, i) => `${address}${i + 1 < user.emails.length ? ', ' : ''}` );
      } else {
        'Email not found';
      }
    } else {
      console.warn('User is not defined');
      return '';
    }
  };

 export const getUserRoles = user => {
    if ( user ) {
      if ( user.roles ) {
        return user.roles.map( (r, i) => `${r}${i + 1 < user.roles.length ? ', ' : ''}` );
      } else {
        return 'User haven\'t role '
      }
    } else {
      console.warn('User is not defined');
      return '';
    }
  };