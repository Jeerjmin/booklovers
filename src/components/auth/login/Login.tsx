import React from "react"
import { observer} from "mobx-react";
import {Link} from "@reach/router";
import MyTextInput from "../../ui-kit/formik/MyTextInput";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import styles from './Login.module.scss'
import {Button} from "@material-ui/core";
import {useStore} from "../../../helpers/helpers";


const Login = observer(() => {
    const rootStore = useStore();
    const { userStore } = rootStore;

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                        password: Yup.string()
                            .required("Required")
                    })
                }
                onSubmit={async (values, { setSubmitting }) => {
                    userStore.login(values.email);
                    setSubmitting(false);
                }}
            >
                <Form className={styles.container}>
                    <MyTextInput label="Email" name="email" type="email" />
                    <MyTextInput label="Password" name="password" type="password" />
                    <Button type="submit" variant="outlined" color="primary">
                        Sign in
                    </Button>
                    <Link to="/register">Have not account?</Link>
                </Form>
            </Formik>

        </>
    )
})

export default Login
