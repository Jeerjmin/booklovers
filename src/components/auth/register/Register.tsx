import React, { useContext, useState } from "react"
import {observer} from "mobx-react";
import {Link} from "@reach/router";
import MyTextInput from "../../ui-kit/formik/MyTextInput";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import styles from './Register.module.scss'
import {Button} from "@material-ui/core";

const Register = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={
                    Yup.object({
                        username: Yup.string()
                            .required("Required"),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                        password: Yup.string()
                            .required("Required"),
                        confirm_password: Yup.string()
                            .required("Required")
                            .test('passwords-match', 'Passwords must match', function(value) {
                                return this.parent.password === value;
                            }),
                    })
                }
                onSubmit={async (values, { setSubmitting }) => {
                    console.log('submit', values)
                    setSubmitting(false);
                }}
            >
                <Form className={styles.container}>
                    <MyTextInput label="Username" name="username" />
                    <MyTextInput label="Email" name="email" type="email" />
                    <MyTextInput label="Password" name="password" type="password" />
                    <MyTextInput label="Confirm password" name="confirm_password" type="password" />
                    <Button type="submit" variant="outlined" color="primary">
                        Create account
                    </Button>
                    <Link to="/login">Already have account? Sign in</Link>
                </Form>
            </Formik>

        </>
    )
}

export default observer(Register)
