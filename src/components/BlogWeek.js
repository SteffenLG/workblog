import React from 'react';
import BlogPost from './BlogPost';

function BlogWeek(params) {
    const { week } = params;

    return (
        <div className="blogWeek">
            <div className="weekNumber">
                <h5>Week</h5>
                <h1>{week.weekNumber}</h1>
            </div>
            <div className="blogPosts">
                {
                    Object.entries(week.posts).map(([key, post]) => 
                        <BlogPost key={key} post={post} />
                    )
                }
            </div>
        </div>
    );
}

export default BlogWeek;