import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './styles.scss'

const SignupSchema = Yup.object().shape( {

  username: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  phoneNumber: Yup.number()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  password: Yup.string()
    .min( 8, 'Must be at least 8 characters long' )
    .max( 16, 'Must be 16 characters or less')
    .required( 'Required' ),
  terms: Yup.boolean().required( 'Required' ),
} );
const Order = () => {
  return (
    <div className="form-container">

      <Formik
        initialValues={{
          username: '',
          phoneNumber: '',
          password: '',
          terms: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={( values ) => {
          axios.post( `https://reqres.in/api/pizza`, {
            username: values.username,
            phoneNumber: values.phoneNumber,
            password: values.password,
            terms: values.terms
          } ).then( res => {
            // Location.replace( `/confirmation?${res.data}` );
            // window.history.replaceState( res.data, 'confirmation', `/confirmation` );
            console.log(res)
          } );
        }}
      >
        {( { errors, touched, isValid, dirty, values } ) => (
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
            <label>Terms of Service: </label>
            <Field name="terms" type="checkbox" id="terms" />
            {errors.terms && touched.terms ? (
              <div className="error-div">{errors.terms}</div>
            ) : null}
            <span className="button-container">
              <button type="submit" disabled={!( dirty && isValid && values.terms )} >Create Account</button>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Order;