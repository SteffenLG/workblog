import React from 'react';

function BlogWeek(params) {
    const { posts, weekNumber } = params;

    return (
        <div className="blogWeek">
            <div className="weekNumber">
                <h5>Week</h5><br/>
                <h1>{weekNumber}</h1>
            </div>
            <div className="blogPosts">
                {
                    Object.entries(posts).map(([key, post]) => {
                        <BlogPost key={key} post={post} />
                    })
                }
            </div>
        </div>
    );
}