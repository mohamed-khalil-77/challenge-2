// App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import LoginScreen from './LoginScreen';
import VideoFeed from './VideoFeed';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TikTok Clone</h1>
        {/* Conditionally render LoginScreen or VideoFeed based on user authentication */}
        {/* For simplicity, assuming isLoggedIn state exists in Redux */}
        {store.getState().user.isLoggedIn ? <VideoFeed /> : <LoginScreen />}
      </div>
    </Provider>
  );
}

export default App;
