import React, { useState, useEffect } from 'react';
import database from '../database';
import BlogWeek from './BlogWeek';

function Blog() {
    const [weeks, setWeeks] = useState([]);

    useEffect(() => {
        database
        .ref('weeks')
        .orderByKey()
        .on('value', snapshot => {
            const newWeeks = snapshot.val();
            console.log(newWeeks);
            setWeeks(newWeeks);
        })
    }, []);

    return (
        <div className="blog">
            {
                Object.entries(weeks)
                .reverse()
                .map(
                    ( [key, week] ) => (
                        <BlogWeek key={key} week={week} />
                    )
                )
            }
        </div>
    );
}

export default Blog;