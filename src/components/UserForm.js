import React from 'react';
import {Control, Form, actions} from 'react-redux-form';
import {useDispatch} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";

function UserForm() {

    const dispatch = useDispatch()

    function handleSubmit (user) {
        dispatch({type:'infoSubmitted', payload: user})
    }

    return (
        <Form
            model="user"
            onSubmit={(user) => handleSubmit(user)}
        >
            <label htmlFor="user.firstName">First name:</label>
            <Control.text model="user.firstName" id="user.firstName"/>

            <label htmlFor="user.lastName">Last name:</label>
            <Control.text model="user.lastName" id="user.lastName"/>

            <button type="submit">
                Finish registration!
            </button>
        </Form>
    );

}

export default UserForm;