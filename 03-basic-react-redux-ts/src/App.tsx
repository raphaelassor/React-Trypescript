import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import { RepoList } from './cmps/RepoList';


export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <RepoList />
      </div>
    </Provider>
  );
}


