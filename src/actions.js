// actions.js

export const setUser = (name, email, password,confirmpassword,
    countrycode,mobileno) => (dispatch,getState)=>{
    dispatch({
      type: 'SET_USER',
      payload: {
        name,
        email,
        password,
        confirmpassword,
        countrycode,
        mobileno
      }
    })
  }
  