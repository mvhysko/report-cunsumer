import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { apiClient } from './api';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <ApolloProvider client={apiClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
