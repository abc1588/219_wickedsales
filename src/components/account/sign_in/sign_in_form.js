import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    console.log('Sign In Form Props:', props);
    const { handleSubmit, signIn } = props;

    return (
        <form onSubmit={handleSubmit(signIn)}>
            <div className="row">
                <Field id="email" name="email" component={Input} label="Email"/>
            </div>
            <div className="row">
                <Field id="password" name="password" component={Input} type="password" label="Password"/>
            </div>
                <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple darken-2">Sign In</button>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'sign-in-form'
})(SignInForm);
