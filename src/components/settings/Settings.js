import React, { useEffect } from 'react';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './settings.css';


const phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const ChangePasswordSchema = Yup.object().shape( {
  password: Yup.string()
    .min( 8, 'Must be at least 8 characters long' )
    .max( 16, 'Must be no more than 16 characters long' )
    .required( 'Some value is required to update your password' )
} );

const ChangePhoneNumberSchema = Yup.object().shape( {
  phoneNumber: Yup.string()
    .matches( phoneNumberRegex, 'Phone number is not valid' )
    .required( 'Must enter a valid number if you plan to update' )
} );

const jwtToken = localStorage.getItem( "jwtToken" );
const userId = localStorage.getItem( "userId" );

const Settings = () => {

  if ( jwtToken ) {

    return (
      <div className="settings-container">
        <header>
          <h1>
            Settings
          </h1>
        </header>
        <div className="settings-forms-container">
          <Formik
            initialValues={{
              password: ''
            }}
  
            validationSchema={ChangePasswordSchema}
  
            onSubmit={( values ) => {
              axios.put( `https://tt157-backend.herokuapp.com/api/users/${userId}`, {
                password: values.password
              } , {
                headers: { authorization: `bearer ${jwtToken}`}
              } ).then( res => {
                console.log( res );
                return res.data;
              })
            }}
          >
            {( { errors, touched, isValid, dirty, values } ) => (
              <Form>
                <label>Update Password: </label>
                <Field name="password" placeholder="abcD1234?" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <span>
                  <button
                    type="submit"
                    disabled={!( dirty && isValid && values.password )}
                  >
                    Submit
                  </button>
                </span>
              </Form>
            )}
          </Formik>
          <Formik
            initialValues={{
              phoneNumber: ''
            }}
  
            validationSchema={ChangePhoneNumberSchema}
  
            onSubmit={( values ) => {
              axios.put( `https://tt157-backend.herokuapp.com/api/users/${userId}`, {
                phone_number: values.phoneNumber
              } , {
                headers: { authorization: `bearer ${jwtToken}`}
              } ).then( res => {
                console.log( res );
                return res.data;
              })
            }}
          >
            {( { errors, touched, isValid, dirty, values } ) => (
              <Form>
                <label>Update Phone Number: </label>
                <Field name="phoneNumber" placeholder="555-123-4567" />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div>{errors.phoneNumber}</div>
                ) : null}
                <span>
                  <button
                    type="submit"
                    disabled={!( dirty && isValid && values.phoneNumber )}
                  >
                    Submit
                  </button>
                </span>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  } else {
    window.location.replace( '/login' );
  }
}

export default Settings;