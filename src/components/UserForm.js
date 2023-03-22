import React from 'react';
import {Control, Form, actions} from 'react-redux-form';
import {useDispatch} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";

function UserForm() {

    const dispatch = useDispatch()

    return (
        <Form
            model="user"
            onSubmit={(user) => dispatch({type:'infoSubmitted', payload: user})}
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