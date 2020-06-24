import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog'
import getAllPosts from './database/DatabaseService'
import useGetAllPosts from './database/DatabaseService';
import BlogPost from './components/BlogPost';
import firebase from 'firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      firebase.database()
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
          {posts.map(post => (
            <BlogPost title={post.title} body={post.body} />
          ))}
      </div>
    </div>
  );
}

export default App;
