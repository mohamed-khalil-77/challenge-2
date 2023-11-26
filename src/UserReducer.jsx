// UserRreducer.js

const initialState = {
    user: null,
    isLoggedIn: false,
    // Other user-related state properties...
  };
  
  const UserRreducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
      // Other cases for user-related actions...
      default:
        return state;
    }
  };
  
  export default UserRreducer;
  