import React, { useEffect } from 'react';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './settings.scss';


const ChangePasswordSchema = Yup.object().shape( {
  password: Yup.string()
    .min( 8, 'Must be at least 8 characters long' )
    .max( 24, 'Must be no more than 24 characters long' )
    .required( 'Some value is required to update your password' )
} );

const ChangePhoneNumberSchema = Yup.object().shape( {
  phoneNumber: Yup.string()
    .min( 7, 'Number is too short' )
    .max(15, 'Number is too long')
    .required( 'Must enter a valid number if you plan to update' )
} );

const jwtToken = localStorage.getItem( "jwtToken" );
const userId = localStorage.getItem( "userId" );

const Settings = ( props ) => {
  const { pageTitle } = props;

  useEffect( () => {
    pageTitle( "SETTINGS" );
  }, [] );

  return (
    <div className="settings-container">
      {
        jwtToken ?
          <div className="settings-forms-container">
            <Formik
              initialValues={{
                password: ''
              }}
      
              validationSchema={ChangePasswordSchema}
      
              onSubmit={( values, e ) => {
                e.stopPropagation();
                axios.put( `https://tt157-backend.herokuapp.com/api/users/${userId}`, {
                  password: values.password
                }, {
                  headers: { authorization: `bearer ${jwtToken}` }
                } ).then( res => {
                  return res.data;
                } );
              }}
            >
              {( { errors, touched, isValid, dirty, values } ) => (
                <Form className="settings_forms" testid="form1">
                  <label className="update_pass">Update Password</label>
                  <Field name="password" placeholder="abcD1234?" />
                  {errors.password && touched.password ? (
                    <div testid="error-div-password">{errors.password}</div>
                  ) : null}
                  <span testid="settings-password-span">
                    <button
                      type="submit"
                      disabled={!( dirty && isValid && values.password )}
                      testid="settings-password-submit"
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
      
              onSubmit={( values, e ) => {
                e.stopPropagation();
                let phoneNumber = parseInt( values.phoneNumber.replace( /[^0-9]/g, '' ) );
                axios.put( `https://tt157-backend.herokuapp.com/api/users/${userId}`, {
                  phone_number: phoneNumber
                }, {
                  headers: { authorization: `bearer ${jwtToken}` }
                } ).then( res => {
                  return res.data;
                } );
              }}
            >
              {( { errors, touched, isValid, dirty, values } ) => (
                <Form className="settings_forms" testid="form2">
                  <label className="update_phone">Update Phone Number</label>
                  <Field name="phoneNumber" placeholder="555-123-4567" />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div testid="error-div-phoneNumber">{errors.phoneNumber}</div>
                  ) : null}
                  <span testid="settings-phoneNumber-span">
                    <button
                      type="submit"
                      disabled={!( dirty && isValid && values.phoneNumber )}
                      testid="settings-phoneNumber-submit"
                    >
                      Submit
                    </button>
                  </span>
                </Form>
              )}
            </Formik>
          </div>
          :
          <div>
            ...
          </div>
      }
    </div>
  );
};

export default Settings;