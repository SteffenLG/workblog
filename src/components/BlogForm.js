import React, { useState } from 'react';
import { useInput } from '../hooks/input-hook';
import database from '../database';
import moment from 'moment';

function NameForm(props) {
    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: body, bind: bindBody, reset: resetBody } = useInput('');

    const handleSubmit = evt => {
        evt.preventDefault();

        const date = moment().toISOString();
        const weekNumber = moment().week();
        const yearWeek = `${moment().year()}-${moment().week()}`;

        console.log(title, body, date, weekNumber);
        console.log(moment(date));

        database.ref('weeks').push(yearWeek).set({
            title,
            body,
            date,
            weekNumber
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
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NameForm;