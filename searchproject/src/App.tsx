import React from 'react';
import logo from './logo.svg';
import GithubImage from './github.png'
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github Profile</h1>
      <form>
        <div className="form-group">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control"
              required
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img 
          src={GithubImage} 
          className="responsive rounded-circle" 
          alt="" 
          height="200px"
        />
        <h1 className="pt-5">
          <a href="https://github.com/ThiagoSouza17" target="_new" className="text-info">
            Thiago Souza
          </a>
        </h1>
        <h3>Itabaiana</h3>
        <p>
          <a href="https://dsvendas-thiagosouza.netlify.app" target="_new">
            https://dsvendas-thiagosouza.netlify.app
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
