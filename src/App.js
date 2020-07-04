import React from 'react';
import './App.css';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Blog!
        </p>
      </header>
      <div className="Blog">
        <Blog />
      </div>
      <div className="BlogForm">
        <BlogForm />
      </div>
    </div>
  );
}

export default App;
