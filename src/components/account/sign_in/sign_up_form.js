import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
    console.log('Sign In Form Props:', props);
    const { handleSubmit, signUp } = props;

    return (
        <form onSubmit={handleSubmit(signUp)}>
            <div className="row">
                <Field id="name" name="name" component={Input} label="Name"/>
            </div>
            <div className="row">
                <Field id="email" name="email" component={Input} label="Email"/>
            </div>
            <div className="row">
                <Field id="password" name="password" component={Input} type="password" label="Password"/>
            </div>
            <div className="row">
                <Field id="password2" name="password2" component={Input} type="password" label="Re-enter Password"/>
            </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple darken-2">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

function validate(values){
    const { email, password} = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email';
    }
    if(!password){
        errors.password = 'Please enter your password';
    }
    return errors;
}

// new user has signed up,

export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpForm);
