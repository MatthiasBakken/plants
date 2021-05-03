import React, { useEffect } from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './signup.scss'


const SignupSchema = Yup.object().shape( {
  username: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  phoneNumber: Yup.string()
    .min( 7, 'Number is too short' )
    .max( 15, 'Number is too long' )
    .required( 'Required' ),
  password: Yup.string()
    .min( 8, 'Must be at least 8 characters long' )
    .max( 24, 'Must be 24 characters or less')
    .required( 'Required' ),
} );

const Signup = ( props ) => {
  const { pageTitle } = props;

  useEffect( () => {
    pageTitle( "CREATE ACCOUNT" );
  }, [] );
  
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          username: '',
          phoneNumber: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={( values ) => {
          axios.post( "https://tt157-backend.herokuapp.com/api/auth/register", {
            username: values.username,
            password: values.password,
            phone_number: parseInt( values.phoneNumber.replace( /[^0-9]/g, '' ) )
          } ).then( res => {
            localStorage.setItem( "jwtToken", res.data.token )
            let jwtToken = res.data.token;
            const parseJwt = ( token ) => {
              if ( !token ) {
                  return;
              }
              const base64Url = token.split( '.' )[ 1 ];
              const base64 = base64Url
                  .replace( '-', '+' )
                  .replace( '_', '/' );
              return JSON.parse( window.atob( base64 ) );
            };
            const userId = parseJwt( jwtToken ).subject;
            localStorage.setItem( 'userId', userId );
            window.location.replace( '/home' );
          })
        }}
      >
        {( { errors, touched, isValid, dirty } ) => (
          <Form className="signup_form">
            <label >Username: </label>
            <Field name="username" />
            {errors.username && touched.username ? (
              <div className="error-div">{errors.username}</div>
            ) : null}
            <label>Phone Number: </label>
            <Field name="phoneNumber" />
            {errors.phoneNumber && touched.phoneNumber ? (
              <div className="error-div">{errors.phoneNumber}</div>
            ) : null}
            <label>Password: </label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div className="error-div">{errors.password}</div>
            ) : null}
            <span className="button-container">
              <button className="signup_button" type="submit" disabled={!( dirty && isValid )} >Sign Me Up!</button>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Signup;