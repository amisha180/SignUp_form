
const initialState = {
    name: '',
    email: '',
    password: '',
    confirmpassword:'',
    countrycode:'',
    mobileno: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_USER':
        return {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          confirmpassword:action.payload.confirmpassword,
          countrycode:action.payload.countrycode,
          mobileno: action.payload.mobileno
        }
      default:
        return state
    }
  }
  
  export default reducer
  
