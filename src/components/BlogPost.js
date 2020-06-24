import React from 'react';

function BlogPost(props) {
    return (
        <div className="blogPost">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
}


export default BlogPost;