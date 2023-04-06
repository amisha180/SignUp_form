import React from 'react'
import { useSelector } from 'react-redux'
import '../Component/View.css'

const View = () => {
    const {name, email, password, confirmpassword, 
        countrycode, mobileno} = useSelector((state)=>state.user)
  return (
    <div>
      <h3 className="heading"><u>View ( user info from Redux store )</u></h3>
      <ul className="cont">
        <li>Name : {name} </li> 
        <li>Email : {email} </li>
        <li>Password : {password} </li>
        <li>Confirm Password : {confirmpassword} </li>
        <li>Country code: {countrycode} </li>
        <li>Mobile no : {mobileno} </li>
      </ul>
    </div>
  )
}

export default View
