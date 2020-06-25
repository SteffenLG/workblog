import React, { useState } from 'react';
import { useInput } from '../hooks/input-hook';
import database from '../database';

function NameForm(props) {
    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: body, bind: bindBody, reset: resetBody } = useInput('');

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(title, body);
        database.ref('posts').push().set({
            title,
            body
        });
        resetTitle();
        resetBody();
    };

    return (
        <div className="blogForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" {...bindTitle}/>
                    <br/>
                </label>
                <label>
                    Body:
                    <br/>
                </label>
                <textarea rows="3" cols="50" {...bindBody}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NameForm;