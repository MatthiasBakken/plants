import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

import './login.scss';


const LoginSchema = Yup.object().shape( {
  username: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  password: Yup.string()
    .min( 8, 'Must be at least 8 characters long' )
    .max( 24, 'Must be 24 characters or less')
    .required( 'Required' ),
} );

function Login ( props ) {
    
    const { pageTitle, history } = props;
    const { push } = useHistory();

    useEffect( () => {
        console.log( history );
        const hr = ( new Date() ).getHours();
        if ( hr === 0 || hr < 11 ) {
            localStorage.setItem( "greetingTime", "Good Morning, " );
        } else if ( hr > 10 && hr < 17 ) {
            localStorage.setItem( "greetingTime", "Good Afternoon, " );
        } else if ( hr > 16 && hr < 20 ) {
            localStorage.setItem( "greetingTime", "Good Evening, " );
        } else {
            localStorage.setItem( "greetingTime", "Goodnight, " );
        };
        pageTitle( "LOGIN" );
    });

    return (
        <div className="login-container">
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
                            localStorage.setItem( "loginMsg", `${localStorage.getItem("greetingTime")}${res.data.message.split(" ")[0]}!` );
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
                            push( '/home' );
                        } );
                    }}
                >
                    {( { errors, touched, isValid, dirty } ) => (
                        <Form className="login_form">
                            <label >Username: </label>
                            <Field name="username" />
                            {errors.username && touched.username ? (
                                <div className="error-div">{errors.username}</div>
                            ) : null}
                            <label>Password: </label>
                            <Field name="password" type="password" />
                            {errors.password && touched.password ? (
                                <div className="error-div">{errors.password}</div>
                            ) : null}
                            
                                <button className="login_button" type="submit" disabled={!( dirty && isValid )} >Log me in!</button>
                            
                        </Form>
                    )}
                </Formik>
                <div className="create-account-link-container">
                    <p className="create-account-link">Don't have an account? <Link to="/signup"><span className="click_here">Click Here</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;