import React, {FunctionComponent} from "react";
import {useField} from "formik";
import {TextField} from "@material-ui/core";
import styles from './MyTextInput.module.scss'

interface InputProps {
    id?: string
    name: string
    label?: string
    type?: string
}


const MyTextInput: FunctionComponent<InputProps> = (props) => {

    const [field, meta] = useField(props);
    return (
        <>
            <TextField
                className={styles.input}
                error={!!meta.error}
                helperText={meta.error || ' '}
                {...field}
                {...props}
            />
        </>
    );
};

export default MyTextInput
