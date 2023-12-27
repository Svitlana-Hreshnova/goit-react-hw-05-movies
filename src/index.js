import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

const repositoryName = 'goit-react-hw-05-movies';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App repositoryName={repositoryName} />
  </React.StrictMode>
);
