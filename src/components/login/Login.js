import React from 'react'

import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import Styles from './styles.scss'


const LoginSchema = Yup.object().shape( {
  username: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  password: Yup.string()
    .min( 8, 'Must be at least 8 characters long' )
    .max( 16, 'Must be 16 characters or less')
    .required( 'Required' ),
  terms: Yup.boolean().required( 'Required' ),
} );

function Login (){

    return (
        <div className="form-container">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={( values ) => {
                    axios.post( `https://tt157-backend.herokuapp.com/api/auth/login`, {
                        username: values.username,
                        password: values.password
                    } ).then( res => {
                        console.log( res );
                        localStorage.setItem( "jwtToken", res.data.token );
                        let jwtToken = localStorage.getItem( "jwtToken" );
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
                        window.location.replace( '/plants' );
                    } );
                }}
            >
                {( { errors, touched, isValid, dirty } ) => (
                    <Form className="form">
                        <label >Username: </label>
                        <Field name="username" />
                        {errors.username && touched.username ? (
                            <div className="error-div">{errors.username}</div>
                        ) : null}
                        <label>Password: </label>
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? (
                            <div className="error-div">{errors.email}</div>
                        ) : null}
                        <span className="button-container">
                            <button type="submit" disabled={!( dirty && isValid)} >Sign Me Up!</button>
                        </span>
                    </Form>
                )}
            </Formik>
            <div>
                <p>Don't have an account? <Link to="/signup">Click Here</Link></p>
            </div>
        </div>
    );
};

export default Login;