import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context';
import { MessageProviderWrapper } from './context/message.context';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

ReactDOM.render(

  <Router>
    <AuthProviderWrapper>
      <MessageProviderWrapper>
        <App />
      </MessageProviderWrapper>
    </AuthProviderWrapper>
  </Router>,
  document.getElementById('root')
)