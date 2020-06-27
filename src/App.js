import React, {useState, useEffect} from 'react';
import './App.css';
import Blog from './components/Blog'
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import database from './database';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      database
      .ref('posts')
      .once('value')
      .then(snapshot => {
          const newPosts = snapshot.val();
          console.log(newPosts);
          setPosts(newPosts);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Blog!
        </p>
      </header>
      <div>
          {
            Object.entries(posts).map(([key, post]) => 
              <BlogPost key={key} title={post.title} body={post.body} />
            )
          }
      </div>
      <div>
        <BlogForm>
          <p>Hello World</p>
        </BlogForm>
      </div>
    </div>
  );
}

export default App;
