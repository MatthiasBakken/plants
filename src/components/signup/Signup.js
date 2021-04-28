import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './styles.scss'


const phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const SignupSchema = Yup.object().shape( {
  username: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, 'Not a valid number')
    .required( 'Required' ),
  password: Yup.string()
    .min( 8, 'Must be at least 8 characters long' )
    .max( 16, 'Must be 16 characters or less')
    .required( 'Required' ),
} );
const Signup = () => {
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
            console.log( "res", res );
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
            window.location.replace( '/create-plant' );
          })
        }}
      >
        {( { errors, touched, isValid, dirty } ) => (
          <Form className="form">
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
              <div className="error-div">{errors.email}</div>
            ) : null}
            <span className="button-container">
              <button type="submit" disabled={!( dirty && isValid )} >Sign Me Up!</button>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Signup;