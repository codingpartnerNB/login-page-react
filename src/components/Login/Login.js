<<<<<<< HEAD
import React, { useState, useEffect, useReducer } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

<<<<<<< HEAD
const emailReducer = (state, action)=>{
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}

const passwordReducer = (state, action)=>{
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}

const collegeReducer = (state, action)=>{
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 0}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 0}
  }
  return {value: '', isValid: false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [enteredCollegeName, setEnteredCollegeName] = useState('');
  // const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});
  const [collegeState, dispatchCollege] = useReducer(collegeReducer, {value: '', isValid: null});

  // useEffect(()=>{
  //   const identifier = setTimeout(()=>{
  //     console.log("Checking form validity!");
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegeName.trim().length > 0
  //     );

  //     return ()=>{
  //       console.log("CLEANUP");
  //       clearTimeout(identifier);
  //     }

  //   },500);

  // }, [enteredEmail, enteredPassword, enteredCollegeName])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid && collegeState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6 && collegeState.isValid
    );
  };

  const collegeNameChangeHandler = (event) =>{
    // setEnteredCollegeName(event.target.value);
    dispatchCollege({type: 'USER_INPUT', val: event.target.value});
    setFormIsValid(
      emailState.isValid && passwordState.isValid && event.target.value.trim().length > 0
    );
  }

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));

    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const validateCollegeHandler = ()=>{
    // setCollegeNameIsValid(enteredCollegeName.trim().length > 0);
    dispatchCollege({type: 'INPUT_BLUR'});
=======
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollegeName, setEnteredCollegeName] = useState('');
  const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegeName.trim().length > 0
    );

  }, [enteredEmail, enteredPassword, enteredCollegeName])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const collegeNameChangeHandler = (event) =>{
    setEnteredCollegeName(event.target.value);
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateCollegeHandler = ()=>{
    setCollegeNameIsValid(enteredCollegeName.trim().length > 0);
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245
  }

  const submitHandler = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    props.onLogin(emailState.value, passwordState.value, collegeState.value);
=======
    props.onLogin(enteredEmail, enteredPassword, enteredCollegeName);
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
<<<<<<< HEAD
            emailState.isValid === false ? classes.invalid : ''
=======
            emailIsValid === false ? classes.invalid : ''
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
<<<<<<< HEAD
            value={emailState.value}
=======
            value={enteredEmail}
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
<<<<<<< HEAD
            passwordState.isValid === false ? classes.invalid : ''
=======
            passwordIsValid === false ? classes.invalid : ''
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
<<<<<<< HEAD
            value={passwordState.value}
=======
            value={enteredPassword}
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
<<<<<<< HEAD
        <div className={`${classes.control} ${collegeState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor='college'>College Name</label>
          <input type="text" id="college" value={collegeState.value} onChange={collegeNameChangeHandler} onBlur={validateCollegeHandler} />
=======
        <div className={`${classes.control} ${collegeNameIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor='college'>College Name</label>
          <input type="text" id="college" value={enteredCollegeName} onChange={collegeNameChangeHandler} onBlur={validateCollegeHandler} />
>>>>>>> ea8228e3cae405f50a4b9146dec5cbdacabca245
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
