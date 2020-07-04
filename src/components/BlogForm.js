import React from 'react';
import { useInput } from '../hooks/input-hook';
import database from '../database';
import moment from 'moment';

function BlogForm(props) {
    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: body, bind: bindBody, reset: resetBody } = useInput('');

    const handleSubmit = async evt => {
        evt.preventDefault();

        const date = moment().toISOString();
        const weekNumber = moment().week();
        const year = moment().year();
        const yearWeek = `${year}-${weekNumber}`;

        console.log(title, body, date, weekNumber);
        console.log(moment(date));

        //TODO: Update form to work with new schema
        // Check if current week is in db
        const weekExists = await database
        .ref(`weeks/${yearWeek}`);
        
        // if not, create week
        if (!weekExists) {
            database
            .ref(`weeks/${yearWeek}`)
            .set({
                posts: {},
                weekNumber,
                year
            });
        }
        // add new post to week
        database
        .ref(`weeks/${yearWeek}/posts`)
        .push()
        .set({
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

export default BlogForm;