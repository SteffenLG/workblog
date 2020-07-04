import React from 'react';

function BlogPost(props) {
    const { title, body } = props.post;
    return (
        <div className="blogPost">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default BlogPost;